import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BackgroundImage } from './components/background_component/BackgroundImage';
import { BackgroundText } from './components/background_component/BackgroundText';
import logo from './assets/logo.png';
import Twitter from './components/background_component/Twitter';
import Shopping from './components/shopping_page/Shopping';

export default function App() {
  return (
    <div className='flex flex-row h-screen p-16'>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <BackgroundText />
              <BackgroundImage />
            </>
          } />
          <Route path='/twitter' element ={
            <Twitter/>
          } />
          <Route path='/shopping' element = {
            <Shopping/>
          }/>
        </Routes>
      </Router>
    </div>
  );
}
