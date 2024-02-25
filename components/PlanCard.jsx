"use client";
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const PlanCard = ({createCheckoutSession,priceId,price,name,description,recurseList,mark}) => {
  return (
    <div className={`shadow-md rounded-lg  cursor-pointer flex m-1 flex-col items-start justify-center ${mark?'pt-12 pb-12 pl-8 pr-8 bg-blue-600 text-white h-96':'p-8 bg-white  h-80'}`} >
          <h1>{price} <span className="text-sm ml-4 text-wrap mr-0">/month</span></h1>  
          <h2 className="font-bold text-2xl mt-0 mb-4">{name}</h2>  
          <p className="text-sm  mb-4">{description}</p>
          <ul className='pl-1 mb-4'>
                {recurseList && recurseList.map((valor,index)=>{
                    return (
                        <li key={index} className='text-wrap'>
                             <p><FontAwesomeIcon icon={faCircleCheck} className='mr-2'/> {valor}</p>
                        </li>
                    )
                })}
          </ul>
          <button onClick={() => createCheckoutSession(priceId)} className="p-4 mt-4 w-full h-auto bg-yellow-500 rounded-md">
             subscribe
          </button>
    </div>
  );
};
export default PlanCard;
