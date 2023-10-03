import Image from "next/image";
import Link from "next/link";

import {BsFacebook} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai'

const Navbar = () => {
  return (
      <nav className="fixed-top w-full bg-black p-1.8 flex items-center justify-center text-center">
          <div className="w-3/4 flex items-center justify-between">

            <div>
              <Image className="hover:brightness-50 transition duration-500" src={'/1.png'} width={80} height={80}/>
            </div>
            <div className="flex items-center justify-between gap-20">
              <Link className="text-white hover:text-slate-600 route" href={'/about'}>about</Link>
              <Link className="text-white hover:text-slate-600 route" href={'/portfolio'}>portfolio</Link>
              <Link className="text-white hover:text-slate-600 route" href={'/blog'}>blog</Link>
              <Link className="text-white hover:text-slate-600 route" href={'/contact'}>contact</Link>
            </div>
            <div className="bg-white flex gap-5 p-3 rounded-2xl">
              <BsFacebook className="text-2xl hover:brightness-50 transition duration-500"/>
              <AiFillInstagram className="text-2xl hover:brightness-50 transition duration-500"/>
            </div>

          </div>
      </nav>
  )
}

export default Navbar;
