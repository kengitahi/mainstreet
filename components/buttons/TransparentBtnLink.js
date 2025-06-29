import React from 'react'

const TransparentBtnLink = ({ children, text, href }) => {
    return (
        <a href={href} className="flex gap-2 px-8 py-4 text-base font-medium text-center text-gray-700 rounded-lg max-w-fit hover:text-blue-600 bg-trabsparent font-lexend hover:bg-text-800 focus:ring-4 focus:outline-hidden focus:ring-blue-300">
            {children}{text}
        </a>
    )
}

export default TransparentBtnLink