import React from 'react';
import ReloaderImg from "../reUseLoader/TVloading.gif";

export default function Reloader() {
    return (
        <div className='bg-[#F5F5F7] w-32 lg:w-60 lg:h-80 h-60 flex justify-center items-center'>
            <img className='w-20 lg:w-32' src={ReloaderImg} alt="TV Loading" />
        </div>
    );
}