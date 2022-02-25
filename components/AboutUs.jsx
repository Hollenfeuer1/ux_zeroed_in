import React from 'react';
import Image from 'next/image';
import Timeline from './Timeline';
import logo from '../public/ux_zeroed_in_stacked.png'
import story from '../public/the_umarex_story.png';

const AboutUs = () => {
    return (
        <div className="AboutUsContainer">
            <div className='center'>
                <div className="Umarex-USA">
                    <div className="zeroed-in">
                        <Image src={logo} />
                    </div>
                    <h1 className='aboutUsTitle'>UMAREX® USA</h1>
                    <p>Few brands are owned by family owned companies anymore, but that&apos;s
                        not the case here. We are family owned. Our owners believe in
                        family values and encourage us to provide you, our customer, with
                        recreational products you, your family, and friends can use to
                        enjoy and experience the wild outdoors. Check out our vast offering:
                        Axeon Optics, Umarex Airguns, Exude Lights, Elite Force Airsoft,
                        Rekt Dart Launchers, T4E Training.
                    </p>
                </div>
                <Timeline />
                <div className='umarex-story'>
                    <Image src={story} />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
