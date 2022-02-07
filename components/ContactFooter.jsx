import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ContactFooter = () => {
    return (
        <footer className='text-center lg:text-left bg-[#ed1c24] text-white'>
            <div className='flex justify-center items-center lg:justify-evenly p-6'>
                <div className="">
                    <h4 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                        Contact Info
                    </h4>
                    <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-6 mr-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <p className="flex flex-col md:justify-start mb-4">
                            <span>7700 Chad Colley Blvd.</span>
                            <span>Fort Smith, AR 72916</span>
                        </p>
                    </div>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <p className="flex flex-col md:justify-start mb-4">
                            <span>Phone: (479)646-4210</span>
                            <span>Extension: 7</span>
                        </p>
                    </div>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 mr-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <p className="flex flex-col md:justify-start mb-4">
                            <span>Email: service@umarexusa.com</span>
                            <Link href='https://www.umarexusa.com/' passHref>umarexusa.com</Link>
                        </p>
                    </div>
                </div>
                <div className='hidden lg:block'>
                    <Image src='/ux_building.jpg' width={350} height={171} alt='Umarex USA Facility' />
                </div>
            </div>
        </footer>
    )
};

export default ContactFooter;