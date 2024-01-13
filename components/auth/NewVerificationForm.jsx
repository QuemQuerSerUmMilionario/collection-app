"use client";

import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { newVerification } from "@/actions/new-verification";
import { ErrorCard } from "@/components/ErrorCard";
import { SucessCard } from "@/components/SucessCard";

export const NewVerificationForm = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const searchParams = useSearchParams();

  const token = searchParams.get("token");
  console.log(token);
  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("Missing token!");
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong!");
      })
  }, [token, success, error]);

  useEffect(() => {
    console.log("submit");
    onSubmit();
  }, [onSubmit]);

  return (
  
      <div className="flex items-center w-full justify-center">
        <SucessCard />
        {!success && (
          <ErrorCard />
        )}
      </div>
  )
}