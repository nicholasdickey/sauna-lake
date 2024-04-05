'use client';
import React,{useEffect} from "react";
import Topline from './topline';
import Nav from './nav';
import Band from './band';
import Flags from './flags';

const Header: React.FC = () => {
    useEffect(() => {
        console.log("dark===>:", window.matchMedia('(prefers-color-scheme: dark)').matches)
        },[])
    return (
        <div className="text-black dark:text-white dark:bg-slate-900">
            <Topline />
                <div className="md:fixed top-5 w-full h-10 my-0">

                <Band />
                <Nav />
            </div>
        </div>
    )

}
export default Header;