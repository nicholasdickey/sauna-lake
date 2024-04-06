'use client';
import React,{useState,useEffect,useRef, useCallback} from "react";
import Link from 'next/link';
import useIntersectionObserver from '@/lib/use-intersection-observer';
export interface NavSection {
    name:string;
    id:string;
    ref?:React.MutableRefObject<HTMLDivElement | null>;
}
export interface HelmetProps {
    sections:NavSection[]
}

const Helmet:React.FC<HelmetProps> = ({sections}) => {
    const [activeSection, setActiveSection] = React.useState<string | null>(null);
  /*  useEffect(() => {
        for(let i=0;i<sections.length;i++){
          sections[i].ref=useRef<HTMLDivElement | null>(null);
        }
      },[sections]);*/
    const scrollToHash=useCallback( function (element_id: string) {
            const element = document.getElementById(element_id)
            element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
          },[]);
    
    useEffect(() => {
        let observeSections = sections.map(section => document.getElementById(section.id));
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2,
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log("intersecting", entry.target.id)
                    sections.forEach(section => {
                        console.log("section.id", section.id, entry.target.id)
                        if (entry.target.id == section.id) {
                            console.log("MARCHED:", section.id)
                            setActiveSection(section.id)
                        }
                    })
                }
            })
        }, observerOptions)
        observeSections.forEach(section => {
            section && observer.observe(section)
        })
    }, []);
    return(
        <div className=" z-10 hidden md:flex flex-row justify-between lg:px-40 md:px-30 sm:px-10 px-2 dark:bg-slate-900 bg-slate-200">
        {sections.map((section) => {
            return <Link key={section.id} id={`nav-${section.id}`} href='' onClick={()=>scrollToHash(section.id)} className={`hover:text-blue-400 hover:cursor-pointer ${activeSection === section.id ? 'text-green-600' : ''}  ${activeSection === section.id ? 'dark:text-green-400' : ''}`}>{section.name}</Link>   

        }  
        )}
       </div>
    )
    
}
export default Helmet;