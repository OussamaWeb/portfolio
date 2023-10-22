import React, { useState, useEffect } from 'react'
import { useGlobalFunction } from '../../context/App'
import { Container } from 'react-bootstrap';
import { NavBar } from '../Header/NavBar';
import { SocialIcons } from '../SocialIcons';


export const MySkills = () => {
  let { themes, opacity } = useGlobalFunction();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000)
  }, [])
  return (
    <>
      {loading ?
        <div className={opacity ? 'absolute top-0 bottom-0 right-0 left-0 opa' :
        'absolute top-0 bottom-0 right-0 left-0'} style={{ backgroundColor: `${themes.body}` }}>
          <Container>
            <div className='relative w-full h-full'>
              <NavBar />
              <SocialIcons />
              <div className='two-skills h-full px-14 pt-10 font-mono relative'
                style={{ color: `${themes.text}` }}>
                <h1 className='font-black lg:text-9xl text-4xl absolute lg:-top-8 -top-2 lg:-left-16 opacity-20'>SKILLS</h1>
                <div className='grid lg:grid-cols-2 gap-4'>
                  <div className='grid grid-cols-1 items-center gap-4 p-4 cursor-pointer'
                    style={{ border: `2px solid ${themes.text}` }}>
                    <div className='flex items-center gap-2 justify-center'>
                      <i className='fa-solid fa-palette text-4xl'></i>
                      <h4 className=' font-bold'>Designer</h4>
                    </div>
                    <h4 className='font-normal'>
                      I love to create design which speaks, Keep it clean, minimal and simple.
                    </h4>
                    <div className='dot-before'>
                      <h4 className=' font-bold'>I LIKE TO DESIGN</h4>
                      <div className='pl-6'>
                        <h5 className='relative'>Web Design</h5>
                        <h5 className='relative'>Mobile Apps</h5>
                      </div>
                    </div>
                    <div className='dot-before'>
                      <h4 className=' font-bold'>TOOLS</h4>
                      <div className='pl-6'>
                        <h5 className='relative'>Figma</h5>
                      </div>
                    </div>
                  </div>
                  <div className='grid grid-cols-1 items-center gap-4 p-4 cursor-pointer'
                    style={{ border: `2px solid ${themes.text}` }}>
                    <div className='flex items-center gap-2 justify-center'>
                      <i className='fa-solid fa-laptop-code text-4xl'></i>
                      <h4 className=' font-bold'>Frontend Developer</h4>
                    </div>
                    <h4 className='font-normal'>
                      I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
                    </h4>
                    <div>
                      <h4 className=' font-bold'>SKILLS</h4>
                      <h5 className='pl-6'>Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase etc.</h5>
                    </div>
                    <div>
                      <h4 className=' font-bold'>TOOLS</h4>
                      <h5 className='pl-6'>VScode, Github, Codepen etc.</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        : <h1 className='absolute center top-1/2 left-1/2 font-mono'>loading...</h1>}
    </>
  )
}