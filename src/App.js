import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Decore from './components/Decore/Decore';
import Services from './components/Services/Services';
import Destinations from './components/Destinations/Destinations';
import Reservation from './components/Reservation/Reservation';
import Testimonials from './components/Testimonials/Testimonials';
import Brands from './components/Brands/Brands';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Banner/>
        <Decore/>
        <Services/>
        <Destinations/>
        <Reservation/>
        <Testimonials/>
        <Brands/>
        <Subscribe/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
