import React from 'react'
import Image from 'next/image'

import PrimaryBtnLink from '../buttons/PrimaryBtnLink';

import heroImg3 from '@/public/imgs/hero-img-3.jpg';

const ServicesCard = ({ title, children, href, category }) => {

    let linkText;

    if (href == 'contact') {
        linkText = 'Contact us';
    } else {
        linkText = 'Learn More';
    }

    return (
        <div class="bg-white rounded-lg shadow-md dark:bg-gray-800">
            <a href="#">
                <Image src={heroImg3} alt="web development office" style={{}} className='rounded-lg' priority />
            </a>
            <div class="p-5 flex justify-center flex-col">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-lexend">
                        {title}
                    </h5>
                </a>
                <div className="mb-4 font-normal leading-relaxed text-gray-600 dark:text-gray-600 font-inter">
                    <p className='flex items-center pt-1 pb-2'>
                        <span className='inline-block w-2 h-2 mr-2 text-5xl text-transparent bg-gray-600 rounded-full'>.</span><span className="inline-block font-bold capitalize text-md text-muted ">{category}</span>
                    </p>
                    {children}
                </div>
                <PrimaryBtnLink text={linkText} href={href} size="sm" classes="">
                    <svg className="w-6 h-6 text-currentColor dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                </PrimaryBtnLink>
            </div>
        </div>
    )
}

export default ServicesCard