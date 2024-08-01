import React from 'react'

const PrimaryBtn = ({ children, text, type }) => {
    return (
        <button type={type} className="flex gap-2 px-8 py-4 text-base font-medium text-center text-white bg-[#232BB1] rounded-lg max-w-fit font-lexend hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {text}{children}
        </button>
    )
}

export default PrimaryBtn