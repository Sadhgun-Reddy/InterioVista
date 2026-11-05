import AboutSection from '../components/AboutSection';
import VibrerFeatures from '../components/Features';
import HeroSection from '../components/HeroSection';
import InteriorDesign from '../components/InteriorDesigning';
import OurProcess from '../components/OurProcess';
import ProductCategories from '../components/ProductCategories';

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <ProductCategories/>
      <InteriorDesign/>
      <AboutSection/>
      <OurProcess/>
      <VibrerFeatures/>
    </div>
  );
};

export default Home;
