"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "@components/CollectionForm";


const CreateCollection = () => {
  const router = useRouter();
  const [submitting, setIsSubmitting] = useState(false);
  const [collection, setCollection] = useState({ description: ""});

  const createCollection = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/collection", {
        method: "POST",
        body: JSON.stringify({
          description: collection.description,
        }),
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
        type='Create'
        collection={collection}
        setCollection={setCollection}
        submitting={submitting}
        handleSubmit={createCollection}
      />
    </div>
  );
};

export default CreateCollection;
