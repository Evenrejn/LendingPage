import './App.css';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Contact from './components/contact/Contact';
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
