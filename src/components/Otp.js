import React from 'react'
import { useState } from 'react';

const Otp=()=> {
    
  return (
    <div className="container white">
     <form className="text-box">
         <h5 className="Left">Login</h5>
         <input type="text-box" name="phonenumber" placeholder="Phone Number" id="phonenumber"/>
         <p></p>
         <div >
             <button className="green darken-4">Send OTP</button>
         </div>
         <p></p>
         <h6 className="center">-------------------------  OR  -------------------------</h6>
         <p></p>
         <div className="center">
         <button className="green darken-4"><a href="/Email">Login with Email</a></button>
     </div>
     </form>
    </div>
  )
}

export default Otp