//libraries
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthContext";
import axios from "axios";
import "../../App.css";

const Signup = () => {
    const {email, setemail,password,setpassword} =useContext(AuthContext);
    async function handleSubmit(e){
        e.preventDefault();
        try {
            let response =  await axios.post(`http://localhost:3001/auth`,{email,password})
            console.log(response.data)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
        <div className="signup">
            <h1>Signup</h1>
                <div className="form">
                    <label htmlFor="">Email</label>
                    <br />
                    <input type="text" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)}/>
                    <br />
                    <label htmlFor="">Password</label>
                    <br />
                    <input type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                    <br />
                    <br />
                    <button onClick={handleSubmit}>Register</button>
                </div>
        </div>
        </>
    );
};

export default Signup;