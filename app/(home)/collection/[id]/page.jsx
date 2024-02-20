"use client";
import { useState, useEffect } from "react";
import { useParams } from 'next/navigation';
import Image from "next/image"
import ItemCard from "@components/collection/ItemCard";
const Collection = () => {
  const [searchedImages, setSearchedImages] = useState([]);
  const params = useParams();;
  const id = params.id;
  const [collection, setCollection] = useState([]);
  const [uploading, setUploading] = useState(false)

  useEffect(()=> {
    getItems();
  },[])

  const getItems = async () => {
    const response = await fetch(`/api/collection/${id}/model`,
      {
        method: 'GET'
      }
    )
    if(response.ok){
       const collection = await response.json();
       setCollection(collection);
    }
  };

  return (
    <>
        <h1>{collection?.name}</h1>
        <div className="flex flex-wrap justify-center">
          {collection && collection.items?.map((userItem,index)=>{
             
              return (
                <ItemCard 
                  key={index} 
                  userItem={userItem}
                />
              )
          })}
       </div>
    </>
  );
};

export default Collection;
