import React from 'react'
import { NavLink } from 'react-router-dom';
import '../all.min.css';
import { socialIcons } from '../db/Data';
import { useGlobalFunction } from '../context/App';

export const SocialIcons = () => {
    let { themes } = useGlobalFunction();
    return (
        <div className='socialIcons w-fit fixed bottom-0 flex items-center flex-col'>
            <div className='flex items-center flex-col gap-1'>
                {socialIcons.map((icon, index) => {
                    let { id, icons } = icon;
                    return(
                        <NavLink to='/' key={index} 
                        className="text-2xl nav-links" style={{color: `${themes.text}`}}>
                            {icons}
                        </NavLink>
                    )
                })}
            </div>
            <div className='line-icons lg:h-32 md:h-24 h-20' style={{backgroundColor: `${themes.text}`}}></div>
        </div>
    )
}