import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import './CustomeStyle.css';
import AOS from "aos";
import "aos/dist/aos.css";
 
const Root = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div>
           <Header/>
           <Outlet/>
           <Footer/>
        </div>
    );
};

export default Root;