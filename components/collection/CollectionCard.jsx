"use client";

import Link from "next/link";
import {faEye} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CollectionCard = ({ collection }) => {

  return (
    <div className='collection_card flex-between m-2'>
        {collection.description}
        <Link href={'/collection/' + collection.id} className='m-4'>
             <FontAwesomeIcon icon={faEye} />
        </Link>
    </div>
  );
};

export default CollectionCard;
