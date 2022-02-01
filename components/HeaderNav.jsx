import React, { useContext } from 'react';
import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const HeaderNav = () => {
    return (
        <Popover className='relative bg-[#ed1c24]'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6'>
                <div className='flex justify-between items-center py-6 md:justify-start md:space-x-10'>
                    <div className='flex justify-start lg:w-0 lg:flex-1'>
                        <Link href='/'><Image src='/ux_home_logo.png' alt='Umarex USA Logo' width={300} height={27} className='md:float-right mt-2 align-middle ml-4 cursor-pointer' /></Link>
                    </div>
                <div className='-mr-2 -my-2 md:hidden'>
                    <Popover.Button className='rounded-md p-2 inline-flex items center justify-center text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                        <span className='sr-only'>Open Menu</span>
                        <MenuIcon className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                </div>
                <Popover.Group as='nav' className='hidden md:flex space-x-10 text-white uppercase font-semibold'>
                    <Popover className='relative'>
                        {({ open }) => (
                            <>
                                <Popover.Button
                                    className={classNames(
                                        open ? 'text-gray-900' : 'text-white',
                                        'group inline-flex items-center text-base font-semibold uppercase cursor-pointer hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                    )}
                                >
                                    <span>Licensed Brands</span>
                                    <ChevronDownIcon className={classNames(open ? 'text-gray-600' : 'text-white', 'ml-2 h-5 w-5 group-hover:text-gray-500'
                                    )}
                                        aria-hidden="true"
                                    />
                                </Popover.Button>
                                <Transition as={Fragment} enter='transition ease-out duration-200' enterFrom='opacity-0 translate-y-1' enterTo='opacity-100 translate-y-0' leave='transition ease-in duration-150' leaveFrom='opacity-100 translate-y-0' leaveTo='opacity-0 translate-y-1'>
                                    <Popover.Panel className='absolute z-40 -ml-5 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'>
                                        <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                                            <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 text-base font-medium text-white bg-[#635f5f]'>
                                                <Link href='/' className='-m-3 p-3 flex items-start rounded-lg hover:underline'>Amoeba</Link>
                                                <Link href='/' className='-m-3 p-3 flex items-start rounded-lg hover:underline'>Avalon</Link>
                                                <Link href='/' className='-m-3 p-3 flex items-start rounded-lg hover:underline'>Beretta</Link>
                                                <Link href='/' className='-m-3 p-3 flex items-start rounded-lg hover:underline'>Colt</Link>
                                                <Link href='/' className='-m-3 p-3 flex items-start rounded-lg hover:underline'>GLOCK</Link>
                                                <Link href='/' className='-m-3 p-3 flex items-start rounded-lg hover:underline'>Heckler & Koch</Link>
                                                <Link href='/' className='-m-3 p-3 flex items-start rounded-lg hover:underline'>Ruger</Link>
                                                <Link href='/' className='-m-3 p-3 flex items-start rounded-lg hover:underline'>RWS</Link>
                                                <Link href='/' className='-m-3 p-3 flex items-start rounded-lg hover:underline'>Smith & Wesson</Link>
                                                <Link href='/' className='-m-3 p-3 flex items-start rounded-lg hover:underline'>VFC</Link>
                                                <Link href='/' className='-m-3 p-3 flex items-start rounded-lg hover:underline'>Walther</Link>
                                            </div>
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </>
                        )}
                    </Popover>
                    <Link href='/media' className='hover:text-gray-900'>Media</Link>
                    <Link href='/' className='hover:text-gray-900'>About Us</Link>
                    <Link href='/' className='hover:text-gray-900'>Contact</Link>
                </Popover.Group>
                </div>
            </div>
            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right z-40 md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <Link href='/'><Image src='/ux_home_logo.png' alt='Umarex USA Logo' width={300} height={27} className='md:float-right mt-2 align-middle ml-4 cursor-pointer' /></Link>
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    <Link href='/' className='-m-3 p-3 flex items-start rounded-lg hover:underline'>Amoeba</Link>
                                    <Link href='/' className='-m-3 p-3 flex items-start rounded-lg hover:underline'>Avalon</Link>
                                    <Link href='/' className='-m-3 p-3 flex items-start rounded-lg hover:underline'>Beretta</Link>
                                    <Link href='/' className='-m-3 p-3 flex items-start rounded-lg hover:underline'>Colt</Link>
                                    <Link href='/' className='-m-3 p-3 flex items-start rounded-lg hover:underline'>GLOCK</Link>
                                    <Link href='/' className='-m-3 p-3 flex items-start rounded-lg hover:underline'>Heckler & Koch</Link>
                                    <Link href='/' className='-m-3 p-3 flex items-start rounded-lg hover:underline'>Ruger</Link>
                                    <Link href='/' className='-m-3 p-3 flex items-start rounded-lg hover:underline'>RWS</Link>
                                    <Link href='/' className='-m-3 p-3 flex items-start rounded-lg hover:underline'>Smith & Wesson</Link>
                                    <Link href='/' className='-m-3 p-3 flex items-start rounded-lg hover:underline'>VFC</Link>
                                    <Link href='/' className='-m-3 p-3 flex items-start rounded-lg hover:underline'>Walther</Link>
                                </nav>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                <Link href="/media" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Media
                                </Link>
                                <Link href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    About Us
                                </Link>
                                <Link href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
};

export default HeaderNav;
