'use client';
import React, { useEffect, useState,useRef } from "react";
import Topline from './topline';
import Nav, { NavSection } from './nav';
import Band from './band';



let s = false;
interface HeaderProps {
    sections: NavSection[];
}
const Header: React.FC<HeaderProps> = ({sections}) => {
    const [scrolled, setScrolled] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        console.log("dark===>:", window.matchMedia('(prefers-color-scheme: dark)').matches)
    }, [])
    useEffect(() => {
        const listener = () => {
            setScrollY(window.scrollY);
            if (window.scrollY > 0) {
                if (!scrolled && !s) {
                    try {
                        s = true;
                        setScrolled(true);
                    } catch (x) {
                        console.log('recordEvent', x);
                    }
                }
                setScrolled(true);
            }
            else {
                setScrolled(false);
              
            }
        }
        function throttle(callbackFn: any, limit: number) {
            let wait = false;
            return function () {
                if (!wait) {
                    callbackFn.call();
                    wait = true;
                    setTimeout(function () {
                        wait = false;
                        callbackFn.call();
                    }, limit);
                }
            }
        }
        window.addEventListener("scroll", throttle(listener, 200));
        return () => window.removeEventListener("scroll", listener);
    }, [scrolled]);

 

    return (
        <div className="text-black dark:text-white dark:bg-slate-900 z-10 ">

            <div className="md:fixed top-0 w-full  my-0 z-10">
                <Topline scrolled={scrolled} />
                <Band scrolled={scrolled} />
                <Nav  sections={sections} />
            </div>
        </div>
    )

}
export default Header;