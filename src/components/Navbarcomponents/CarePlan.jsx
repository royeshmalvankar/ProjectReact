//libraries
import React, { useEffect, useState } from "react";
import axios from "axios"

const CarePlan = () => {
        const [care,setcareplan]=useState([])
        useEffect(()=>{
            fetchData()
        },[])
            async function fetchData(){
                try {
                    let response = await axios.get(`https://dummyjson.com/products`)
                    console.log(response.data.products)
                    setcareplan(response.data.products)
                } catch (error) {
                    console.log(error);
                }
            }    
    
        return (<>
        <div>
            <h1 style={{textAlign:"center",fontSize:"3em"}}>CarePlan</h1>
        </div>
        <div className="cards">
            {care.map((ele,index)=>{
                return (
                <div key={index}  className="card">
                    <img src={ele.images[0]} alt="" style={{width:"100px",height:"100px"}}/>
                    <h1>{ele.title}</h1>
                    <p>Brand: {ele.brand}</p>
                    <p>Price: {ele.price}</p>
                </div>
                )
            })}
        </div>
        </>);
};
export default CarePlan