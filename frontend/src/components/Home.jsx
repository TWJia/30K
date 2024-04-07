import React from 'react'
import { useState } from 'react';
import Navbar from "./Navbar";
import HomeSearchBar from './HomeSearchBar';
import { grey } from '@mui/material/colors';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import OpenAI from './Bot/OpenAI';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setToggle(false);
  };

  return (
    <div>
      <Navbar />
      <HomeSearchBar />
      <ContactSupportIcon 
        sx={{ color: grey[500], fontSize: "88px" }}
        onClick={() => navigate('/OpenAI')}
      />
    </div>
  )
}

export default Home