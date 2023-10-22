import React from 'react';
import './App.css';
import { Button, Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { Main } from './components/Pages/Main';
import { About } from './components/Pages/About';
import { Blog } from './components/Pages/Blog';
import { Work } from './components/Pages/Work';
import { MySkills } from './components/Pages/MySkills';
import AppContext from './context/App';

export default function App() {
  return (
    <AppContext>
      <div className='app'>
        <Container>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/work' element={<Work />} />
            <Route path='/skills' element={<MySkills />} />
          </Routes>
        </Container>
      </div>
    </AppContext>
  )
}