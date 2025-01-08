import AboutSection from './components/AboutSection';
import VibrerFeatures from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import InteriorDesign from './components/InteriorDesigning';
import OurProcess from './components/OurProcess';
import ProductCategories from './components/ProductCategories';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <HeroSection/>
      <ProductCategories/>
      <InteriorDesign/>
      <AboutSection/>
      <OurProcess/>
      <VibrerFeatures/>
      <Footer/>
    </div>
  );
};

export default App;