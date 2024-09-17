import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import "./contact.css"
function Contact() {
  return (<>
  <div className="form-parent">
  <div class="form-container">
  <form class="form">
    <span class="heading">Contact Us</span>

    <div class="form-group">
      <input class="form-input" required="" type="text" />
      <label>Name</label>
    </div>

    <div class="form-group">
      <input class="form-input" required="" type="email" />
      <label>Email</label>
    </div>

    <div class="form-group">
      <input class="form-input" required="" type="tel" />
      <label>Phone</label>
    </div>
    
    <div class="form-group">
      <input class="form-input" required="" type="text" />
      <label>Query</label>
    </div>

    <button>SUBMIT</button>
  </form>
</div>
  </div>

  </>
  )
}

export default Contact