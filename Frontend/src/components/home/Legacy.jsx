const Legacy = () => {
  return (
    <section>
      <div className="container mx-auto px-4 border-t border-black bg-[#e2ecf7] shadow-[0_0_100px_#e2ecf7] w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center">
          <div className="py-12">
            <h3 className="text-7xl font-medium pb-2" style={{fontWeight: 650}}>
              <div><span>6</span>+</div>
            </h3>
            <p className="text-black">Events organized</p>
          </div>
          
          <div className="py-12">
            <h3 className="text-7xl font-medium pb-2" style={{fontWeight: 650}}>
              <div><span>29</span>+</div>
            </h3>
            <p className="text-black">Participants up to now</p>
          </div>
          
          <div className="py-12">
            <h3 className="text-7xl font-medium pb-2" style={{fontWeight: 650}}>
              <div><span>56</span>+</div>
            </h3>
            <p className="text-black">Members of Parakram</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
