import React from 'react';
import HeroImage from './hero-image';
import HeroText from './hero-text';
import {NavSection} from '@/components/header/nav';
interface HeroProps {
    section: NavSection;
}
const Hero: React.FC<HeroProps> = ({section}) => {
    return (
        <div>
        <div id={section.id} ref={section.ref} className=" scroll-my-32 hidden z-0 md:px-8 lg:px-20  mx-auto md:flex md:flex-row items-center pt-0 lg:pt-2 bg-inherit">
               <HeroText />
                <HeroImage />
            </div>
            <div className=" scroll-my-32 md:hidden z-0 px-2  mx-auto inline-block items-center pt-0  bg-inherit">
                <HeroImage />
                <HeroText />
            </div>
            <div className="my-10 px-8 md:px-40 text-inherit flex w-full flex-col ">
                  <h2 className="mb-5 text-xl font-bold lg:text 2xl">
                    Bring your boat, kayak, or paddleboard and enjoy a real Suomi barrel sauna, pour water on the stones to create steam and take a dip in the lake for a cool down. The Sauna is moored only a couple of hundred of yards from the public landing on the Little Sand Lake in Remer, MN.
                  </h2>
                </div>

        </div>
        
    );

}
export default Hero;