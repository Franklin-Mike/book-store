"use client";

import { Icon } from "@/components/icons";
import useCartStore from "@/store/cart";
import Link from "next/link";

export function CartCount() {
  const count = useCartStore((state) => state.count);
  return (
    <Link href='/cart' className='relative'>
      <Icon.Cart className='opacity-60 hover:opacity-85 transition-opacity ease-linear duration-200 size-8' />

      <div className='absolute -top-0.5 -right-0.5 bg-[#B700E0] aspect-square size-4 rounded-full mx-auto flex items-center justify-center'>
        <span className='text-[10px] font-bold'>{count}</span>
      </div>
    </Link>
  );
}
