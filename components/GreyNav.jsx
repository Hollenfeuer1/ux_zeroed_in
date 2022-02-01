import React from 'react';
import Link from 'next/link';
import { Popover } from '@headlessui/react';

const GreyNav = () => {
    return (
        <Popover className='hidden lg:block relative bg-[#8c8c8c]'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6'>
                <div className='flex justify-between items-center py-6 md:justify-start md:space-x-10'>
                    <Popover.Group as='nav' className='hidden md:flex space-x-10 text-white uppercase font-semibold'>
                        <Link href='/'>All Brands</Link>
                        <Link href='/'>Umarex</Link>
                        <Link href='/'>Axeon Optics</Link>
                        <Link href='/'>Elite Force</Link>
                        <Link href='/'>REKT</Link>
                        <Link href='/'>P2P</Link>
                        <Link href='/'>T4E</Link>
                    </Popover.Group>
                </div>
            </div>
        </Popover>
    )
}

export default GreyNav;
