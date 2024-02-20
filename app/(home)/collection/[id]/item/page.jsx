"use client";

import { useState } from "react";
import Form from "@components/collection/ItemForm";
import { useParams } from 'next/navigation';

const CreateItem = () => {
  const params = useParams();
  const id = params.id;
  const [submitting, setIsSubmitting] = useState(false);
  var [item, setItem] = useState({ itemId: "",collectionId:1,name:"",description:"",files:[]});

  const createItem = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    var form = new FormData();
    console.log(item.files);
    if (item.files && item.files.length > 0) {
      for (let i = 0; i < item.files.length; i++) {
        form.append('files', item.files[i]);
      }
    }
    form.append('collectionId', id);
    form.append('itemId', item.itemId);
    form.append('name', item.name);
    form.append('description', item.description);
    try {
      const response = await fetch(`/api/collection/${id}/model`,
        {
          method: 'POST',
          body: form,
        }
      );
      const result = await response.json();
      console.log(result);
     
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
       <Form
        type='Create'
        item={item}
        setItem={setItem}
        submitting={submitting}
        handleSubmit={createItem}
      />
  );
};

export default CreateItem;
