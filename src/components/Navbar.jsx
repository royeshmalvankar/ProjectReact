//Libraries
import React,{useContext} from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {Divider} from "@chakra-ui/react";
import { Badge } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { AuthContext } from "../AuthContext/AuthContext";
import { Button, ButtonGroup } from '@chakra-ui/react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
  } from '@chakra-ui/react'

//Components
import "../App.css";

const Navbar = () => {
    const {auth,setauth} = useContext(AuthContext)
    console.log(auth);
    return (
        <>
        <div className="navbar">
            <div className="navbar1">
                <div className="logo">
                    <img src="https://www.1mg.com/images/tata_1mg_logo.svg" alt="" />
                </div>
                <div className="links">
                    <Link to="/" className="active" >Medicine</Link>
                    <Link to="/labtest" className="active" >LabTest <Badge colorScheme="red" className="glow">SAFE</Badge></Link>
                    <Link to="/consultdoctor" className="active" >ConsultDoctor</Link>
                    <Link to="/cancercare" className="active" >CancerCare</Link>
                    <Link to="/auerveda" className="active" >Auerveda</Link>
                    <Link to="/careplan" className="active" >CarePlan <Badge colorScheme="red">SAVE MORE</Badge></Link>
                    
                </div>
            </div>
            <div className="navbar2">
                <div className="login" style={{fontSize:"0.7em",gap:"0.5em"}}>
               <div>
               {auth?<button onClick={()=>{setauth(false),useNavigate("/login")}}>Logout</button>:<Link to="/login"><button>Login</button></Link>}
               </div>
                <h4>|</h4>
                <Link to="/signup">Signup</Link>
                </div>
                <div className="offer" style={{fontSize:"0.7em",gap:"0.5em"}}>
                    <Link>Offer</Link>
                </div>
                <div className="cart" style={{fontSize:"0.7em",gap:"0.5em"}}>
                <Link to="/cart">Cart</Link>
                </div>
                <div className="help" style={{fontSize:"0.7em",gap:"0.5em"}}>
                    <Link>Need Help?</Link>
                </div>
            </div>
        </div>
        <Divider orientation='horizontal' borderColor="lightgrey"/>
        <div className="searchbar">
            <div className="searchbar1">
                
            <Select placeholder='Select State' width="40%">
                <option value='option1'>New Delhi</option>
                <option value='option2'>Mumbai</option>
                <option value='option3'>Banglore</option>
            </Select>
            <Input variant="filled" placeholder='Search for medicine' width="60%" />
            </div>
            <div className="searchbar2">
            <p>QUICK BUY! Get 15% off on medicines*</p>
            <Button colorScheme='orange'>Quick order</Button>
            </div>
        </div>
        <Divider orientation='horizontal' borderColor="lightgrey" />
        <div className="popover">
            <div className="popover1">
            <Popover trigger="hover" >
            <PopoverTrigger colorScheme="white">
                <Button bgColor="white">Health Resource Center</Button>
            </PopoverTrigger>
                <PopoverContent>
                <PopoverArrow />
                {/* <PopoverHeader>Header</PopoverHeader> */}
                 {/* <PopoverCloseButton /> */}
                <PopoverBody>
                    <p>All Dieases</p>
                    <p>All Medicines</p>
                    <p>All Categories</p>
                </PopoverBody>
                {/* <PopoverFooter>This is the footer</PopoverFooter> */}

                </PopoverContent>
                
            </Popover>
            </div>
            <div className="popover2">
            <Popover trigger="hover" >
            <PopoverTrigger colorScheme="white">
                <Button bgColor="white">Vitamine And Nutrients</Button>
            </PopoverTrigger>
                <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>Vitamin And Supplements</PopoverHeader>
                 {/* <PopoverCloseButton /> */}
                <PopoverBody>
                    <p>All Dieases</p>
                    <p>All Medicines</p>
                    <p>All Categories</p>
                </PopoverBody>
                {/* <PopoverFooter>This is the footer</PopoverFooter> */}

                </PopoverContent>
                
            </Popover>
            </div>
            <div className="popover3">
            <Popover trigger="hover" >
            <PopoverTrigger colorScheme="white">
                <Button bgColor="white">Vitamine And Nutrients</Button>
            </PopoverTrigger>
                <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>Vitamin And Supplements</PopoverHeader>
                 {/* <PopoverCloseButton /> */}
                <PopoverBody>
                    <p>All Dieases</p>
                    <p>All Medicines</p>
                    <p>All Categories</p>
                </PopoverBody>
                {/* <PopoverFooter>This is the footer</PopoverFooter> */}

                </PopoverContent>
                
            </Popover>
            </div>
            <div className="popover4">
            <Popover trigger="hover" >
            <PopoverTrigger colorScheme="white">
                <Button bgColor="white">Vitamine And Nutrients</Button>
            </PopoverTrigger>
                <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>Vitamin And Supplements</PopoverHeader>
                 {/* <PopoverCloseButton /> */}
                <PopoverBody>
                    <p>All Dieases</p>
                    <p>All Medicines</p>
                    <p>All Categories</p>
                </PopoverBody>
                {/* <PopoverFooter>This is the footer</PopoverFooter> */}

                </PopoverContent>
                
            </Popover>
            </div>
            <div className="popover5">
            <Popover trigger="hover" >
            <PopoverTrigger colorScheme="white">
                <Button bgColor="white">Vitamine And Nutrients</Button>
            </PopoverTrigger>
                <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>Vitamin And Supplements</PopoverHeader>
                 {/* <PopoverCloseButton /> */}
                <PopoverBody>
                    <p>All Dieases</p>
                    <p>All Medicines</p>
                    <p>All Categories</p>
                </PopoverBody>
                {/* <PopoverFooter>This is the footer</PopoverFooter> */}

                </PopoverContent>
                
            </Popover>
            </div>
            <div className="popover6">
            <Popover trigger="hover"   >
            <PopoverTrigger colorScheme="white">
                <Button bgColor="white">Vitamine</Button>
            </PopoverTrigger>
                <PopoverContent>
                <PopoverArrow />
                <PopoverHeader >Vitamin And Supplements</PopoverHeader>
                 {/* <PopoverCloseButton /> */}
                <PopoverBody>
                    <p>All Dieases</p>
                    <p>All Medicines</p>
                    <p>All Categories</p>
                </PopoverBody>
                {/* <PopoverFooter>This is the footer</PopoverFooter> */}

                </PopoverContent>
                
            </Popover>
            </div>
            <div className="popover7">
            <Popover trigger="hover" >
            <PopoverTrigger colorScheme="white">
                <Button bgColor="white">Vitamine And Nutrients</Button>
            </PopoverTrigger>
                <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>Vitamin And Supplements</PopoverHeader>
                 {/* <PopoverCloseButton /> */}
                <PopoverBody>
                    <p>All Dieases</p>
                    <p>All Medicines</p>
                    <p>All Categories</p>
                </PopoverBody>
                {/* <PopoverFooter>This is the footer</PopoverFooter> */}

                </PopoverContent>
                
            </Popover>
            </div>
            <div className="popover8">
            <Popover trigger="hover" >
            <PopoverTrigger colorScheme="white">
                <Button bgColor="white">Vitamine And Nutrients</Button>
            </PopoverTrigger>
                <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>Vitamin And Supplements</PopoverHeader>
                 {/* <PopoverCloseButton /> */}
                <PopoverBody>
                    <p>All Dieases</p>
                    <p>All Medicines</p>
                    <p>All Categories</p>
                </PopoverBody>
                {/* <PopoverFooter>This is the footer</PopoverFooter> */}

                </PopoverContent>
                
            </Popover>
            </div>
            <div className="popover9">
            <Popover trigger="hover" >
            <PopoverTrigger colorScheme="white">
                <Button bgColor="white">Vitamine And Nutrients</Button>
            </PopoverTrigger>
                <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>Vitamin And Supplements</PopoverHeader>
                 {/* <PopoverCloseButton /> */}
                <PopoverBody>
                    <p>All Dieases</p>
                    <p>All Medicines</p>
                    <p>All Categories</p>
                </PopoverBody>
                {/* <PopoverFooter>This is the footer</PopoverFooter> */}

                </PopoverContent>
                
            </Popover>
            </div>
        </div>
        <Divider orientation='horizontal' borderColor="lightgrey"/>
        </>
    );
};
export default Navbar;