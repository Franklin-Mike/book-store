"use client";

import { Button } from "@/components/ui/button";

export function NewsLetter() {
  return (
    <section className='w-full p-24'>
      <div className='w-full max-w-screen-2xl mx-auto text-white flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center text-center space-y-4 max-w-[473px]'>
          <p className='text-2xl opacity-25'>Newsletter</p>
          <h3 className='text-4xl leading-relaxed'>
            Stay Updated with the Latest News!
          </h3>

          <div className='border border-white/25 min-w-96 flex rounded-full overflow-clip focus-within:border-white transition-colors ease-linear duration-200 w-full'>
            <input
              className='flex-1 bg-transparent indent-8 focus-visible:outline-none'
              type='text'
              placeholder='Enter your Email'
            />
            <Button className='h-auto px-8 py-3 text-xl rounded-full'>
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
