//libraries
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Divider } from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'


//components
import "../App.css";


const Medicine = () => {

    
const colors = ["https://onemg.gumlet.io/61c826f5-5126-4259-b76b-23bad4bf7609_1685954076.png?w=1280&h=250&format=auto", "https://onemg.gumlet.io/a500b58f-4b2c-4998-9be8-d26fb860691a_1709279187.png?w=1280&h=250&format=auto", "https://onemg.gumlet.io/diagnostics%2F2024-02%2F1709191742_HRS-March_Day1-WALLET-960X200.jpg?w=1280&h=250&format=auto"];
const delay = 2500;
const [index, setIndex] = useState(0);
const timeoutRef = useRef(null);

function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

useEffect(() => {
  resetTimeout();
  timeoutRef.current = setTimeout(
    () =>
      setIndex((prevIndex) =>
        prevIndex === colors.length - 1 ? 0 : prevIndex + 1
      ),
    delay
  );

  return () => {
    resetTimeout();
  };
}, [index]); 

const [currentIndex, setCurrentIndex] = useState(0);
const images = [
  {
    url: 'https://onemg.gumlet.io/a56b26a0-30f1-4977-96f8-7acf1b3e0e02.png?format=auto',
    title: 'Diabetes'
  },
  {
    url: 'https://onemg.gumlet.io/629aaf65-515f-4069-b730-28618f78597b.png?format=auto',
    title: 'Heart Care'
  },
  {
    url:"https://onemg.gumlet.io/b251c9cf-8d88-4fb8-8c3c-7b328caa9f70.png?format=auto",
    title:"Stomach Care"
  },
  {
    url:"https://onemg.gumlet.io/573d8a1a-edd0-46a5-a0fe-01a1c2bcc8f2.png?format=auto",
    title:"Liver Care"
  },
  {
    url:"https://onemg.gumlet.io/a1af8b43-2836-483d-8709-99eff1cc6f70.png?format=auto",
    title:"Bones Joints & \nMuscles Care"
  },
  {
    url:"https://onemg.gumlet.io/96f9ed8a-ba62-426c-bd66-6762f40f3370.png?format=auto",
    title:"Kidney Care"
  },
  {
    url:"https://onemg.gumlet.io/730dbe50-4bdc-4fa8-9a09-93bc5d6c6f38.png?format=auto",
    title:"Derma Care"
  },
  {
    url:"https://onemg.gumlet.io/8051e79c-6152-440e-b402-8d1ba8d7c82e.png?format=auto",
    title:"Respiratory Care"
  },
  {
    url:"https://onemg.gumlet.io/1627c0d3-a6ed-470a-8b18-94baa9fdbcfc.png?format=auto",
    title:"Eye Care"
  }
]

const prev = () => {
  setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
};

const next = () => {
  setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
};


    return (
        <>
    <div className="sec1">
            <div className="slideshow">
                <div
                    className="slideshowSlider"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {colors.map((img, index) => (
                    <img
                        className="slide"
                        key={index}
                        src={ img }
                    ></img>
                    ))}
                </div>

                <div className="slideshowDots">
                    {colors.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                        setIndex(idx);
                        }}
                    ></div>
                ))}
                </div>
            </div>
            <div className="imge">
                <img style={{width:"100%",height:"300px"}} src="https://onemg.gumlet.io/diagnostics%2F2024-01%2F1706088937_1948x800+%2827%29.png" alt="" />
            </div>
    </div>
    <Divider orientation='horizontal' borderColor="lightgrey"/>
    <div>
        <h1 style={{textAlign:"center",marginTop:"20px",marginBottom:"20px",fontSize:"1.5em"}}>Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform</h1>
    </div>
    <Divider orientation='horizontal' borderColor="lightgrey"/>
    <div className="sec2">
        <img style={{width:"65%",height:"180px",margin:"auto",paddingTop:"30px",paddingBottom:"25px"}} src="https://onemg.gumlet.io/marketing/d037f049-0426-43b5-b365-c89ccd788d2d.png" alt="" />

        <h2 style={{textAlign:"center",paddingTop:"5px",paddingBottom:"8px",fontSize:"1.2em",marginRight:"55%"}}>Shop by Health Concern</h2>
    </div>
    <div className="sec3" style={{display: "flex",justifyContent: "center",paddingBottom: "30px" }}>

      <button id="prev" onClick={prev} style={{height: "50px",textAlign: "center"}}  disabled={currentIndex === 0}><ArrowBackIcon/></button>

      <div id="carousel">
        {[currentIndex, (currentIndex + 1) % images.length, (currentIndex + 2) % images.length, (currentIndex + 3) % images.length, (currentIndex + 4) % images.length, (currentIndex + 5) % images.length ].map(index => (
          <div key={index} >
            <img src={images[index].url} alt={images[index].title} />
            <p>{images[index].title}</p>
          </div>
        ))}
      </div>
      
      <button id="next" onClick={next} style={{height: "50px",textAlign: "center"}}  disabled={currentIndex === images.length - 1}><ArrowForwardIcon/></button>
    </div>
    <br />
    <Divider orientation='horizontal' borderColor="lightgrey"/>
        </>
    );
};

export default Medicine;