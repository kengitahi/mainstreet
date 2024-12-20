import React from 'react'

const PrimaryBtnLink = ({ children, text, href, size, classes }) => {

    let btnClasses = 'flex items-center gap-2 text-base font-medium text-center text-white bg-[#232BB1] rounded-lg max-w-fit font-lexend hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ';

    btnClasses += classes;

    if (size == 'sm') {
        btnClasses += ' px-4 py-2 ';
    } else if (size == 'md') {
        btnClasses += ' px-6 py-3 ';
    } else {
        btnClasses += ' px-8 py-4 ';
    }

    return (
        <a href={href} className={btnClasses}>
            {text}{children}
        </a>
    )
}

export default PrimaryBtnLink