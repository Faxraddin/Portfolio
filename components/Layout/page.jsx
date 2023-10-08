'use client'
import { motion } from "framer-motion";

import { React,useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Layout = ({ children }) => {
    useEffect(()=>{
        AOS.init({
          duration:1300,
          once:false
        })
    },[])
    return(
        <motion.div
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 300, opacity: 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
            }}
        >
            {children}
        </motion.div>
    )
};
export default Layout;