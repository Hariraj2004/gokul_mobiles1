import Hero from '../components/Hero';
import About from '../components/About';
import Brands from '../components/Brands';
import Products from '../components/Products';
import WhyChooseUs from '../components/WhyChooseUs';
import Reviews from '../components/Reviews';
import Gallery from '../components/Gallery';
import LocationMap from '../components/LocationMap';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <Brands />
      <About />
      <Products />
      <WhyChooseUs />
      <Gallery />
      <Reviews />
      <LocationMap />
      <Contact />
    </main>
  );
};

export default Home;
