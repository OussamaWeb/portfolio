import React from 'react'
import { useGlobalFunction } from '../context/App'

export const Intro = () => {
    let { themes } = useGlobalFunction();
    return (
        <div className='intro absolute md:top-1/2 top-1/3 left-1/2 center bg-no-repeat z-10 w-2/3 md:h-80 h-60 md:flex items-center'>
            <div className='w-full h-full left text-white px-4 py-12 flex flex-col gap-3' 
            style={{backgroundColor: themes.body }}>
                <h1 className='lg:text-7xl md:text-5xl font-bold'>Hi, </h1>
                <h4 className='lg:text-3xl md:text-2xl font-medium'>I'm Developer Web</h4>
                <p className='text-gray-400 lg:text-2xl md:text-xl'>I design and Code Simple yet beautiful websites</p>
            </div>
            <div className='w-full h-full right relative p-4' 
            style={{backgroundColor: themes.text}}>
                <img src={require('./Images/profile-img.png')} 
                className='image-portfolio absolute left-1/2 translateX bottom-0 w-52' />
            </div>
        </div>
    )
}