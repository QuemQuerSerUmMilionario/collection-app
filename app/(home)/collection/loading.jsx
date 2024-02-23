import Image from "next/image";
export default function Loading() {

  return (
    <div className="w-full flex flex-wrap justify-center">
      {
        Array.from({ length: 6 }, (_, index) => index).map((_,index) => {
          return(
            <div key={index} className="m-12 flex flex-col items-start">
              <div className='flex  w-full'>
                  <span  className='w-[100%] h-3 bg-stone-200 rounded-3xl bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 relative overflow-hidden'></span>
              </div>
              <div className='collection_card flex flex-between'>
                    <div className="flex justify-center w-3/4">
                      <Image
                        src='/assets/images/blank_image.jpg'
                        alt='logo'
                        fill={true}
                        className='object-contain'
                      />
                    </div>
                    <div className="collection_card_menu w-1/4">
                      <span className=' bg-stone-200 rounded-full w-20 h-20'></span>

                    </div>
              </div>
            </div>
          )
        })
        
      }
    </div>
  );
};

