import React, { useEffect, useRef, useState } from 'react'
import '../../all.min.css';
import { useGlobalFunction } from '../../context/App';
import { NavLink } from 'react-router-dom';


export const NavBar = () => {
    let ref = useRef(null);
    const [audio, setAudio] = useState(false);
    let handleAudio = () => {
        setAudio((e) => !e)
        if (!audio) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }
    let { themes, falseClick } = useGlobalFunction();
    return (
        <div className='NavBar flex items-center justify-between py-8 relative'>
            <div className='z-10 sm:flex items-center gap-6'>
                <h4 className='font-black text-3xl' style={{color:`${themes.text}`}}>CB</h4>
                <div className='music flex items-center cursor-pointer' onClick={handleAudio}>
                    {[...Array(5)].map((item, index) => {
                        return (
                            <span className={audio ? 'item w-1 h-5 rounded-md' :
                            'w-1 h-5 rounded-md'} 
                            style={{ background: themes.text }} key={index}></span>
                        )
                    })}
                    <audio src={require('../audio/u-said-it-v13-1167.mp3')} ref={ref} loop />
                </div>
            </div>
            <NavLink to="/" onClick={falseClick} className="z-50 text-black absolute left-1/2 translateX">
                <button className='px-2 py-1 rounded-full text-xl z-10 hover:text-white'>
                    <i className='fa-solid fa-power-off'></i>
                </button>
            </NavLink>
            <div>
                <h6 className='cursor-pointer font-bold'>Contact me</h6>
            </div>
        </div>
    )
}