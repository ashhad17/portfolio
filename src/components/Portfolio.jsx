import React from 'react'
import image from "../assets/alrazack.png"
function Portfolio(props) {
  return (
    
            <>
            <div class="card-portfolio">
    
            <div className="card-content">
            <img src={image} alt="" />
    
            <p class="heading" >
              AL Razack Tours Internationals
            </p>
            <button>View</button>
            </div>
            </div></>
     )
}

export default Portfolio;