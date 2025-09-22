import React from 'react';

const GalleryItem = ({ photo, name, description }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-3">
      <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
        <div className="relative overflow-hidden">
          <img 
            src={photo} 
            alt={name} 
            className="w-full h-auto object-cover rounded-t-lg transition-transform duration-300" 
          />
          
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-4 
                          transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-sm md:text-base">{description}</p>
          </div>
        </div>
        
        <div className="text-center p-2">
          <p className="text-lg font-semibold">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;