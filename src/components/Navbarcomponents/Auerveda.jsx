//libraries
import React,{useEffect,useContext} from "react";
import axios from "axios";
import { AuthContext } from "../../AuthContext/AuthContext";
import "./../../App.css";

const Auerveda = () => {
    const {product,setproduct}=useContext(AuthContext)
    useEffect(()=>{
        fetchData()
    },[])
        async function fetchData(){
            try {
                let response = await axios.get(`https://fakestoreapi.com/products`)
                console.log(response.data)
                setproduct(response.data)
            } catch (error) {
                console.log(error);
            }
        }     

    return (<>
    <div>
        <h1 style={{textAlign:"center",fontSize:"3em"}}>Auerveda</h1>
    </div>
    <div className="cards">
        {product.map((ele)=>{
            return (
            <div key={ele.id}  className="card">
                <img src={ele.image} alt="" style={{width:"200px",height:"200px"}}/>
                <h1>{ele.title}</h1>
                <p>Price: {ele.price}</p>
                
            </div>)
        })}
    </div>
    </>);
};
export default Auerveda