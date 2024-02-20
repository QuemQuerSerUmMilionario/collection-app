"use client";

import Link from "next/link";
const Footer = () => {

  return (
    <footer className="flex justify-center w-full m-16 pt-3">
      {/* Desktop Navigation */}
      <div className="flex justify-between">
              <Link className='mr-2' href='/login'>
                link 1
              </Link>
              <Link className='mr-2' href='/register'>
                link 2
              </Link>
              <Link className='mr-2' href='/register'>
                link 3
              </Link>
      </div>
    </footer>
  );
};

export default Footer;
