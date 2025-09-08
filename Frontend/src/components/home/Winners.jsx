const Winners = () => {
  return (
    <div className="flex flex-col md:flex-row w-full my-6 md:my-8 ps-0 md:ps-8 justify-between">
      <div className="bg-body-tertiary me-0 md:me-8 pt-3 px-3 md:pt-12 md:px-12 text-center overflow-hidden p-3 border-2 border-black bg-[#ff004f] mb-4 md:mb-0">
        <div className="my-3 p-3">
          <h2 className="text-2xl font-['Roboto_Slab'] font-semibold">
            Department of Year 2024 <i className="fa-solid fa-trophy"></i>
          </h2>
          <p className="text-lg">And an even wittier subheading.</p>
        </div>
        <div className="bg-white shadow-sm mx-auto relative transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl border border-black" 
             style={{width: '80%', height: '300px', borderRadius: '0 26px 0 26px', overflow: 'hidden'}}>
          <img 
            src="/assets/photos/background.jpeg" 
            alt="Winners" 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
      
      <div className="bg-body-tertiary me-0 md:me-8 pt-3 px-3 md:pt-12 md:px-12 text-center overflow-hidden p-3 border-2 border-black mb-4 md:mb-0">
        <div className="my-3 p-3">
          <h2 className="text-2xl font-['Roboto_Slab'] font-semibold">
            Department of Year 2023 <i className="fa-solid fa-trophy"></i>
          </h2>
          <p className="text-lg">And an even wittier subheading.</p>
        </div>
        <div className="bg-white shadow-sm mx-auto relative transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl border border-black" 
             style={{width: '80%', height: '300px', borderRadius: '0 26px 0 26px', overflow: 'hidden'}}>
          <img 
            src="/uploads/d.jpg" 
            alt="Winners" 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
      
      <div className="bg-body-tertiary me-0 md:me-8 pt-3 px-3 md:pt-12 md:px-12 text-center overflow-hidden p-3 border-2 border-black">
        <div className="my-3 p-3">
          <h2 className="text-2xl font-['Roboto_Slab'] font-semibold">
            Department of Year 2022 <i className="fa-solid fa-trophy"></i>
          </h2>
          <p className="text-lg">And an even wittier subheading.</p>
        </div>
        <div className="bg-white shadow-sm mx-auto relative transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl border border-black" 
             style={{width: '80%', height: '300px', borderRadius: '0 26px 0 26px', overflow: 'hidden'}}>
          <img 
            src="/uploads/f.jpg" 
            alt="Winners" 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default Winners;
