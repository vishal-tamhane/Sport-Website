import Hero from './home/Hero';
import About from './home/About';
import UpcomingEvents from './home/UpcomingEvents';
import Winners from './home/Winners';
import Legacy from './home/Legacy';
import ContactUs from './home/ContactUs';

const HomePage = () => {
  return (
    <div className="box" id="heading">
      <Hero />
      <About />
      
      <h2 className="subtitle text-center pt-10">Historical Winners</h2>
      <Winners />
      
      <Legacy />
      <ContactUs />
    </div>
  );
};

export default HomePage;
