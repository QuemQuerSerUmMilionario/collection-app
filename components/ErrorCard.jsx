"use client";


const ErrorCard = ({ errors }) => {
  console.log(errors)
  return (
    <>
        <ul>
            {errors.length > 0 && (
                Object.values(errors).map((error) => (
                    <li>
                        {error.message}
                    </li>
                ))
            )}
        </ul>
    </>
  );
};

export default ErrorCard;
