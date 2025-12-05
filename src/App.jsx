
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import RealWorld from "./components/RealWorld";
import Leading from './components/Leading';
import Brainstorming from './components/Brainstorming';
import Footer from './components/Footer';
import './App.css';


function App() {
  return(
    <div className="main">
      <Navbar/>
      <Hero/>
      <RealWorld/>
      <Leading/>
      <Brainstorming/>
      <Footer/>
    </div>
  );
}
export default App;


