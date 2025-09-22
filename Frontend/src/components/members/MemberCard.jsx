import React from 'react';

const MemberCard = ({ member }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-700">
      <div className="p-6 border border-gray-200 rounded-3xl">
        <div className="flex justify-center mb-6">
          {member.image_url ? (
            <img
              className="w-[180px] h-[180px] rounded-full border-2 border-white transition-all duration-300 transform hover:scale-95 hover:shadow-lg hover:shadow-gray-600"
              src={member.image_url}
              alt={member.name}
            />
          ) : (
            <svg
              className="w-[180px] h-[180px] rounded-full border-2 border-white"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="currentColor"></rect>
            </svg>
          )}
        </div>

        <h2 className="font-normal text-center text-xl sm:text-2xl md:text-3xl mb-1">{member.name}</h2>
        <p className="text-center text-gray-400 text-sm sm:text-base md:text-lg mb-4">{member.position}</p>
        <p className="text-center">
          {member.instagram_url && (
            <a href={member.instagram_url} target="_blank" rel="noopener noreferrer" className="inline-block mx-2 text-white transition-all duration-300 transform hover:scale-125 hover:text-blue-500">
              <i className="fa-brands fa-square-instagram text-2xl"></i>
            </a>
          )}
          {member.email && (
            <a href={`mailto:${member.email}`} className="inline-block mx-2 text-white transition-all duration-300 transform hover:scale-125 hover:text-blue-500">
              <i className="fa-solid fa-envelope text-2xl"></i>
            </a>
          )}
        </p>
      </div>
    </div>
  );
};

export default MemberCard;