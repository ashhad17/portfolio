import React from 'react'
import "./animate.css"
function SkillCard(props) {
  return (
    // <div class="card">{props.skill}</div>
/* From Uiverse.io by alexruix */ 


<div class="card animated fadeInUpBig">
  <div class="card-info">
    <div className="logo">
      {props.logo}
    </div>
    <p class="title"><h3>{props.skill}</h3></p>
  </div>
</div> 
  
  )
}

export default SkillCard