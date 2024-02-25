import Image from "next/image";
export default function Loading() {

  return (
    <div className="w-full flex flex-wrap justify-center overflow-hidden">
      {
        Array.from({ length: 8 }, (_, index) => index).map((_,index) => {
          return(
            <div key={index} className="bg-white shadow-2xl pl-4 pr-4 pt-0 rounded-lg  m-16  flex flex-col items-center justify-center">
              <div className='collection_card flex flex-col items-stretch p-2'>
                    <div className="collection_card flex flex-col h-2/4 w-full flex-between mr-2">
                      <div className="flex justify-center w-[100%] h-full bg-stone-200 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 opacity-50" >
                      </div>
                    </div>
                    
                    <div className='m-2 p-4 bg-white flex flex-col justify-start items-start w-full gap-3 h-2/4 relative'>
                        <span  className='w-[30%] h-3 bg-stone-200 rounded-3xl bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 relative overflow-hidden opacity-50'></span>
                        <span  className='w-[40%] h-3 bg-stone-200 rounded-3xl bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 relative overflow-hidden opacity-50'></span>
                   </div>
                  
              </div>
            </div>
          )
        })
        
      }
    </div>
  );
};

