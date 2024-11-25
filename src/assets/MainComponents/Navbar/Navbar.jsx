import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'
import User from '../../../Components/UserAll/User'
import { navigation } from "../../../Constrain/index"

export default function Navbar() {
    const [showMenu, setShowMenu] = useState("showMenu");
    const toggleMenu = () => {
        setShowMenu(!showMenu);
        console.log("toggleMenu");
    }
    return (
        // className='fixed top-0 left-0 w-full transition-transform duration-300 z-50 '
        <>
            <header className='fixed top-0 left-0 w-full z-50 shadow-xl '>
                <div className='lg:flex text-zinc-400 bg-[#243642] bg-opacity-90 justify-between items-center lg:h-full h-20 lg:p-9 p-4 '>
                    <div className='text-center'>
                        <NavLink to="/">
                            {(e) => {
                                return (
                                    <span className={[e.isActive ? "text-zinc-100" : ""].join(" ")}>
                                        <div className=' text-2xl lg:text-4xl font-bold text-zinc-100'> <img src="../" alt="" />  CINEMAGEM</div>
                                    </span>
                                );
                            }}

                        </NavLink>
                    </div>
                    <div className='text-xl hidden lg:w-1/3 lg:flex items-center justify-between lg:text-2xl'>
                        {navigation.map((item) => (
                            <NavLink key={item.id} to={item.url}>
                                {
                                    (e) => {
                                        return (
                                            <span className={[e.isActive ? "text-zinc-100" : ""].join(" ")}>
                                                <span className="p-4 transition-colors uppercase z-2 hover:text-color-1 ">
                                                    {item.title}
                                                </span>
                                            </span>
                                        );
                                    }
                                }

                            </NavLink>
                        ))}
                    </div>
                    <div className='hidden lg:flex items-center lg:gap-10'>
                        <SearchBar></SearchBar>
                        <NavLink to="/user">
                            <User></User>
                        </NavLink>

                    </div>
                </div>

            </header>
        </>
    )
}
