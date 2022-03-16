import React from 'react'
import { useState } from 'react';
import {Link } from 'react-router-dom'

const Email=()=> {
    
  return (
    <div className="container white">
     <form className="text-box">
         <h5 className="Left">Login</h5>
         <input type="text-box" name="emailid" placeholder="Email Id" id="emailid"/>
         <div>
            <p></p>
            <input type="text-box password" name="password" placeholder="Password" id="password1"/>
            <p></p>
                    <div>
                    <button className="green darken-4">Submit</button>
                    </div>
                    <p></p>
        
        <h6 className="center">-------------------------  OR  -------------------------</h6>
        <p></p>
        <div className="center">
        <button className="green darken-4"><a href="/Otp">Login with OTP</a></button>
        </div>
        <div className="center">
        <p>Don't have an account ? <a href="/"> Register</a></p>
        </div>
        <p></p>
        <div>
                    <Link to='/'>
                        <button className="blue darken-4 right">Close</button>
                        </Link>
                    </div>
        </div>
     </form>
    </div>
  )
}

export default Email