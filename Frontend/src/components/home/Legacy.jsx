import { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ targetNumber, className }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        let start = 0;
        const duration = 1500; // animation duration in ms
        const step = timestamp => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          setCount(Math.floor(progress * targetNumber));
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      }
    }, { threshold: 0.1 });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [targetNumber]);

  return (
    <span ref={counterRef} className={className}>
      {count} +
    </span>
  );
};

const Legacy = () => {
  return (
    <section>
      <div className="mt-4 container mx-auto px-4 border-t-4 border-black bg-[#e2ecf7] shadow-[0_0_150px_#e2ecf7] w-full py-12 md:py-16 lg:py-24">
        <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center gap-8">
          <div className="py-8 md:py-12 lg:py-16">
            <h3 className="text-7xl md:text-7xl lg:text-9xl font-extrabold pb-2 md:pb-4 font-['Roboto_Slab',_serif]">
              <AnimatedCounter 
                targetNumber={6} 
                className="text-2xl font-bold md:text-3xl lg:text-4xl text-black" 
              />
            </h3>
            <p className="text-lg md:text-xl lg:text-2xl  text-black font-['Roboto_Slab',_serif]">Events organized</p>
          </div>
          
          <div className="py-8 md:py-12 lg:py-16">
            <h3 className="text-7xl md:text-8xl lg:text-10xl font-extrabold pb-2 md:pb-4 font-['Roboto_Slab',_serif]">
              <AnimatedCounter 
                targetNumber={29} 
                className="text-2xl font-bold md:text-3xl lg:text-4xl text-black" 
              />
            </h3>
            <p className="text-lg md:text-xl lg:text-2xl  text-black font-['Roboto_Slab',_serif]">Participants up to now</p>
          </div>
          
          <div className="py-8 md:py-12 lg:py-16 sm:col-span-2 lg:col-span-1">
            <h3 className="text-7xl md:text-8xl lg:text-9xl font-extrabold pb-2 md:pb-4 font-['Roboto_Slab',_serif]">
              <AnimatedCounter 
                targetNumber={56} 
                className="text-2xl font-bold md:text-3xl lg:text-4xl text-black" 
              />
            </h3>
            <p className="text-lg md:text-xl lg:text-2xl  text-black font-['Roboto_Slab',_serif]">Members of Parakram</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy

