'use client'
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import Layout from "../Layout/page";
import { usePathname } from "next/navigation";

import {BsFacebook} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai'
import {RxHamburgerMenu} from 'react-icons/rx';

const Navbar = () => {
  const pathname = usePathname();

  const [btn,setbtn] = useState(false);
  const handleBtn = () => {
    setbtn(!btn)
  };

  useEffect(()=>{
    const handleResize = () => {
      if(window.innerWidth >= 1024){
        setbtn(false)
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])
  return (
    <Layout>
      <nav className="fixed-top w-full bg-black p-1.8 flex items-center justify-center text-center">
          <div className="w-[85%] flex items-center justify-between">

            <div>
              <Link href={'/'}><Image className="hover:brightness-50 md:w-[60px] transition duration-500" src={'/1.png'} width={80} height={80}/></Link>
            </div>
            <div className={`${btn ? 'block absolute z-20 top-20 left-0 bg-zinc-900 w-full' : 'flex lg:hidden'} items-center justify-between gap-20`} >
              <div className={`flex ${btn ? 'flex-col gap-[1px]':'flex-row'} items-center justify-between gap-20`}>
                <Link href="/about" className={`${pathname === "/about" ? "text-slate-600 " : "text-white hover:text-slate-600 route lg:text-2xl"} ${btn?'lg:text-2xl border border-neutral-950 w-full p-7':''}`}>about</Link>
                <Link className={`${pathname === "/portfolio" ? "text-slate-600 " : 'text-white hover:text-slate-600 route lg:text-2xl'} ${btn?'lg:text-2xl border border-neutral-950 w-full p-7':''}`} href={'/portfolio'}>portfolio</Link>
                <Link className={`${pathname === "/blog" ? "text-slate-600 " : "text-white hover:text-slate-600 route lg:text-2xl"} ${btn?'lg:text-2xl border border-neutral-950 w-full p-7':''}`} href={'/blog'}>blog</Link>
                <Link className={`${pathname === "/contact" ? "text-slate-600 " : "text-white hover:text-slate-600 route lg:text-2xl"} ${btn?'lg:text-2xl border border-neutral-950 w-full p-7':''}`} href={'/contact'}>contact</Link>
              </div>
              <div className={`bg-white ${btn ? 'w-[110px] relative  left-1/2 transform -translate-x-[50%] -translate-y-[6%] ':''} flex gap-5 p-3 rounded-2xl`}>
                <BsFacebook className="text-2xl lg:text-3xl hover:brightness-50 transition duration-500"/>
                <AiFillInstagram className="text-2xl lg:text-3xl hover:brightness-50 transition duration-500"/>
              </div>
            </div>
            <div className="hidden lg:flex">
              <button
                onClick={handleBtn}
                className="text-white hover:text-slate-600 route"
              >
                <RxHamburgerMenu className="text-2xl" />
              </button>
          </div>

          </div>
      </nav>
    </Layout>
  )
}

export default Navbar;