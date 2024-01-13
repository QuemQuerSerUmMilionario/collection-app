
export const ErrorCard = ({ errors }) => {
  console.log(errors)
  return (
    <>
        <ul>
            {errors  && (
                Object.values(errors).map((error,index) => (
                    <li key={index}>
                        {error.message}
                    </li>
                ))
            )}
        </ul>
    </>
  );
};

