import React, { useState, useEffect } from 'react';
import Card from './Card/Card';

export default function ExplorePages({ data, handleScroll, loading, mediaType }) {

  return (
    <div
    className="w-full lg:px-3 py-10 px-3 lg:mt-20 lg:mb-20 mt-12 overflow-hidden h-screen box-border"

    >
      {/* Inner container for cards */}
      <div
        className="flex flex-wrap lg:gap-10 gap-5 h-fit no-scrollbar justify-center"
        style={{
          overflowY: 'scroll',  // Allow vertical scroll
          height: '100%',
          width: '100%',  // Prevent horizontal overflow
          scrollbarWidth: 'none',  // For Firefox
          msOverflowStyle: 'none',  // For IE/Edge
        }}
        onScroll={handleScroll}
      >
        {data.map((item, index) => (
          <Card
            key={`${item.id}_card_${index}`}
            data={item}
            index={index + 1}
            Popular={true}
            media_type={mediaType}
          />
        ))}
      </div>

      {/* Loading indicator */}
      <div className="text-center py-4">
        {loading && <div className="text-white">Loading...</div>}
      </div>
    </div>
  );
}
