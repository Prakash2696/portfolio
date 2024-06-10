
import './App.css';
import Header from './components/Header';
import Myhero from './components/Myhero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Myhero/>
      <About/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer></Footer>
    </div>
  );
}

export default App;
