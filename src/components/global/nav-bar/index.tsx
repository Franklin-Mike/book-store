import React from "react";
import Link from "next/link";
import { Icon } from "../../icons";
import { CartCount } from "./cart-count";

export const Navbar = () => {
  return (
    <nav className='z-50 fixed top-0 left-0 right-0 bg-background border-b-[.5px] border-white/40'>
      <div className='py-6 px-12 flex items-center justify-between w-full max-w-screen-2xl mx-auto'>
        <Link href='/' className='[&_svg]:size-8 fill-[#B700E0]'>
          <Icon.Book />
        </Link>
        <div className='flex items-center justify-between space-x-8'>
          <Link href='#'>
            <Icon.Search className='opacity-60 hover:opacity-85 transition-opacity ease-linear duration-200' />
          </Link>
          <CartCount />
          <div className='flex items-center gap-2.5'>
            <span>Menu</span>
            <Icon.Menu />
          </div>
        </div>
      </div>
    </nav>
  );
};
