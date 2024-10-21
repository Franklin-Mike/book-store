import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AddToCart } from "./add-to-cart";

interface Props {
  params: { slug: string };
  searchParams: { [key: string]: string };
}

export default function Page(props: Props) {
  console.log(props);
  return (
    <main className='w-full max-w-screen-2xl mx-auto space-y-6 py-12 mt-20'>
      <section className='w-full px-12 space-y-6'>
        <Image
          src='/Frame.png'
          alt=''
          width={1280}
          height={720}
          className='w-full aspect-[16/7] object-cover rounded-2xl'
        />
        <div className='py-12 grid grid-cols-11 gap-10'>
          <div className='col-span-2 space-y-4 [&_div]:space-y-2.5 text-xl [&_p]:opacity-70'>
            <div className=''>
              <h4>Author</h4>
              <p>John Doe</p>
            </div>
            <div>
              <h4>Category</h4>
              <p>Romance</p>
            </div>
            <div>
              <h4>Date Released</h4>
              <p>20 September 2024</p>
            </div>
            <div>
              <h4>Ratings</h4>
              <span className='flex text-[#B700E0] space-x-2'>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon.StarIcon key={i} />
                ))}
              </span>
            </div>
          </div>
          <div className='col-span-7 space-y-4'>
            <h3 className='text-2xl font-semibold'>Really Good acually</h3>
            <p className='opacity-70'>
              Olivia, a pampered heiress, yearns to escape her privileged life
              and find true purpose. She impulsively decides to sell her
              mansion, move to a quaint seaside town, and open a cozy bookshop.
              In this idyllic setting, Olivia&apos;s tranquil existence is
              disrupted by a series of mysterious thefts. As the local
              detective, Ethan, investigates these crimes, their paths cross
              unexpectedly. Ethan, a passionate baker with a sharp wit, finds
              himself drawn to Olivia&apos;s genuine kindness and unwavering
              spirit. As their friendship deepens, they embark on a joint
              investigation, unraveling the mysteries of the town and
              discovering hidden secrets along the way. Their shared passion for
              books and their growing connection lead to a blossoming romance.
              Through their adventures, Olivia learns the true meaning of
              happiness and fulfillment, finding love, friendship, and a sense
              of belonging in her unexpected journey.
            </p>

            <p className='text-[#B700E0]'>$4.99</p>

            <AddToCart />
          </div>
        </div>
      </section>

      {/* Fetch related books and display */}
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
  );
}
