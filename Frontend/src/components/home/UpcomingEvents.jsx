const UpcomingEvents = () => {
  return (
    <section id="upcoming-events" className="bg-[#D9EAFD] py-10 px-5 mt-12">
      <div className="container mx-auto px-5">
        <h2 className="subtitle text-center text-black">Upcoming</h2>
        <h2 className="text-4xl text-center text-black">ℙ𝕒𝕣𝕒𝕜𝕣𝕒𝕞 𝟚𝟘𝟚𝟝</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          <div className="bg-[#BCCCDC] rounded-lg p-5 shadow-md transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-2xl text-[#0d796d]">Indoor Games</h3>
            <p className="text-black mb-2.5"><strong>Date:</strong> 2025-02-15</p>
            <p className="text-black mb-2.5"><strong>Location:</strong> Parakram Stadium</p>
            <p className="text-black">Loading...</p>
          </div>
          
          <div className="bg-[#BCCCDC] rounded-lg p-5 shadow-md transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-2xl text-[#0d796d]">Outdoor Games</h3>
            <p className="text-black mb-2.5"><strong>Date:</strong> 2025-03-10</p>
            <p className="text-black mb-2.5"><strong>Location:</strong> Parakram Club Hall</p>
            <p className="text-black">Coming Soon...</p>
          </div>
          
          <div className="bg-[#BCCCDC] rounded-lg p-5 shadow-md transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-2xl text-[#0d796d]">Table Tennis Championship</h3>
            <p className="text-black mb-2.5"><strong>Date:</strong> 2025-03-10</p>
            <p className="text-black mb-2.5"><strong>Location:</strong> Parakram Club Hall</p>
            <p className="text-black">Coming Soon...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
