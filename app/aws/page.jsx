"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image"
const ImagesList = ({data}) => {
  return (
    <div className='mt-16'>
      {data.map((link) => {
        return (
          <div className="m-4">
            <Image
            src={link}
            width={200}
            height={200}
            alt='aws-image'/>
          </div>
        )
      })}
    </div>
  );
};

const CreateCollection = () => {
  const [searchedImages, setSearchedImages] = useState([]);
  const router = useRouter();
  const { data: session } = useSession();
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const [file, setImage] = useState(null);
  
  const [uploading, setUploading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!file) {
      alert('Please select a file to upload.')
      return
    }

    setUploading(true)
    var form = new FormData();
    form.append('file', file);

    const response = await fetch(
      '/api/aws/',
      {
        method: 'POST',
        body: form,
      }
    )

    if (response.ok) {
      const { url, fields } = await response.json()

      const formData = new FormData()
      Object.entries(fields).forEach(([key, value]) => {
        //formData.append(key)
      })
      formData.append('file', file)

      const uploadResponse = await fetch(url, {
        method: 'POST',
        body: formData,
      })

      if (uploadResponse.ok) {
        alert('Upload successful!')
      } else {
        console.error('S3 Upload Error:', uploadResponse)
        alert('Upload failed.')
      }
    } else {
      alert('Failed to get pre-signed URL.')
    }

    setUploading(false)
  }
  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };
  
  const getImages = async (event) => {
    const response = await fetch(
    `/api/aws/`,
      {
        method: 'GET'
      }
    ).then((response) => {
      return response.json();
    });
    if(response.length > 0)
      setSearchedImages(response);
  };
  return (
    <div>
      <div>
        <img 
          src={createObjectURL} 
          width={200}
          height={200}
        />
        <input type="file" name="myImage" onChange={uploadToClient} />
        <form onSubmit={handleSubmit}>
          <button type="submit" disabled={uploading} className='outline_btn m-4'>
              Upload
          </button>
        </form>
          <button type="button" onClick={getImages} className='outline_btn m-4' >
              get images
          </button>
          {searchedImages?
            (
             <ImagesList
                data={searchedImages}/>
            ):(
              "image test"
            )
          }
      </div>
    </div>
  );
};

export default CreateCollection;
