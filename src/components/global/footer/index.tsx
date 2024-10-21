import { Icon } from "@/components/icons";
import Link from "next/link";

export function Footer() {
  return (
    <footer className='p-24 bg-gradient-to-b from-[#0E131A] to[#0E131A87]'>
      <div className='w-full max-w-screen-2xl mx-auto text-white grid grid-cols-9'>
        <div className='col-span-2 space-y-14'>
          <div>
            <h3 className='text-3xl'>Logo</h3>
          </div>
          <div className='flex space-x-6'>
            <Link href='#'>
              <Icon.X />
            </Link>
            <Link href='#'>
              <Icon.Instagram />
            </Link>
            <Link href='#'>
              <Icon.LinkedIn />
            </Link>
            <Link href='#'>
              <Icon.Facebook />
            </Link>
          </div>
          <div className='space-x-5 font-extralight'>
            <Link href='#'>Privacy policy</Link>
            <Link href='#'>Terms and Conditions</Link>
          </div>
        </div>

        <div className='col-start-5 col-span-5 flex justify-between [&_div]:flex [&_div]:flex-col [&_div]:space-y-6 text-lg'>
          <div>
            <Link href='/'>Home</Link>
            <Link href='#'>About</Link>
            <Link href='#'>Category</Link>
          </div>
          <div>
            <Link href='#'>Health</Link>
            <Link href='#'>Lifestyle</Link>
            <Link href='#'>Business</Link>
          </div>
          <div>
            <Link href='#'>Contact Us</Link>
            <Link href='#'>Subscribe</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
