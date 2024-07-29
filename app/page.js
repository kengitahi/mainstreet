import PrimaryBtnLink from '@/components/buttons/PrimaryBtnLink';
import TransparentBtnLink from '@/components/buttons/TransparentBtnLink';

import heroImg1 from '@/public/imgs/hero-img-1.jpg';
import heroImg3 from '@/public/imgs/hero-img-3.jpg';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto mt-16">
      <div className="my-20 hero">
        <div>
          <div className="flex items-center px-4 py-3 mb-8 bg-blue-100 rounded-full shadow-md max-w-fit">
            <span className='w-2 h-2 mr-2 text-5xl text-transparent bg-blue-600 rounded-full'>.</span>
            <h1 className='text-base text-blue-600 font-lexend'>MainStreet Digital - Your Local Business, Our Digital Expertise</h1>
          </div>

          <h2 className='mb-8 text-5xl font-bold capitalize font-lexend'>Digital Solutions for your Business.</h2>

          <p className='mb-8 text-gray-600 text-md font-inter'>MainStreet Digital crafts custom, high-impact web solutions that capture your brand&apos;s essence and help local businesses thrive online. We combine cutting-edge technology and big-agency expertise to boost your online presence, connect you with more customers, and empower your businesses to succeed online.</p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <PrimaryBtnLink text="Start Your Digital Journey" href="#">
              <svg className="w-6 h-6 text-currentColor dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </PrimaryBtnLink>
            <TransparentBtnLink href='/' text="Learn More">
              <svg className="w-6 h-6 text-currentColor dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clipRule="evenodd" />
              </svg>
            </TransparentBtnLink>
          </div>
        </div>

        <div className="relative">
          <Image src={heroImg3} alt="web development office" style={{ position: 'absolute', marginTop: '0%', maxWidth: '90%', height: 'auto', right: 0 }} className='rounded-lg' priority />
          <div>
            <div className='w-1/2 h-full'></div>
            <Image src={heroImg1} alt="web developer sitting at a desk" style={{ position: 'relative', marginTop: '10%' }} className='rounded-lg' priority />
          </div>

        </div>

      </div>
    </main>
  );
}
