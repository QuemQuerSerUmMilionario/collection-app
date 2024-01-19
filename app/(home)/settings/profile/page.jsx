"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "@components/user/Profile";
import { useSession, getSession } from "next-auth/react"

const MyProfile = () => {
  const { data: session, status } = useSession()

  const router = useRouter();
  const [submitting, setIsSubmitting] = useState(false);
  const [user, setUser] = useState({ cpf:"",name:"" ,phone:""});

  const updateUser = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/user", {
        method: "PUT",
        body: JSON.stringify(user),
      });

      if (response.ok) {
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <Form
      type='Update'
      user={user}
      setUser={setUser}
      submitting={submitting}
      handleSubmit={updateUser}
    />
  );
};

export default MyProfile;
