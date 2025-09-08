const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden" id="about">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/assets/photos/b2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white shadow-lg shadow-black/30">
          Sport Club
        </h1>
        <p className="text-xl md:text-2xl text-white shadow-md">
          Sport Club: Where Passion Meets Play!
        </p>
        <button className="mt-8 px-6 py-3 bg-[#00BFFF] hover:bg-[#0099CC] text-white font-bold rounded-full transition-colors duration-300">
          Join Us Today
        </button>
      </div>
    </div>
  );
};

export default Hero;
