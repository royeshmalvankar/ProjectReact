//libraries
import React, { useEffect, useState } from "react";
import axios from "axios"

const CancerCare = () => {
    const [productC,setproductC]=useState([])
    useEffect(()=>{
        fetchData()
    },[])
        async function fetchData(){
            try {
                let response = await axios.get(`https://api.storerestapi.com/products`)
                console.log(response.data.data)
                setproductC(response.data.data)
            } catch (error) {
                console.log(error);
            }
        }     

    return (<>
    <div>
        <h1 style={{textAlign:"center",fontSize:"3em"}}>CancerCare</h1>
    </div>
    <div className="cards">
        {productC.map((ele,index)=>{
            return (
            <div key={index}  className="card">
                {/* <img src={ele.image} alt="" style={{width:"200px",height:"200px"}}/> */}
                <h1>{ele.title}</h1>
                <p>{ele.price}</p>
            </div>)
        })}
    </div>
    </>);
};
export default CancerCare