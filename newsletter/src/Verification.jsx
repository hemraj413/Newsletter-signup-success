import React from 'react'
import './Verification.css'

const Verification = ({email}) => {
  return (
    <div className="verification">
    <div className='box'>
        <div className='info'>
          <img src="./assets/images/icon-success.svg" alt="sucess" />
          <h1>Thanks for subscribing!</h1>
          <p>A confirmation email has been sent <b>{email}</b> . Please open and click the button inside to confirm the subscription.</p>
        </div>
        <div className="btn">
          <button>Dismiss message</button>

        </div>
    </div></div>
  )
}

export default Verification