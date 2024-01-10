"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "@components/auth/RegisterForm";
import ErrorCard from "@components/ErrorCard";
const Register = () => {
  const [submitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState([]);
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
        setErrors(errorData.errors)
        return;
      }
      const responseData = await response.json();
      return;
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <Form
        type='Register'
        user={user}
        setUser={setUser}
        submitting={submitting}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </>
       
  );
};

export default Register;
