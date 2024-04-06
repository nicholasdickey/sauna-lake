
import React from 'react';
import Hero from './hero';
import Gallery from './gallery';
import About from './about';
import Availability from './availability';
import Faq from './faq';
import {NavSection} from '@/components/header/nav';
interface BodyProps {
    sections: NavSection[];
}
const Body: React.FC<BodyProps> = ({sections}) => {
    return (<div className="z-0 absolute pt-0 md:pt-64 w-full dark:bg-slate-500 bg-inherit text-inherit">
        <Hero section={sections[0]} />
        <Gallery />
        <About section={sections[1]}/>
        <Availability section={sections[2]}/>
        <Faq section={sections[3]}/>
    </div>)
}
export default Body;