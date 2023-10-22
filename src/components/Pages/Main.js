import React, { useEffect, useState } from 'react'
import { NavBar } from '../Header/NavBar'
import { SocialIcons } from '../SocialIcons'
import '../../all.min.css';
import { useGlobalFunction } from '../../context/App';
import { Intro } from '../Intro';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const Main = () => {
    let { click, setClick, themes, opacity } = useGlobalFunction();
    let handleClick = () => setClick((e) => !e);
    return (
        <div className={opacity ? 'main relative w-ful h-screen opa' :
            'main relative w-ful h-screen'}>
            <div>
                <NavBar />
                <div className={click ? 'div absolute top-0 bottom-0 right-1/2 bg-black w-full h-full' : 'out'}></div>
                {click ? <Intro /> : null}
                <div className={!click ?
                    'flex items-center flex-col gap-2 absolute top-1/2 left-1/2 center cursor-pointer' :
                    'flex items-center flex-col gap-2 absolute change center cursor-pointer'} onClick={handleClick}>
                    <i className={click ? 'fa-solid fa-yin-yang text-8xl' :
                        'fa-solid fa-yin-yang text-9xl'}></i>
                    <button className={click ? 'd-none' : 'block'}>
                        Click Here
                    </button>
                </div>
                <SocialIcons />
                <div className='translateY absolute top-1/2 right-0 cursor-pointer rotate-90'>
                    <NavLink to="/blog" className="no-underline text-black text-xl font-medium">
                        Blog
                    </NavLink>
                </div>
                <div className='translateY absolute top-1/2 left-4 cursor-pointer work'>
                    <NavLink to="/work" className="no-underline text-xl font-medium" style={{ color: `${themes.text}` }}>
                        Work
                    </NavLink>
                </div>
                <div className='w-2/4 translateX absolute bottom-2 left-1/2 flex items-center justify-between gap-10'>
                    <div>
                        <NavLink to="/about" className="no-underline text-xl font-medium" style={{ color: `${themes.text}` }}>
                            About
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/skills" className="no-underline text-black text-xl font-medium">
                            My Skills
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
