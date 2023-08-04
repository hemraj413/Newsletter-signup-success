import { useState } from 'react';
import './Login.css'

const listIcon ="./assets/images/icon-list.svg"



const Login = ({onEmailConfirmed}) => {

    const[email,setEmail] = useState("")
    const[errorMsg,setErrorMsg] = useState('')
    const[inputStyle,setInputStyle] = useState()

    const errorStyle ={
        border:"1px solid #f23",
        color:"#f23"
    }
    
    function isEmail(email){
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email)
        }
        function handleChange(e){
            setEmail( e.target.value)
            
        }

    function subscribed (){
        if(!isEmail(email)){
            setErrorMsg( "Valid email required")
            
                setInputStyle(errorStyle)
            

        }else{
            onEmailConfirmed(email)
        }
    }

  return (
        <div className='App'>
         : 
    <div className="container">
         <div className="signup-part">
            <h1>Stay updated!</h1>
            <p>join 60,000+ products managers receiving monthly massage updates on:</p><br/>
            <ul className="features">
                <li><img src={listIcon} alt="icon-list"/> <span> Product discovery and building what matters</span>
            
            </li><br/>
                <li><img src={listIcon} alt="icon-list"/> <span>Measuring to ensure updates are success</span></li><br />
                <li><img src={listIcon} alt="icon-list"/> <span>And much more!</span></li>
            </ul>
            <div className="form">
                <div className='form-detail'><label >email address</label> <span id='error-email'>{errorMsg}</span></div>

                <input type="email" placeholder="email@company.com" onChange={handleChange} style={inputStyle} />
                <button id="subscribe" onClick={()=>subscribed()} >Subscribe to monthly news letter</button>
            </div>
        </div>
        <div className="image-part">

        </div>
     
    </div>
    
    </div>
    
  )
}

export default Login