import React from "react";
import Topline from './topline';
import Nav from './nav';
import Band from './band';

const Header: React.FC = () => {
    return (
        <div className="h-fit dark:text-white dark:bg-slate-900">
            <Topline />
        <div className="fixed top-4 w-full h-10 my-0">
            
            <Band />
            <Nav />
        </div>
        </div>
    )

}
export default Header;