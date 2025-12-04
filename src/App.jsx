
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import RealWorld from "./components/RealWorld";
import Leading from './components/Leading';
import Brainstorming from './components/Brainstorming';
import Footer from './components/Footer';
import Card from "./components/Card";
import './App.css';


function App() {
  return(
    <div className="main">
      <Navbar/>
      <Hero/>
      <RealWorld/>
      <Leading/>
      <Brainstorming/>
      <Card/>
      <Footer/>
    </div>
  );
}
export default App;


