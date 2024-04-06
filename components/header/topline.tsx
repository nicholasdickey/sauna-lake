'use client';
import React from "react";
import Link from "next/link";
interface ToplineProps {
    scrolled?: boolean;
}
const Topline: React.FC<ToplineProps> = ({scrolled}) => {
    return (<div className="transition-display duration-1000 ease-in-out">
            <div className={`hidden ${scrolled?'':'md:flex'} transition-display ease-in-out duration-1000 z-100  h-5 text-white bg-blue-700 py-0 justify-center w-full`}
            >
                <Link href="/availability" className=" text-xs underline">Check Availability</Link>
            </div>
            </div>
           )

}
export default Topline;