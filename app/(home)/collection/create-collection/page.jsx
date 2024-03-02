"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "@components/collection/CollectionForm";
import { useSession, getSession } from "next-auth/react"
import ErrorCard from "@components/ErrorCard"
export default function CreateCollection() {
  const { data: session, status } = useSession();
  const [error, setError] = useState(null);
  const [submitting, setIsSubmitting] = useState(false);
  const [collection, setCollection] = useState({ description: "", name: "" });
  
  const createCollection = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/collection", {
        method: "POST",
        body: JSON.stringify(collection),
      });
      const result = await response.json();
      if (response.ok) {
        router.push("/collection?callBack=create-collection");
      }else if(result.errors){
        setError(result.errors);
      }
    } catch (error) {
       console.log(error.message);
    }finally{
      setIsSubmitting(true);
    }
    
  };
  return (
    <div>
      <Form
        type='Create'
        collection={collection}
        setCollection={setCollection}
        submitting={submitting}
        handleSubmit={createCollection} />
        {error && <ErrorCard errors={error}/>}
    </div>
  );
}
