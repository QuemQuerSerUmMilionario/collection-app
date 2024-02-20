
const ErrorCard = ({ errors , error}) => {
  return (
    <>
        <ul className="mt-4 p-3 rounded-md w-full h-fit bg-red-400 border-red-600 border ">
            {error  && 
                <li>
                    <p>{error.message}</p>
                </li>
            }
            {errors  && 
                Object.values(errors).map((error,index) => (
                    <li key={index}>
                        <p>{error.message}</p>
                        {console.log(error)}
                    </li>
                ))
            }
        </ul>
    </>
  );
};

export default ErrorCard;