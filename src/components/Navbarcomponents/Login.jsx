//libraries
import React,{useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthContext";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    const {logemail, setlogemail,logpassword,setlogpassword,data,setdata,auth,setauth}=useContext(AuthContext);
    async function handleSubmit(){
        try {
            let response = await axios.get(`http://localhost:3001/auth`)
            setdata(response.data)
        } catch (error) {
            console.log(error);
        }
        data.map((ele)=>{
            console.log(logemail,logpassword);
            if (ele.email===logemail && ele.password===logpassword){
                console.log("login success");
                setauth(true)
                navigate("/")
            }
        })

    }
    console.log(auth);

    return (
        <>
        <div>
            
            <div className="signup">
            <h1>Login</h1>
                <div className="form">
                    <label htmlFor="">Email</label>
                    <br />
                    <input type="text" placeholder="Email" value={logemail} onChange={(e)=>setlogemail(e.target.value)}/>
                    <br />
                    <label htmlFor="">Password</label>
                    <br />
                    <input type="password" placeholder="Password" value={logpassword} onChange={(e)=>setlogpassword(e.target.value)}/>
                    <br />
                    <br />
                    <button onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;