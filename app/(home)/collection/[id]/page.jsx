"use client";
import { useState, useEffect } from "react";
import { useParams } from 'next/navigation';
import Image from "next/image"
import ItemCard from "@components/collection/UserItemCard";
import Loading from "./loading";
const Collection = () => {
  const [searchedImages, setSearchedImages] = useState([]);
  const params = useParams();;
  const id = params.id;
  const [collection, setCollection] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    getItems();
  },[])

  const getItems = async () => {
    setLoading(true);
    const response = await fetch(`/api/collection/${id}/model`,
      {
        method: 'GET'
      }
    )
    setLoading(false);
    if(response.ok){
       const collection = await response.json();
       setCollection(collection);
    }
  };

  return (
    <>
         <h1 className='head_text'>{collection?.name}</h1>
        <div className="flex flex-wrap justify-center">
          {loading &&
            <Loading/>
          }
          {!loading && collection.items?.map((userItem,index)=>{
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
