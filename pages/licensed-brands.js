import React from 'react';
import Link from 'next/link';

const licensedBrands = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>
        <Link href='/' passHref>Amoeba</Link>
        <Link href='/' passHref>Avalon</Link>
        <Link href='/' passHref>Beretta</Link>
        <Link href='/' passHref>Colt</Link>
        <Link href='/' passHref>Glock</Link>
        <Link href='/' passHref>Heckler & Koch</Link>
        <Link href='/' passHref>Ruger</Link>
        <Link href='/' passHref>RWS</Link>
        <Link href='/' passHref>Smith & Wesson</Link>
        <Link href='/' passHref>VFC</Link>
        <Link href='/' passHref>Walther</Link>
    </div>);
};

export default licensedBrands;
