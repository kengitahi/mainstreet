'use client';

import React from 'react'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

import Logo from '@/public/imgs/logos/mainstreet-digital.png'

const Footer = () => {

    const pathname = usePathname();

    return (
        <footer className="p-4 mt-16 bg-white md:p-8 lg:p-10 dark:bg-gray-800 shadow-t-lg font-inter">
            <div className="max-w-(--breakpoint-xl) mx-auto text-center">
                <a href="#" className="flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white">
                    <Image src={Logo} alt="MainStreet Digital Logo" priority height={44} />
                </a>
                <p className="my-6 text-gray-500 dark:text-gray-400">Custom Web Development and Marketing Solutions for Growing Businesses.</p>
                <ul className="flex flex-wrap items-center justify-center gap-4 mb-6 text-gray-900 dark:text-white font-lexend">
                    <li>
                        <a href="/" className={`link ${pathname === '/' ? 'block px-3 py-2 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-[#232BB1] md:p-0 md:dark:text-blue-500 font-semibold ' : ' font-semibold block px-3 py-2 text-gray-500 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#232BB1] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}`}>Home</a>
                    </li>
                    <li>
                        <a href="about" className={`link ${pathname === '/about' ? 'block px-3 py-2 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-[#232BB1] md:p-0 md:dark:text-blue-500 font-semibold ' : ' font-semibold block px-3 py-2 text-gray-500 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#232BB1] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}`}>About</a>
                    </li>
                    <li>
                        <a href="services" className={`link ${pathname === '/services' ? 'block px-3 py-2 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-[#232BB1] md:p-0 md:dark:text-blue-500 font-semibold ' : ' font-semibold block px-3 py-2 text-gray-500 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#232BB1] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}`}>Services</a>
                    </li>
                    {/* <li>
                        <a href="pricing" className={`link ${pathname === '/pricing' ? 'block px-3 py-2 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-[#232BB1] md:p-0 md:dark:text-blue-500 font-semibold ' : ' font-semibold block px-3 py-2 text-gray-500 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#232BB1] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}`}>Pricing</a>
                    </li> */}
                    <li>
                        <a href="contact" className={`link ${pathname === '/contact' ? 'block px-3 py-2 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-[#232BB1] md:p-0 md:dark:text-blue-500 font-semibold ' : ' font-semibold block px-3 py-2 text-gray-500 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#232BB1] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}`}>Contact Us</a>
                    </li>
                </ul>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {currentYear} <a href="#" className="hover:underline">MainStreet Digital</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

const currentYear = new Date().getFullYear();

export default Footer;