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
  const getCollections = async (event) => {
    const response = await fetch( `/api/collection/`,
      {
        method: 'GET'
      }
    ).then((response) => {
      return response.json();
    });
     setCollections(response);
  };

  useEffect(() => {
    getCollections();
  }, []);

  return (
    <div className="w-full">
        <Link href='/create-collection' className="black_btn">+</Link>
        {collections.length > 0?
              (
                <CollectionList data={collections}/>
              ):(
                ""
              )
            }
    </div>
  );
};

export default Collection;
