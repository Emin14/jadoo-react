import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Decore from '../Decore/Decore';
import Services from '../Services/Services';
import Destinations from '../Destinations/Destinations';
import Reservation from '../Reservation/Reservation';
import Testimonials from '../Testimonials/Testimonials';
import Brands from '../Brands/Brands';
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Banner />
        <Decore />
        <Services />
        <Destinations />
        <Reservation />
        <Testimonials />
        <Brands />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
