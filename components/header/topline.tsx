import React from "react";
import Link from "next/link";

const Topline:React.FC = () => {
    return(
        <div className="flex flex-row justify-between lg:px-40 md:px-30 sm:px-10 px-2 my-0 bg-slate-100 dark:bg-slate-900">

        <div className="flex justify-center w-full"><Link href="/availability" className="text-xs underline">Check Availability</Link></div>
      </div>
    )
    
}
export default Topline;