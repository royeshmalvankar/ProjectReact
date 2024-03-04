//libraries
import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [auth, setauth] = useState(false);
    const [email, setemail] = useState([]);
    const [password, setpassword] = useState([]);
    const [logemail, setlogemail] = useState([]);
    const [logpassword, setlogpassword] = useState([]);
    const [data, setdata] = useState([]);
    const [product, setproduct] = useState([]);
    return (
        <AuthContext.Provider value={{ auth, setauth ,email,setemail,password,setpassword,logemail,setlogemail,logpassword,setlogpassword,data,setdata,product,setproduct}}>
            {children}
        </AuthContext.Provider>
    );
};