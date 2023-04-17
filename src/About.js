import React from 'react'
import Common from './Common'
import Webimg from '../src/Webimg/img1.png'


function About() {
  return (
    <>
    <Common name='Welcome to '
    imgsrc={Webimg}
    visit='/Contact'
    btname='Contact Now'
    />
    </>
  )
}

export default About
