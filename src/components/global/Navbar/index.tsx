import React from 'react';
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className='bg-[#030a13] h-[60px] border-b-[1.5px] border-slate-400 px-10 flex items-center justify-between'>
            <Image src="/book.svg" width={24} alt='book icon' height={24} />
            <div className='flex items-center justify-between w-[200px]'>
                <Image src="/search.svg" width={24} alt='book icon' className='cursor-pointer' height={24} />
                <Image src="/cart.svg" width={24} alt='book icon' className='cursor-pointer' height={24} />
                <p className='text-white'>Menu</p>
                {/* <div className='flex items-center justify-between'> */}
                <Image src="/menu.svg" width={24} alt='book icon' className='cursor-pointer' height={24} />
                {/* </div> */}
            </div>

        </div>
    );
};

export default Navbar;