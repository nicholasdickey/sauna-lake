'use client';
import React from "react";
import Link from "next/link";

const Topline: React.FC = () => {
    return (
            <div className="hidden md:flex h-5 text-white bg-blue-700 py-0 justify-center w-full">
                <Link href="/availability" className=" text-xs underline">Check Availability</Link>
            </div>
           )

}
export default Topline;