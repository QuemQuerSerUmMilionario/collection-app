"use client";
import { useState, useEffect } from "react";
import { useParams } from 'next/navigation';
import Image from "next/image"

const ImagesList = ({ data }) => {
  return (
    <div className='mt-16'>
      {data.map((link, index) => {
        return (
          <div className="m-4" key={index}>
            <Image
              src={link}
              width={200}
              height={200}
              alt='aws-image' />
          </div>
        )
      })}
    </div>
  );
};

const Collection = () => {
  const [searchedImages, setSearchedImages] = useState([]);
  const params = useParams();;
  const id = params.id;
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
    const response = await fetch(`/api/collection/${id}/model`,
      {
        method: 'POST',
        body: form,
      }
    )
    if (response.ok) {
      alert('upload sucessful.');
    } else {
      alert('Failed to upload.');
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

  const getImages = async () => {
    const images = await fetch(`/api/collection/${id}/model`,
      {
        method: 'GET'
      }
    ).then((response) => {
      return response.json();
    }).catch(error => {
      console.error(error);
      return [];
    });
    setSearchedImages(images);
  };
  useEffect(() => {
    getImages();
  }, []);
  return (
    <div>
      <Image
        src={createObjectURL}
        width={200}
        height={200}
        alt="image to upload"
      />
      <input type="file" name="myImage" onChange={uploadToClient} />
      <form onSubmit={handleSubmit}>
        <button type="submit" disabled={uploading} className='outline_btn m-4'>
          Upload
        </button>
      </form>
      {searchedImages ??
        (
          <ImagesList data={searchedImages} />
        ) 
      }
    </div>
  );
};

export default Collection;
