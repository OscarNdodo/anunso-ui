import React, {  } from "react";

import { SiObsidian } from "react-icons/si";
import { RiMenu4Fill } from "react-icons/ri";
import { IoNotifications, IoSearchOutline } from "react-icons/io5";


import { Link } from "react-router-dom";

const img =  "/assets/images/user.png";

const Header = ({ toggle, showMenu }) => {


    return (
        <header className="w-full bg-black opacity-90 text-white flex items-center justify-between PoppinsRegular p-5 border-b border-gray-800">

            <h1 className="flex items-center h-10">
                <button
                onClick={toggle}
                className={`bg-gray-9s00 p-1.5 rounded-sm text-2xl hover:scale-95 hover:opacity-95 duration-300 ease-in-out ${showMenu ? "rotate-0" : "rotate-90"}`}>
                    <RiMenu4Fill  />
                </button>
                <Link to="/"  className="text-2xl uppercase mulish-black font-bold">anunso</Link>
            </h1>

            <form action="#" className="min-w-6/12 flex items-center py-1 justify-between px-5 bg-grays-950 border border-gray-900 opacity-80 rounded hover:opacity-90 duration-300 ease-in-out">
                <button type="submit" className="text-xl font-extrathin text-gray-300"><IoSearchOutline /></button>
                <input type="text" className="bg-black text-gray-100 font-thin px-4 w-96 py-2 text-base outline-none focus:bg-gray-800/30 rounded-md  mx-2" placeholder="Busque pelo nome do curso..." />
                <label htmlFor="search" className="text-base font-extrathin text-gray-500">Ctl+/</label>
            </form>


            <ul className="flex items-center justify-between">
                <li className="px-3">
                    <a href="#" className=" border border-gray-900 flex items-start justify-center h-10 py-2 px-4 font-bold text-purple-600 rounded hover:scale-95 hover:opacity-95 duration-300 ease-in-out">
                        <span className="text-2xl bg-gradient-to-r animate-pulse from-green-500 via-purple-300 to-purple-600 bg-clip-text"><SiObsidian /></span>
                        <span className="font-extrabold  text-lg   font-mono">04</span>
                    </a>
                </li>
                <li className="px-3"><a href="#" className="border border-gray-900 h-10 flex py-2 px-4 text-xl rounded hover:scale-95 hover:opacity-95 duration-300 ease-in-out">
                    <IoNotifications />
                    <span className="h-2.5 w-2.5 rounded-3xl bg-green-500 relative"></span>
                </a></li>
                <li className="pl-3">

                    <img
                        alt="tania andrew"
                        src={img}
                        className="relative inline-block object-cover object-center w-10 h-10 rounded-full cursor-pointer"

                    />


                </li>
            </ul>


   

        </header>
    );
}

export default Header;