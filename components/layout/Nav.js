'use client'
import React from 'react'
import PrimaryBtnLink from '@/components/buttons/PrimaryBtnLink'
import Logo from '@/public/imgs/mainstreet-digital.svg'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const Nav = () => {

    const pathname = usePathname()

    return (
        <nav className="fixed top-0 z-20 w-full border-b border-gray-200 shadow-lg bg-white/70 dark:bg-gray-900 start-0 dark:border-gray-600 font-lexend backdrop-blur-3xl">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
                <a href="https://mainstreetdigital.netlify.app/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src={Logo} alt="MainStreet Digital Logo" priority height={44} />
                </a>
                <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                    <div className="hidden md:flex">
                        <PrimaryBtnLink text="Get Started" href="/" size={"sm"} />
                    </div>

                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="/" className={`link ${pathname === '/' ? 'block px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-[#232BB1] md:p-0 md:dark:text-blue-500 font-semibold ' : ' font-semibold block px-3 py-2 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#232BB1] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}`}>Home</a>
                        </li>
                        <li>
                            <a href="about" className={`link ${pathname === '/about' ? 'block px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-[#232BB1] md:p-0 md:dark:text-blue-500 font-semibold ' : ' font-semibold block px-3 py-2 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#232BB1] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}`}>About</a>
                        </li>
                        <li>
                            <a href="services" className={`link ${pathname === '/services' ? 'block px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-[#232BB1] md:p-0 md:dark:text-blue-500 font-semibold ' : ' font-semibold block px-3 py-2 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#232BB1] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}`}>Services</a>
                        </li>
                        <li>
                            <a href="pricing" className={`link ${pathname === '/pricing' ? 'block px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-[#232BB1] md:p-0 md:dark:text-blue-500 font-semibold ' : ' font-semibold block px-3 py-2 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#232BB1] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}`}>Pricing</a>
                        </li>
                        <li>
                            <a href="contact" className={`link ${pathname === '/contact' ? 'block px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-[#232BB1] md:p-0 md:dark:text-blue-500 font-semibold ' : ' font-semibold block px-3 py-2 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#232BB1] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}`}>Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default Nav;