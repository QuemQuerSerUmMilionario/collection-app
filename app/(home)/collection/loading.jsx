import Image from "next/image";
export default function Loading() {

  return (
    <div className="w-full flex flex-wrap justify-center overflow-hidden">
      {
        Array.from({ length: 8 }, (_, index) => index).map((_,index) => {
          return(
            <div key={index} className="m-12 flex flex-col items-start">
              <div className='flex justify-center   w-full'>
                  <span  className='w-[50%] h-3 mr-8 bg-stone-200 rounded-3xl bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 relative overflow-hidden opacity-50'></span>
              </div>
              <div className='collection_card flex flex-between p-2'>
                    <div className="flex justify-center w-[90%] h-full bg-stone-200 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 opacity-50" >
                     
                    </div>
                    <div className="collection_card_menu w-[10%] h-full p-2 gap-3">
                      <div className=' bg-stone-200 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full w-5 h-5 mt-4 opacity-50'></div>
                      <div className=' bg-stone-200 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full w-5 h-5 mt-4 opacity-50'></div>
                      <div className=' bg-stone-200 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full w-5 h-5 mt-4 opacity-50'></div>
                      <div className=' bg-stone-200 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full w-5 h-5 mt-4 opacity-50'></div>
                    </div>
              </div>
            </div>
          )
        })
        
      }
    </div>
  );
};

