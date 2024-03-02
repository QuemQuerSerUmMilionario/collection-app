
import { faTriangleExclamation} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const ErrorCard = ({ errors , error}) => {
  return (
    <>
    
        <ul className="mt-4 mb-4 p-3 rounded-md w-[50%] h-fit bg-red-400  border-red-600 border text-black font-bold">
          
            {error  && 
                <li>
                    
                    <p><FontAwesomeIcon icon={faTriangleExclamation} className='m-auto'/> {error.message}</p>
                </li>
            }
            {errors  && 
                Object.values(errors).map((error,index) => (
                    <li key={index}>
                        <p><FontAwesomeIcon icon={faTriangleExclamation} className='m-auto'/> {error.message}</p>
                        {console.log(error)}
                    </li>
                ))
            }
        </ul>
    </>
  );
};

export default ErrorCard;