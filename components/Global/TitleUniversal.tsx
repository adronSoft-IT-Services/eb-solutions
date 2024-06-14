import React from 'react'


const TitleUniversal = ({ children, subTitle = "", className = "" }: any) => {
    return (
        <div className={className}>
            {/* text-2xl font-semibold md:text-3xl md:leading-tight text-gray-800 */}
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">{children}</h3>
            {subTitle && <p className="text-secondary max-w-xl mx-auto">{subTitle}</p>}
            {/* mt-2 md:mt-4 text-sm sm:text-lg font-semibold text-gray-500 */}
        </div>
    )
}

export default TitleUniversal