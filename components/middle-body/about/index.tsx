import React from 'react';
import {NavSection} from '@/components/header/nav';
interface AboutProps {
    section: NavSection;
}
const About:React.FC<AboutProps> = ({section}) => {
    return (
        <div id={section.id} ref={section.ref} className="scroll-my-36 z-0  px-6 mt-20 mx-20">
            <h2 className="max-w-xl lg:text-[4.2em] text-3xl font-bold leading-none inline-block">
                Up-North Floating Sauna Experience
            </h2>

            <p className="mt-6 max-w-6xl text-xl font-semibold">
                Experience the quintessential nordic &ldquo;up-north&rdquo; activity: a wood-burning sauna on a float in the Little Sand Lake, Remer MN, home of Bigfoot and the national capital of Bald Eagle. Starting with $100 for a three-hour session and up to six persons.
            </p>
            <p className="mt-6 max-w-6xl text-xl font-semibold">
                Experience the quintessential nordic &ldquo;up-north&rdquo; activity: a wood-burning sauna on a float in the Little Sand Lake, Remer MN, home of Bigfoot and the national capital of Bald Eagle. Starting with $100 for a three-hour session and up to six persons.
            </p>
            <p className="mt-6 max-w-6xl text-xl font-semibold">
                Experience the quintessential nordic &ldquo;up-north&rdquo; activity: a wood-burning sauna on a float in the Little Sand Lake, Remer MN, home of Bigfoot and the national capital of Bald Eagle. Starting with $100 for a three-hour session and up to six persons.
            </p>
            <p className="mt-6 max-w-6xl text-xl font-semibold">
                Experience the quintessential nordic &ldquo;up-north&rdquo; activity: a wood-burning sauna on a float in the Little Sand Lake, Remer MN, home of Bigfoot and the national capital of Bald Eagle. Starting with $100 for a three-hour session and up to six persons.
            </p>
        </div>
    );
}
export default About;