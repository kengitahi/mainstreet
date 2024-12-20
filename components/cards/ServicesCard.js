import React from 'react'
import Image from 'next/image'

import PrimaryBtnLink from '../buttons/PrimaryBtnLink';

const ServicesCard = ({ title, children, href, category, icon, horizontal, odd, id }) => {

    let linkText;
    let divClasses = "bg-white rounded-lg shadow-md dark:bg-gray-800";

    if (href == 'contact') {
        linkText = 'Get Quote';
    } else {
        linkText = 'Learn More';
    }

    if (horizontal) {
        divClasses = 'horizontal grid grid-cols-[1fr_2fr] w-full rounded-lg shadow-md dark:bg-gray-800 py-6';
    }

    if (odd) {
        divClasses = 'horizontal-odd grid grid-cols-[2fr_1fr] w-full rounded-lg shadow-md dark:bg-gray-800 py-6';
    }

    if (odd) {
        return (
            <div className={divClasses} id={id}>
                <div className="flex flex-col justify-center p-5">
                    <a href={href}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-lexend">
                            {title}
                        </h5>
                    </a>
                    <div className="mb-4 font-normal leading-relaxed text-gray-600 dark:text-gray-600 font-inter">
                        <p className='flex items-center pt-1 pb-2'>
                            <span className='inline-block mr-2 w-2 h-2 text-5xl text-transparent bg-gray-600 rounded-full'>.</span><span className="inline-block font-bold capitalize text-md text-muted">{category}</span>
                        </p>
                        {children}
                    </div>
                    <PrimaryBtnLink text={linkText} href={href} size="sm" classes="">
                        <svg className="w-6 h-6 text-currentColor dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                        </svg>
                    </PrimaryBtnLink>
                </div>
                <div className={`flex items-center justify-center ${horizontal ? 'w-full h-full' : 'p-6'}`}>
                    <Image
                        src={`/imgs/icons/${icon}`}
                        alt={title}
                        width={horizontal ? 100 : 196}
                        height={horizontal ? 100 : 196}
                        className="object-contain"
                        priority={false}
                        quality={85}
                    />
                </div>
            </div>
        )
    } else {
        return (
            <div className={divClasses} id={id}>
                <div className={`flex items-center justify-center ${horizontal ? 'w-full h-full' : 'p-6'}`}>
                    <Image
                        src={`/imgs/icons/${icon}`}
                        alt={title}
                        width={horizontal ? 100 : 196}
                        height={horizontal ? 100 : 196}
                        className="object-contain"
                        priority={false}
                        quality={85}
                    />
                </div>
                <div className="flex flex-col justify-center p-5">
                    <a href={href}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-lexend">
                            {title}
                        </h5>
                    </a>
                    <div className="mb-4 font-normal leading-relaxed text-gray-600 dark:text-gray-600 font-inter">
                        <p className='flex items-center pt-1 pb-2'>
                            <span className='inline-block mr-2 w-2 h-2 text-5xl text-transparent bg-gray-600 rounded-full'>.</span><span className="inline-block font-bold capitalize text-md text-muted">{category}</span>
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


}

export default ServicesCard