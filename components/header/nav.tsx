import React from "react";

const Helmet:React.FC = () => {
    return(
        <div className=" hidden md:flex flex-row justify-between lg:px-40 md:px-30 sm:px-10 px-2 dark:bg-slate-900 bg-slate-200">

        <div className="hover:text-blue-400 hover:cursor-pointer" >Home</div><div className="hover:text-blue-400 hover:cursor-pointer">Nordic Sauna Experience</div><div className="hover:text-blue-400 hover:cursor-pointer">Availability</div><div className="hover:text-blue-400 hover:cursor-pointer">F.A.Q.</div>
      </div>
    )
    
}
export default Helmet;