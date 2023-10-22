import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { useGlobalFunction } from '../../context/App';
import { NavBar } from '../Header/NavBar';
import { SocialIcons } from '../SocialIcons';
import { Blogs } from '../../db/Data';


export const Blog = () => {
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
        <div className={opacity ? 'blog absolute top-0 bottom-0 left-0 right-0 h-screen overflow-auto opa' :
        'blog absolute top-0 bottom-0 left-0 right-0 h-screen overflow-auto'}>
          <div className='relative w-full z-10 h-full overflow-y-auto two' style={{ background: `rgba(${themes.bodyRgba},.8)` }}>
            <Container className='relative h-full'>
              <NavBar />
              <SocialIcons />
              <div className='center absolute top-1/2 left-1/2 w-3/4 h-3/4 z-20 py-16'>
                <div className='grid lg:grid-cols-2 gap-4 relative'>
                  <h1 className='font-black lg:text-9xl text-4xl absolute lg:-top-8 -top-2 lg:-left-16 opacity-20' style={{ color: `${themes.text}` }}>BLOG</h1>
                  {Blogs.map((data, index) => {
                    let { id, name, tags, date, img } = data;
                    return (
                      <div className='card-blog w-ful cursor-pointer p-3' style={{ border: `1px solid ${themes.text}` }} key={index}>
                        <img src={img} alt="" />
                        <div className='w-full card-details' style={{ borderBottom: `1px solid ${themes.text}` }}>
                          <h6 className='pt-3 pb-1 font-bold' style={{ color: `${themes.text}` }}>{name}</h6>
                        </div>
                        <div className='pt-2'>
                          {tags.map((tag, index) => {
                            return (
                              <span key={index} style={{ color: `${themes.text}` }}>#{tag} </span>
                            )
                          })}
                        </div>
                        <h6 className='pt-3' style={{ color: `${themes.text}` }}>{date}</h6>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div>
              </div>
            </Container>
          </div>
        </div>
        : <h1 className='absolute center top-1/2 left-1/2 font-mono'>loading...</h1>}
    </>
  )
}
