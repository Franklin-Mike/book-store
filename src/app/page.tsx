import { NewsLetter } from "@/components/global/newsletter";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className='w-full max-w-screen-2xl mx-auto space-y-6'>
        <section className='relative w-full flex flex-col justify-center lg:items-center h-dvh px-12'>
          <h2 className='font-allison text-[calc(1rem+45vw)] 2xl:text-[calc(1rem+42.5vw)] text-white text-left w-full leading-none select-none'>
            Featured
          </h2>

          <div className='z-[2] absolute top-0 left-0 right-0 bottom-0 w-full h-full'>
            content hwere
          </div>
        </section>

        <section className='w-full px-12'>
          <div className='flex items-center justify-between border-y border-white/25 p-5'>
            <p className='text-3xl'>Featured Categories</p>
            <div role='button' className='flex space-x-4 items-center text-lg'>
              <span>See All</span>
              <div className='size-10 bg-white text-black rounded-full grid place-content-center'>
                <Icon.ChevronRight />
              </div>
            </div>
          </div>

          <div className='grid grid-cols-4 px-6 py-12 gap-14'>
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "p-6 space-y-4 rounded-lg",
                  "text-[#BF00EA] bg-[#895C8245]" // display text color based on category
                )}
              >
                <Icon.ImagesLight className='size-16' />

                <p className='text-3xl'>Arts and Photography</p>
              </div>
            ))}
          </div>
        </section>

        {/* add more sections, move sections to seprate components and fetch from an api */}
        <section className='w-full px-12'>
          <div className='flex items-center justify-between border-y border-white/25 p-5'>
            <p className='text-3xl'>Bestselling Books</p>
            <div role='button' className='flex space-x-4 items-center text-lg'>
              <span>See All</span>
              <div className='size-10 bg-white text-black rounded-full grid place-content-center'>
                <Icon.ChevronRight />
              </div>
            </div>
          </div>

          <div className='grid grid-cols-6 px-6 py-12 gap-14'>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className='space-y-3'>
                <Image
                  src='/Frame.png'
                  alt=''
                  width={200}
                  height={400}
                  className='w-full'
                />

                <div
                  className={cn(
                    "space-y-2",
                    "text-[#BF00EA]" // display text color based on category
                  )}
                >
                  <p className='text-sm'>ROMANCE</p>
                  <p className='font-semibold'>Really really good, actually</p>
                </div>
                <div className='space-y-2'>
                  <p className='opacity-60'>John Doe</p>
                  <p className='font-medium'>$30.50</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <NewsLetter />
    </>
  );
}
