const About = () => {
  return (
    <div className="px-4 py-3 w-full text-center text-info" style={{
      backgroundImage: "url('/assets/photos/parakram_logo.png')",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundAttachment: "fixed",
      position: "relative",
      color: "#fff",
      backgroundColor: "black",
      objectFit: "cover",
      paddingTop: "120px",
      height: "90vh",
    }}>
      <div className="container px-4 py-3" id="custom-cards">
        <h2 className="pb-2 border-b border-black text-red-600 font-bold p-3 rounded" 
            style={{backdropFilter: "blur(10px)", backgroundColor: "rgba(255, 255, 255, 0.1)"}}>
          What We Stand For
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-3">
          {/* Left Column */}
          <div className="h-full">
            <div className="rounded-xl shadow-lg h-full overflow-hidden" 
                 style={{backgroundColor: "rgba(240, 239, 239, 0.9)"}}>
              <div className="flex flex-col h-full p-4 pb-2 text-white">
                <h1 className="pt-1 mt-2 mb-3 text-4xl font-bold text-[#00BFFF]">About Us</h1>
                <p className="mb-3 text-gray-600 font-bold">
                  Parakram Club is a vibrant hub for sports enthusiasts, offering a range of indoor and outdoor activities to promote fitness, teamwork, and sportsmanship. We unite individuals to participate in friendly yet competitive events, fostering unity, determination, and excellence. Our goal is to nurture talent and create champions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="h-full hidden md:block">
            <div className="rounded-xl shadow-lg h-full overflow-hidden" 
                 style={{backgroundColor: "rgba(240, 239, 239, 0.9)"}}>
              <div className="flex flex-col h-full p-5 pb-2 text-white">
                <h1 className="pt-1 mt-2 mb-3 text-4xl font-bold text-[#00BFFF]">Vision</h1>
                <p className="mb-3 text-gray-600 font-bold">
                  Parakram Club inspires individuals to achieve their potential through sports,
                  fostering excellence, teamwork, and discipline. We aim to become a leading club known for developing
                  champions and promoting a healthy lifestyle. Our mission is to organize inclusive events, provide a
                  platform for athletes, encourage fair play, and promote overall well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
