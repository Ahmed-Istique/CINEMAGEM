import React from 'react';
import { RiUser3Fill } from "react-icons/ri";

export default function User() {
    return (
        <>
            <div className=''>
                <div className="w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full overflow-hidden cursor-pointer flex justify-center items-center">
                    {/* Replace image with SVG using inline styles */}
                    <RiUser3Fill className="fill-current text-white w-10 h-10" size={24} />
                </div>
            </div>
        </>
    );
}