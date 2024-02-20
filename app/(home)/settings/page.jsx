"use client";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import Form from "@components/user/Profile";
import { useSession, getSession } from "next-auth/react"

const MyProfile = () => {
  const [submitting, setIsSubmitting] = useState(false);
  const [user, setUser] = useState({ cpf:"",name:"" ,phone:""});
  
  useEffect(() => {
    getUserInfo();
  }, []); 

  const getUserInfo = async () => {
    try {
      const response = await fetch("/api/user", {
        method: "GET",
      });
      const result = await response.json();
      console.log(result);
      if (response.ok) {
        setUser(result);
      }else{
        console.log(result.errors)
      }
    } catch (error) {
      console.log(error);
    } 
  };
  
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
