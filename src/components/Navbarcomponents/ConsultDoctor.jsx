//libraries
import React,{useEffect,useState} from "react";
import axios from "axios";

const ConsultDoctor = () => {
    const [docters,setdoctores]=useState([])
    useEffect(()=>{
        fetchData()
    },[])
        async function fetchData(){
            try {
                let response = await axios.get(`https://api.storerestapi.com/users`)
                console.log(response.data.data)
                setdoctores(response.data.data)
            } catch (error) {
                console.log(error);
            }
        }     

    return (<>
    <div>
        <h1 style={{textAlign:"center",fontSize:"3em"}}>ConsultDoctor</h1>
    </div>
    <div className="cards">
        {docters.map((ele,index)=>{
            return (
            <div key={index}  className="card">
                {/* <img src={ele.image} alt="" style={{width:"200px",height:"200px"}}/> */}
                <h1>{ele.name}</h1>
                <p>{ele.email}</p>
                <p>{ele.number}</p>
            </div>)
        })}
    </div>
    </>);
};
export default ConsultDoctor