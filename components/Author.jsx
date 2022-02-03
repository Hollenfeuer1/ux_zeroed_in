import React from 'react';
import Image from 'next/image';

const Author = ({ author }) => {
    return (
        <div className='text-center mt-20 mb-6 p-12 relative rounded-lg bg-black bg-opacity-20'>
            <div className='absolute left-0 right-0 -top-14'>
                <Image
                    src={author.photo.url}
                    unoptimized
                    alt={author.name}
                    height={120}
                    width={120}
                    className='align-middle rounded-full'
                />
            </div>
            <h3 className='mt-6 mb-2 text-xl font-bold'>{author.name}</h3>
                <p className='text-lg'>{author.bio}</p>
        </div>
    )
};

export default Author;