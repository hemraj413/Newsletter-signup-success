import React, { useState } from 'react'
import Verification from './Verification';
import Login from './Login';

function App() {
    const[isSubscribed,setIsubscribed] = useState(false)
    const[email,setEmail]= useState("")

    function handleEmail(confirmedEmail){
        setEmail(confirmedEmail)
        setIsubscribed(true)

    }


    return (
        <>
        {
            !isSubscribed?(
        <Login onEmailConfirmed={handleEmail}/>) :(
            <Verification email={email}/>
        )
}
        </>
    );
}

export default App;
