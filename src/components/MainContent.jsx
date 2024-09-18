import React from 'react'
import profile from "../assets/me.png"
import "./animate.css"
function MainContent() {
  return (
    <>
    <div className="main">
        <div className="content">
        
        <h1>I'M <span className='myName'>Mohammed Ashhad</span></h1>
        <h2> ,Software Developer.</h2>
        <h2>Specialized in FrontEnd React Developer</h2>
        <button class="button" id='btn'>Contact Me</button>
        </div>
        <div className="image">
        <img src={profile} alt="" />
        </div>
    </div>

    </>
  )
}

export default MainContent