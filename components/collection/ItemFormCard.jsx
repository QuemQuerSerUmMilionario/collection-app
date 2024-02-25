"use client";
import Image from "next/image"
const ItemFormCard = ({ itemForm, itemCard, setItem , setSelected }) => {
  return (
    <label
      className={`bg-white shadow-2xl pl-4 pr-4 pt-0 rounded-lg  m-8 cursor-pointer flex flex-col items-center justify-center  item_card  ${itemForm.itemId === itemCard.id ? '' : 'opacity-50'}`}
      id="item_card"
    >
      
      <div className=" flex flex-col justify-center items-center">
        <div className='collection_card flex flex-col h-2/4 flex-between mr-2'>
          <div className="flex  justify-center object-cover">
            {itemCard.image && <Image
              src={itemCard.image}
              alt='logo'
              width={300}
              height={300}
              className='object-contain'
            />}
          </div>
        </div>
          <input
            type="radio"
            name="item"
            className="opacity-0"
            onChange={() => {
              setItem({ ...itemForm, itemId: itemCard.id });
              setSelected({...itemCard})
            }}
        />
        <div className="m-2 p-4 bg-white flex flex-col justify-start items-start w-full h-2/4 relative  ">
          <div>
            <label htmlFor="" className="font-bold">Model:</label>
            <p>
              {itemCard.model}
            </p>
          </div>
          <div>
            <label htmlFor="" className="font-bold">Year:</label>
            <p>
              {itemCard.year}
            </p>
          </div>
        </div>
      </div>
    </label>
  );
};
export default ItemFormCard;
