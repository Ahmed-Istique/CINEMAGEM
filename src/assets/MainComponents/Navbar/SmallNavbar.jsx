import React from 'react'
import { HiMiniHome } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { MdConnectedTv } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

export default function SmallNavbar() {
    return (
        <div className='text-zinc-400 text-2xl fixed bottom-0 w-full bg-[#243642] h-20 flex justify-center items-center lg:hidden gap-14 cursor-pointer bg-opacity-70 backdrop-blur-2xl z-50'>
            <NavLink to="/">
                {(e) => {
                    return (
                        <span className={[e.isActive ? "text-zinc-100" : ""].join(" ")}>
                            <HiMiniHome />
                        </span>
                    );
                }}
            </NavLink>
            <NavLink to="/tvshows">
                {(e) => {
                    return (
                        <span className={[e.isActive ? "text-zinc-100" : ""].join(" ")}>
                            <MdConnectedTv />
                        </span>
                    );
                }}
            </NavLink>

            <NavLink to="/searchpage">
                {(e) => {
                    return (
                        <span className={[e.isActive ? "text-zinc-100" : ""].join(" ")}>
                            <FaSearch />
                        </span>
                    );
                }}
            </NavLink>
            <NavLink to="/user">
                {(e) => {
                    return (
                        <span className={[e.isActive ? "text-zinc-100" : ""].join(" ")}>
                            <FaCircleUser />
                        </span>
                    );
                }}
            </NavLink>




        </div>
    )
}
