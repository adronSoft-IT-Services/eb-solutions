import React from 'react'
import { Container } from '../UI/Container'

const HeroSectionCard = ({ title, title1, description, buttonText, buttonLink, exploreText, exploreLink }) => (
    <div className="container">
        <div className="w-full h-full md:w-1/2 ml-3 md:ml-10 p-3 md:p-7 rounded-3xl shadow-lg shadow-secondary bg-white/50 backdrop-blur-md ">
            <h3 className="block text-xs md:text-base font-bold !text-secondary">
                {title}<br /><span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary">
                    {title1}</span>
            </h3>
            <p className="mt-3 text-xs md:text-lg text-gray-800 ">
                {description}
            </p>

            {/* Buttons */}
            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 md:text-sm font-semibold rounded-lg border border-transparent bg-primary text-white hover:bg-primary disabled:opacity-50 disabled:pointer-events-none "
                    href={buttonLink}>
                    {buttonText}
                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </a>
                <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-secondary shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    href={exploreLink}>
                    {exploreText}
                </a>
            </div>
            {/* End Buttons */}
        </div>
    </div>
);

const HeroSection = () => {
    return (
        <section>
            {/* "isAutoPlay": true */}
            <div data-hs-carousel='{"loadingClasses": "opacity-0", "isAutoPlay": true, "speed":3500, "isInfiniteLoop":true }' className="relative">
                <div className="hs-carousel relative overflow-hidden w-full min-h-[350px] md:min-h-[600px]">
                    <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                        <div className="hs-carousel-slide">
                            <div className="h-[350px] md:h-[600px] flex items-center bg-[url('/image/banner/background-4.jpg')] bg-cover bg-no-repeat gradient-to-r from-white to-white/50">
                                <HeroSectionCard
                                    title="Peer Voted No. 1 Point of Sale"
                                    title1="Enhanced Business Solutions"
                                    description="We are reputable IT company that combines technical expertise, innovation, and customer-centricity to "
                                    buttonText="Get started"
                                    buttonLink="/contact-us"
                                    exploreText="Explore More"
                                    exploreLink="/about-us"

                                />


                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="h-[350px] md:h-[600px] flex items-center bg-[url('/image/banner/background-2.jpg')] bg-cover bg-no-repeat  gradient-to-r from-white to-white/50">
                                <HeroSectionCard
                                    title=" Integrated, innovative cloud based business solutions"
                                    title1="Ready To Scale Your Retail?"
                                    description="We are reputable IT company that combines technical expertise, innovation, and customer-centricity to "
                                    buttonText="Get started"
                                    buttonLink="/contact-us"
                                    exploreText="Explore More"
                                    exploreLink="/about-us"

                                />

                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="h-[350px] md:h-[600px] flex items-center bg-[url('/image/banner/background-3.jpg')] bg-cover bg-no-repeat  gradient-to-r from-white to-white/50">
                                <HeroSectionCard
                                    title="Get your professional journey start with "
                                    title1="Enhanced Business Development"
                                    description="We are reputable IT company that combines technical expertise, innovation, and customer-centricity to flex"
                                    buttonText="Get started"
                                    buttonLink="/contact-us"
                                    exploreText="Explore More"
                                    exploreLink="/about-us"

                                />

                            </div>
                        </div>
                    </div>
                </div>

                <button type="button" className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center mt-32 md:mt-64 size-10 text-primary rounded-full hover:bg-secondary hover:text-white ">
                    <span className="text-2xl" aria-hidden="true">
                        <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6"></path>
                        </svg>
                    </span>
                    <span className="sr-only">Previous</span>
                </button>
                <button type="button" className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center mt-32 md:mt-64 size-10 text-primary rounded-full hover:bg-secondary hover:text-white ">
                    <span className="sr-only">Next</span>
                    <span className="text-2xl" aria-hidden="true">
                        <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </span>
                </button>

                <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
                    <span className="hs-carousel-active:bg-primary hs-carousel-active:border-primary size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                    <span className="hs-carousel-active:bg-primary hs-carousel-active:border-primary size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                    <span className="hs-carousel-active:bg-primary hs-carousel-active:border-primary size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                </div>
            </div>

            {/* <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6"></div> */}


        </section>
    )
}

export default HeroSection;

