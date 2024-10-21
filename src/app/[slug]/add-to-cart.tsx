"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dailog";
import Link from "next/link";

interface Props {}

export function AddToCart(props: Props) {
  function addToCart() {}

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline' size='lg' onClick={addToCart}>
          Add to cart
        </Button>
      </DialogTrigger>
      <DialogContent className='flex justify-between items-center'>
        <div></div>
        <div className='h-full bg-[#B700E038] w-2' />
        <div>
          <Button
            variant='outline'
            size='lg'
            className='w-full border-[#B700E0] text-[#B700E0]'
            asChild
          >
            <Link href='/cart'>Go to Cart</Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
