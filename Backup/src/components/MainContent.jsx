import React from 'react'
import profile from "../assets/me.png"
import "./animate.css"
function MainContent() {
  return (
    <>
    <div className="main" style={{
          display:"flex",
          flexWrap:"wrap",
          justifyContent:"center",
          alignItems:"center"
          }}>
        <div className="content" >
        
        <h1>I'M <span className='myName'>Mohammed Ashhad,</span></h1>
        <h2 style={{textAlign:"center"}}>Software Developer.<br/><br/>Specialized in FrontEnd React Developer</h2>
        {/* <h2></h2> */}
        <button class="button" id='btn'><a href="#contact" style={{textDecoration:"none",color:"#1BFD9C"}}>Get in touch</a></button>
        </div>
        <div className="image">
        <img src={profile} alt="" />
        </div>
    </div>

    </>
  )
}

export default MainContent