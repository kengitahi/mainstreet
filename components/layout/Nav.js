'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PrimaryBtnLink from '@/components/buttons/PrimaryBtnLink'
import Logo from '@/public/imgs/logos/mainstreet-digital.png'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Close menu when pathname changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Prevent body scroll and add blur when menu is open
    useEffect(() => {
        const body = document.body;
        const mainContent = document.getElementById('main-content');

        if (isOpen) {
            body.style.overflow = 'hidden';
            if (mainContent) {
                mainContent.style.filter = 'blur(4px)';
                mainContent.style.transition = 'filter 0.3s ease';
            }
        } else {
            body.style.overflow = 'unset';
            if (mainContent) {
                mainContent.style.filter = 'none';
            }
        }

        return () => {
            body.style.overflow = 'unset';
            if (mainContent) {
                mainContent.style.filter = 'none';
            }
        };
    }, [isOpen]);

    const menuVariants = {
        closed: {
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        },
        open: {
            x: "0%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };

    const linkVariants = {
        closed: { x: 50, opacity: 0 },
        open: i => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1
            }
        })
    };

    const navLinks = [
        { href: "/", text: "Home" },
        { href: "/services", text: "Services" },
        { href: "/about", text: "About" },
        { href: "/contact", text: "Contact" },
    ];

    return (
        <>
            <nav className="fixed top-0 z-30 w-full border-b border-gray-200 shadow-lg backdrop-blur-3xl bg-white/70 start-0 font-lexend">
                <div className="flex flex-wrap justify-between items-center p-4 mx-auto max-w-(--breakpoint-xl)">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image src={Logo} alt="MainStreet Digital Logo" priority height={44} />
                    </Link>
                    <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                        <div className="hidden md:flex">
                            <PrimaryBtnLink text="Get Started" href="/contact" size="sm" />
                        </div>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex justify-center items-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-hidden focus:ring-2 focus:ring-gray-200"
                            aria-controls="navbar-sticky"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Toggle menu</span>
                            <motion.div
                                animate={isOpen ? "open" : "closed"}
                                variants={{
                                    open: { rotate: 180 },
                                    closed: { rotate: 0 }
                                }}
                            >
                                {isOpen ? (
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                    </svg>
                                )}
                            </motion.div>
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
                        <ul className="flex flex-col p-4 mt-4 font-medium rounded-lg border border-gray-100 md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`block py-2 px-3 ${pathname === link.href
                                                ? 'text-[#232BB1] font-semibold'
                                                : 'text-gray-900 hover:text-[#232BB1]'
                                            } rounded md:p-0`}
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-20 backdrop-blur-xs bg-black/20 md:hidden"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                            className="fixed top-[73px] right-0 bottom-0 z-40 w-[300px] bg-white/95 backdrop-blur-lg shadow-xl md:hidden overflow-y-auto"
                        >
                            <div className="flex flex-col p-4">
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        key={link.href}
                                        custom={i}
                                        variants={linkVariants}
                                        href={link.href}
                                        className={`py-3 px-4 text-lg ${pathname === link.href
                                                ? 'text-[#232BB1] font-semibold bg-blue-50 rounded-lg'
                                                : 'text-gray-900 hover:bg-gray-50 rounded-lg'
                                            }`}
                                    >
                                        {link.text}
                                    </motion.a>
                                ))}
                                <motion.div
                                    custom={navLinks.length}
                                    variants={linkVariants}
                                    className="mt-4"
                                >
                                    <PrimaryBtnLink text="Get Started" href="/contact" size="sm" classes="w-full justify-center" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Nav;
