import NavigationBar from './components/NavigationBar/NavigationBar';
import About from './components/About/About';
import Features from './components/Features/Features';
import Pricing from './components/Pricing/Pricing';
import Locations from './components/Location/Locations';
import Testimonials from './components/Testimonials/Testimonials';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';


function App() {
  return (
      <div className="App">
        <NavigationBar />
        <About />
        <Features />
        <Pricing />
        <Testimonials />
        <Locations />
        <Subscribe />
        <Footer />
      </div>
  );
}

export default App;
