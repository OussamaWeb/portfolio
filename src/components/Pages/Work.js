import React, { useState, useEffect } from 'react'
import { useGlobalFunction } from '../../context/App'
import { Container } from 'react-bootstrap';
import { SocialIcons } from '../SocialIcons';
import { NavBar } from '../Header/NavBar';
import { dataWork } from '../../db/Data';
import '../../all.min.css';

export const Work = () => {
  let { themes, click, opacity } = useGlobalFunction();
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000)
  }, [])
  return (
    <>
      {loading ?
        <div className={opacity ? 'absolute w-full h-screen right-0 bottom-0 overflow-auto left-0 opa' :
          'absolute w-full h-screen bottom-0 overflow-auto right-0 left-0'} style={{ backgroundColor: `${themes.body}` }}>
          <Container>
            <NavBar />
            <SocialIcons />
            <div className='fixed bottom-4 right-4'>
              <i className='fa-solid fa-yin-yang text-7xl'></i>
            </div>
            <div className='box-work relative px-14 pt-28 pb-8 z-20'>
              <h1 className='font-black lg:text-9xl text-4xl absolute lg:-top-8 -top-2 lg:-left-16 opacity-20' style={{ color: themes.text }}>WORK</h1>
              <div className='grid lg:grid-cols-3 items-center gap-3'>
                {dataWork.map((item, index) => {
                  let { id, name, description, tags,
                    demo, github } = item;
                  return (
                    <div key={index} className='box rounded-tr-3xl rounded-bl-3xl p-4 h-full'
                      style={{ backgroundColor: themes.text, color: themes.body }} >
                      <h5 className=' font-bold'>{name}</h5>
                      <p className='pt-3 font-medium text-md'>{description}</p>
                      <p className='pt-2' style={{ borderBottom: `2px solid ${themes.body}` }}></p>
                      <div>
                        {tags.map((tag, index) => {
                          return (
                            <span className='font-medium' key={index}>#{tag} </span>
                          )
                        })}
                      </div>
                      <div className='pt-3 flex items-center justify-between'>
                        <button className={click ? 'bg-black px-16 py-1 rounded-bl-3xl text-white text-lg' :
                          'bg-white px-16 py-1 rounded-bl-3xl text-black text-lg'}>Visit</button>
                        <i className='fa-brands fa-github text-3xl'></i>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </Container>
        </div>
        : <h1 className='absolute center top-1/2 left-1/2 font-mono'>loading...</h1>}
    </>
  )
}