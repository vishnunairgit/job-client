import React, { useState } from 'react'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import LandingNav from '../Landing-Nav/LandingNav'


function Landing() {
const [loginsignup, setloginsignup] = useState('Login')

    return (
        <div >
            <LandingNav/>
            {loginsignup === 'Login' && <Login setloginsignup={setloginsignup}  /> }
            {loginsignup === 'Signup' && <Signup setloginsignup={setloginsignup} />}         
        </div>
    )
}

export default Landing