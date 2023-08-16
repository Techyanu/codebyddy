import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Midsec from './Components/Midsec';
import HomePage from './Components/HomaPage';
import Footer from './Components/Fotter';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Main />
      <Midsec />
      <Footer />

    </div>
  );
}

export default App;
