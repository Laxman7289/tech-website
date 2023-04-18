import React from 'react'
import './Home.css'
import Common from './Common'
import Webimg from '../src/Webimg/img1.png'

function Home() {
  return (
    <>
    <Common name='Grow your business with'
    imgsrc={Webimg}
    visit='/contact'
    btname='Get Started'
    />
    </>
  )
}

export default Home