import React from 'react';

const SportsPage = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Sports Programs</h1>
      
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 border-b pb-2">Indoor Sports</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Chess */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-200 hover:scale-105">
            <img 
              src="https://placehold.co/600x400/e2ecf7/1d293e?text=Chess" 
              alt="Chess" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 text-[#0d796d]">Chess</h3>
              <p className="text-gray-700 mb-3">
                Develop strategic thinking and planning with our chess program. Open to players of all skill levels.
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Coach: Prof. Amit Patel</span>
                <span className="text-gray-600">Room: 203</span>
              </div>
            </div>
          </div>
          
          {/* Carrom */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-200 hover:scale-105">
            <img 
              src="https://placehold.co/600x400/e2ecf7/1d293e?text=Carrom" 
              alt="Carrom" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 text-[#0d796d]">Carrom</h3>
              <p className="text-gray-700 mb-3">
                Improve your precision and concentration with our carrom program. Regular tournaments organized.
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Coach: Dr. Suresh Kumar</span>
                <span className="text-gray-600">Room: 105</span>
              </div>
            </div>
          </div>
          
          {/* Table Tennis */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-200 hover:scale-105">
            <img 
              src="https://placehold.co/600x400/e2ecf7/1d293e?text=Table+Tennis" 
              alt="Table Tennis" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 text-[#0d796d]">Table Tennis</h3>
              <p className="text-gray-700 mb-3">
                Enhance your reflexes and hand-eye coordination. Both singles and doubles competitions available.
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Coach: Ms. Priya Singh</span>
                <span className="text-gray-600">Room: Sports Hall</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-3xl font-semibold mb-6 border-b pb-2">Outdoor Sports</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Cricket */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-200 hover:scale-105">
            <img 
              src="https://placehold.co/600x400/e2ecf7/1d293e?text=Cricket" 
              alt="Cricket" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 text-[#0d796d]">Cricket</h3>
              <p className="text-gray-700 mb-3">
                Join our cricket team to develop batting, bowling, and fielding skills. Regular practice sessions and matches.
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Coach: Mr. Rahul Sharma</span>
                <span className="text-gray-600">Location: Main Ground</span>
              </div>
            </div>
          </div>
          
          {/* Football */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-200 hover:scale-105">
            <img 
              src="https://placehold.co/600x400/e2ecf7/1d293e?text=Football" 
              alt="Football" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 text-[#0d796d]">Football</h3>
              <p className="text-gray-700 mb-3">
                Our football program focuses on technique, teamwork, and strategy. Competitive matches with other institutions.
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Coach: Mr. David Fernandes</span>
                <span className="text-gray-600">Location: Football Field</span>
              </div>
            </div>
          </div>
          
          {/* Volleyball */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-200 hover:scale-105">
            <img 
              src="https://placehold.co/600x400/e2ecf7/1d293e?text=Volleyball" 
              alt="Volleyball" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 text-[#0d796d]">Volleyball</h3>
              <p className="text-gray-700 mb-3">
                Develop your serving, passing, and spiking skills with our volleyball program. Both men's and women's teams.
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Coach: Ms. Neha Gupta</span>
                <span className="text-gray-600">Location: Volleyball Court</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsPage;
