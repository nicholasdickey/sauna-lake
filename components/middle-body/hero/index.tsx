import React from 'react';
import HeroImage from './hero-image';
import HeroText from './hero-text';
const Hero: React.FC = () => {
    return (
        <div>
        <div className="hidden z-0 px-24  mx-auto md:flex md:flex-row items-center pt-0 lg:pt-2 bg-inherit">
               <HeroText />
                <HeroImage />
            </div>
            <div className=" md:hidden z-0 px-2  mx-auto inline-block items-center pt-0  bg-inherit">
                <HeroImage />
                <HeroText />
            </div>

        </div>
        
    );

}
export default Hero;