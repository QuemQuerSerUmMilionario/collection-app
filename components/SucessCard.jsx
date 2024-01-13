"use client";

export const SucessCard = ({
  message,
}) => {
  if (!message) return null;

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};