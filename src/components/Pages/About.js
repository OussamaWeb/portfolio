import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useGlobalFunction } from '../../context/App'
import { NavBar } from '../Header/NavBar';
import { SocialIcons } from '../SocialIcons';

export const About = () => {
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
        <div className={opacity ? 'about h-screen w-full absolute bottom-0 overflow-auto right-0 left-0 opa'
          : 'about h-screen w-full absolute right-0 bottom-0 overflow-auto left-0'} style={{ backgroundColor: themes.body }}>
          <Container>
            <NavBar />
            <SocialIcons />
            <div className='pt-10 px-16 relative' style={{ color: themes.text }}>
              <h1 className='font-black lg:text-9xl text-4xl absolute lg:-top-8 -top-2 lg:-left-16 opacity-20'>ABOUT</h1>
              <div className='grid about-box gap-4'>
                <div style={{ border: `2px solid ${themes.text}`}}
                  className='font-mono py-10 px-4 grid grid-cols-1 gap-8 h-fit z-20'>
                  <h5>I'm a front-end developer located in India. I love
                    to create simple yet beautiful websites with great user experience.</h5>
                  <h5>I'm interested in the whole frontend stack Like trying new things and building great projects.
                    I'm an independent freelancer and blogger. I love to write blogs and read books.</h5>
                  <h5>I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.</h5>
                </div>
                <div className='img-about absolute top-8 lg:top-1/2 right-14 translateY'>
                  <img src={require('../Images/spaceman.png')} alt='' />
                </div>
              </div>
            </div>
          </Container>
        </div>
        : <h1 className='absolute center top-1/2 left-1/2 font-mono'>loading...</h1>}
    </>
  )
}
