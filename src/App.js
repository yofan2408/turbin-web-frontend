import React from "react";
import Footer from "./components/Parts/Footer";
import Header from "./components/Parts/Header";
import Beranda from "./components/Layout/Beranda";
import Artikel from "./components/Layout/Artikel";
import Donasi from "./components/Layout/Donasi";
import Lokasi from "./components/Layout/Lokasi";
import Monitoring from "./components/Layout/Monitoring";
import Box from '@mui/material/Box';
import Layout from './components/Dashboard/Layout/Layout'

const App = () => {
  const isAdmin = true;

  return (
    <Box>
      {isAdmin ? <React.Fragment>
        <Header/>
        <Beranda/>
        <Lokasi/>
        <Monitoring/>
        {/* <Artikel/> */}
        <Donasi/>
        <Footer/>
      </React.Fragment> : <Layout/>}
    </Box>
  );
}

export default App;
