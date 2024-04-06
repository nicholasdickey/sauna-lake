'use client';
import React from "react";
const Gallery: React.FC = () => {
    return (
        <div className="z-0 px-8  lg:px-28 mx-auto md:flex md:flex-row items-center pt-0 lg:pt-2 bg-inherit">
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/sauna3.jpeg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/sauna4.jpeg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/sauna5.jpeg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/sauna6.jpeg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="/images/sauna7.jpeg" alt="" />
                </div>
            </div>
        </div>
    );
}
export default Gallery;