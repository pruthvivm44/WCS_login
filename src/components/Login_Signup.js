import React from 'react';
//import UseForm from './UseForm';
const Login_Signup=()=>{
// const{ handleChange,values}=UseForm();



        return(
            <div className="container white">
            
            <form className="text-box">
                    
                <h5 className="Left">Login</h5>
                    <input 
                    type="Email/Phone" name="" placeholder="Enter email / Phone number" id="Email/Phone" required>
                    </input>
                    <p className="message">We'll never share your email or phone number with anyone else.</p>
                    
                    <input 
                    type="password" name="" placeholder="Password" id="password">
                    </input>
                    <p className="message center">Don't have an account ? <a href="#">Create now</a></p>
                     
                     <div>
                        <input 
                        type="radio center" value="" name="show password" /> Show password
                     </div>
                     
                     <div>
                        <input
                        type="radio center" value="" name="show password" /> Login via OTP
                    </div>
                           
                            <button className="green darken-4 ">Submit</button>
                    
                    <div>
                        <button className="blue darken-3 right">Close</button>
                    </div>
        </form>
    </div>
        )
    }
export default Login_Signup