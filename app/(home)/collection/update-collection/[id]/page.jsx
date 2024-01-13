"use client";

import { useState, useEffect } from "react";
import { useParams,useRouter } from 'next/navigation';
import Form from "@components/collection/CollectionForm";
import { useSession, getSession } from "next-auth/react"

const UpdateCollection = () => {
  const params = useParams();;
  const id = params.id;
  const router = useRouter();
  const [submitting, setIsSubmitting] = useState(false);
  const [collection, setCollection] = useState({id:"",description: "",name:""});

  useEffect(() => {
    getCollection();
  }, []); 

  const updateCollection = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/collection/${id}`, {
        method: "PUT",
        body: JSON.stringify(collection),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData);
        return;
      }
     
    } finally {
      setIsSubmitting(false);
    }
  };
  const getCollection = async (e) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/collection/${id}`, {
        method: "GET",
      });

      if (response.ok) {
        const body = await response.json()
        setCollection(body);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div>
       <Form
        type='Update'
        collection={collection}
        setCollection={setCollection}
        submitting={submitting}
        handleSubmit={updateCollection}
      />
    </div>
  );
};

export default UpdateCollection;
