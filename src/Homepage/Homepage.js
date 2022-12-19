import React from 'react'
import { Box, Button, TextField } from "@mui/material";
import "./Homepage.css"
import Navbar from '../Navbar/Navbar'
import SteinsGateEpic from "../Images/Epicest.webp"

export default function Homepage() {
  return (
    <div className='home-div'>
        <Navbar></Navbar>
        {/* <div className='homeback-div'> */}
            <div className='img-div'>
                <img src={SteinsGateEpic} alt="" className='epicGif' />
                <p className='quote'>"ElPSY KONGROO" <br></br> <span className='author'>-Hououin Kyouma</span></p>
                <blockquote className='quote'></blockquote>
            </div>

            <div className='p-div'>
                <h1 className='heading'> Project Round;Table</h1>
                <p className='p1'>Project Round;Table is a chatroom webapp that has VOIP and messaging features. The main goal of Project Round;Table is to enable Steins;Gate fans and Labmems accros the world to connect and collaberate on projects that would benfit the Future Gadget Laboratory. There is also a Merch store C; </p>

                <h1 className='heading'> Disclaimer</h1>
                <p className='p1'> This is an unofficial webapp created as a passion project. All rights to Steins;Gate are owned by Mages, 5pb.,Funimation and White fox </p>

            </div>

        {/* </div> */}
    </div>
  )
}
