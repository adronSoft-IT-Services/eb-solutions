import { mainMenu } from '@/lib/siteManu'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
      {/* border-b border-secondary */}
      <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white  text-sm ">
        <nav className="relative max-w-[85rem] w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 lg:px-8 mx-auto" aria-label="Global">
          <div className="md:col-span-2">
            {/* Logo */}
            <a className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="../templates/creative-agency/index.html" aria-label="Preline">
              <Image
                className="w-28 h-auto p-2"
                src="/ebslogo.jpeg"
                alt="EBS"
                height={200}
                width={300} />
            </a>
            {/* End Logo */}
          </div>

          {/* Button Group */}
          <div className="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-1">
            {/* <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-primary text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
              Sign in
            </button> */}
            <button type="button" className="py-2 px-4 w-28 justify-center inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-primary text-white hover:bg-primary transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-primary">
              Hire us
            </button>

            <div className="md:hidden">
              <button type="button" className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>
            </div>
          </div>
          {/* End Button Group */}

          {/* Collapse */}
          <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-9 md:ml-3">
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">

              {mainMenu.map((menuItem, index) => {
                return (
                  menuItem.subMenu ? (
                    <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover]">
                      <button id={`hs-dropdown-custom-trigger-${index}`} type="button" className="hs-dropdown-toggle border-t-2 border-transparent hover:border-blue-500 flex items-center w-full text-secondary ">
                        {menuItem.title}
                        <svg className="ms-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                        </svg>
                      </button>

                      <div aria-labelledby={`hs-dropdown-custom-trigger-${index}`} className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white sm:shadow-md rounded-lg p-2  before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
                        {menuItem.subMenu.map((subMenuItem, subIndex) => {
                          return (
                            <Link key={subIndex} href={subMenuItem.url}
                              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-secondary hover:bg-gray-100 focus:ring-2
                                                         focus:ring-blue-500 hover:text-gray-400 border-b-2 border-transparent hover:border-blue-500">
                              {subMenuItem.title}
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  ) : (
                    <>
                      <Link className="uppercase font-semibold text-gray-700 border-t-2 border-transparent active:border-primary hover:border-primary"
                        href={menuItem.url}>{menuItem.title}
                      </Link>
                    </>
                  )
                )
              })}

            </div>
          </div>
          {/* End Collapse */}
        </nav>
      </header>

    </>
  )
}

export default Header