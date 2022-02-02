import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
    return (
        <div>
            <div className='flex flex-row justify-center items-center my-4'>
                <div className=''><Image src='/ux_zeroed_in_stacked.png' height={148} width={219} alt='Umarex Zeroed In' /></div>
                <div className='mx-8 w-2/5'>
                    <h2 className='uppercase text-2xl font-semibold'>Umarex® USA</h2>
                    <hr className='border-2px border-[#ed1c24]' />
                    <p> Few brands are owned by family owned companies anymore, but that's not the case here. We are family owned. Our owners believe in family values and encourage us to provide you, our customer, with the recreational products you, your family and friends can use to enjoy and experience the wild outdoors. Check out our vast offering: Axeon Optics, Umarex Airguns, Elite Force Airsoft, Rekt Dart Launchers, & T4E Training.</p>
                </div>
            </div>
            <div className='grid grid-cols-12'>
                <div className='inline-grid grid-cols-2 col-start-3 gap-4'>
                    <Image src='/the_umarex_story.png' height={966} width={59} alt='The Umarex Story' />
                </div>
                <div className="inline-grid grid-cols-1 col-span-3 gap-2">
                <div id='1972'>
                        <h3 className='font-bold text-3xl text-[#939598]'>1972</h3>
                        <p>Wulf-Heinz Pflaumer & Franz Wonisch are working on a venture that would come to be called Umarex.</p>
                    </div>
                    <div id='1993'>
                        <h3 className='font-bold text-3xl text-[#939598]'>1993</h3>
                        <p>Umarex acquires world renowned arms manufacturer, Carl Walther</p>
                    </div>
                    <div id='2006'>
                        <h3 className='font-bold text-3xl text-[#939598]'>2006</h3>
                        <p>RUAG Ammotec USA, a US distributer of RWS air rifles, is purchased by PW Intl GmbH, moved to Fort Smith, Arkansas and renamed to Umarex USA.</p>
                    </div>
                    <div id='2008'>
                        <h3 className='font-bold text-3xl text-[#939598]'>2008</h3>
                        <p>Umarex USA expands air rifle line with the introduction of Ruger®, Walther® and Hammerli®</p>
                    </div>
                </div>
                <div className="inline-grid grid-cols-1 col-span-3 gap-2">
                <div id='2009'>
                        <h3 className='font-bold text-3xl text-[#939598]'>2009</h3>
                        <p>Umarex USA continues to grow doubling sales over 2008 and breaks new ground on a new facility</p>
                    </div>
                <div id='2010'>
                        <h3 className='font-bold text-3xl text-[#939598]'>2010</h3>
                        <p>Umarex USA moves into a new manufacturing and warehouse facility at Chaffee Crossing in Fort Smith, Arkansas.</p>
                    </div>
                    <div id='2013'>
                        <h3 className='font-bold text-3xl text-[#939598]'>2013</h3>
                        <p>Umarex USA welcomes Walther Arms to their campus in Fort Smith, Arkansas, and breaks ground on a 7 million dollar warehouse expansion.</p>
                    </div>
                    <div id='2014'>
                        <h3 className='font-bold text-3xl text-[#939598]'>2014</h3>
                        <p>Umarex USA introduces the UX mark. The UX is incorporated into airguns and marketing materials creating a powerfull mark that is eye-catching and memorable.</p>
                    </div>
                    <div id='today'>
                        <h3 className='uppercase font-bold text-3xl text-[#ed1c24]'>Today</h3>
                        <p>While Umarex remains the "King of Replicas" in airguns, its patented technology like the safety system and dual round magazine of the Umarex Hammer coupled with moder-day air filling solutions and unique optic intellectual properties insures Umarex continues to be zeroed in.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
