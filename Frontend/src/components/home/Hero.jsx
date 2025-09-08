const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden" id="about">
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/assets/photos/b2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
        <h1 className="text-5xl subtitle text-[#00BFFF] shadow-lg shadow-black/30">Sport Club</h1>
        <p className="text-2xl text-white shadow-md">Sport Club: Where Passion Meets Play!</p>
      </div>
    </div>
  );
};

export default Hero;
