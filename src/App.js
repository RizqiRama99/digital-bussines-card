import './App.css';
import Info from './components/Info';
import About from './components/About';
import Interest from './components/Interest';
import Footer from './components/Footer';

function App() {
  return (
    <div className='card'>
      <Info />
      <div className='container'>
        <About/>
        <Interest/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
