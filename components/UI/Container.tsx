import React from 'react'

export const Container = ({ children, className = '' }: { children?: any, className?: string }) => {
    return (
        <div className={`${className} max-w-[85rem] mx-auto px-4 py-4 md:py-8 sm:px-6 lg:px-8 lg:py-12 `}>{children}</div>
    )
}