import React from 'react';
import { MdOutlineCancel } from "react-icons/md";

export default function PlayVideo({ data, close }) {
  return (
    <section className='p-5 fixed bg-neutral-700 top-0 right-0 left-0 bottom-0 z-50 bg-opacity-50 flex justify-center items-center'>
      <div className='bg-black w-full lg:h-[60vh] h-[30vh] aspect-video lg:max-w-screen-xl max-w-screen-md rounded-xl overflow-hidden'>
        <iframe
          key={data?.id || 'video-frame'} // Use a unique key based on the data or fallback
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        ></iframe>
        <button
          onClick={close}
          className='absolute z-10 top-52 left-3/4 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-14 h-14 flex justify-center items-center '>
          <MdOutlineCancel className='w-8 h-8 ' />
        </button>
      </div>
    </section>
  );
}
