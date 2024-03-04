//libraries
import React, { useEffect, useState } from "react";
import axios from "axios"
const LabTest = () => {
    const [labtest,setlabtest]=useState([])
    useEffect(()=>{
        fetchData()
    },[])
        async function fetchData(){
            try {
                let response = await axios.get(`https://api.storerestapi.com/todos`)
                console.log(response.data.data)
                setlabtest(response.data.data)
            } catch (error) {
                console.log(error);
            }
        }     

    return (<>
    <div>
        <h1 style={{textAlign:"center",fontSize:"3em"}}>LabTest</h1>
    </div>
    <div className="cards">
        {labtest.map((ele,index)=>{
            return (
            <div key={index}  className="card">
                {/* <img src={ele.image} alt="" style={{width:"200px",height:"200px"}}/> */}
                <h1>{ele.title}</h1>
                <p>{ele.status}</p>
                <p>{ele.description}</p>
            </div>)
        })}
    </div>
    </>);
};
export default LabTest