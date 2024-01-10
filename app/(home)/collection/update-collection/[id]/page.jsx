"use client";

import { useState } from "react";
import { useParams,useRouter } from 'next/navigation';
import Form from "@components/collection/CollectionForm";
import { useSession, getSession } from "next-auth/react"

const UpdateCollection = () => {
  const params = useParams();;
  const id = params.id;
  const router = useRouter();
  const [submitting, setIsSubmitting] = useState(false);
  const [collection, setCollection] = useState({ description: "",name:""});

  const updateCollection = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/collection", {
        method: "POST",
        body: JSON.stringify(collection),
      });

      if (response.ok) {
        router.push("/collection");
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
        handleSubmit={createCollection}
      />
    </div>
  );
};

export default UpdateCollection;
