import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Decore from './components/Decore/Decore';
import Services from './components/Services/Services';
import Destinations from './components/Destinations/Destinations';
import Reservation from './components/Reservation/Reservation';

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
      </main>
    </div>
  );
}

export default App;
