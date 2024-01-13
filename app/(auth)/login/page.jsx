"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "@components/auth/LoginForm";
import { signIn } from "next-auth/react";

const Login = () => {
  const router = useRouter();
  const [submitting, setIsSubmitting] = useState(false);
  const [user, setUser] = useState({ email: "" , password: "",redirect:false});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await signIn("credentials", user,);
      if (response.ok && !response.error) {
        router.push("/collection");
      }else if(response.error) {
        console.log(response.error);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
       <Form
        type='Login'
        user={user}
        setUser={setUser}
        submitting={submitting}
        handleSubmit={handleSubmit}
      />
  );
};

export default Login;
