"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "@components/user/RegisterForm";

const Register = () => {
  const [submitting, setIsSubmitting] = useState(false);
  const [user, setUser] = useState({ email: "" , name : "", password: "" , confirmPassword: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/user/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData);
      }
    
      const responseData = await response.json();
    
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
       <Form
        type='Create'
        user={user}
        setUser={setUser}
        submitting={submitting}
        handleSubmit={handleSubmit}
      />
  );
};

export default Register;
