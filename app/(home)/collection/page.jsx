"use client";

import CollectionCard from "@components/collection/CollectionCard";
import { useState, useEffect } from "react";
import Link from "next/link";

const CollectionList = ({data}) => {
    return (
       <div>
            {
              data.map((collection , index) => {
                return (<CollectionCard key={index} collection={collection}/>) 
              })
            }
       </div>
    ) 
   
}

const Collection = () => {
  const [collections, setCollections] = useState([]);
  const getCollections = async (e) => {

    const response = await fetch( `/api/collection/`,
      {
        method: 'GET'
      }
    );
    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData);
      return;
    }
     const lista = await response.json();
     setCollections(lista);
  };

  useEffect(() => {
    getCollections();
  }, []);

  return (
    <div className="w-full">
        <Link href='/collection/create-collection' className="black_btn">+</Link>
        {collections.length > 0 && <CollectionList data={collections} />}

    </div>
  );
};

export default Collection;
