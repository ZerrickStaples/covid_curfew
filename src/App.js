import logo from './covidparticle.png';
import moment from 'moment';
import './App.css';
import Clock from './Date';

function App() {
  return (
    <body>
      <img className = "covidLogo" src={logo}></img>
      <div className="App">
        <Clock/>
      </div>
    </body>
  );
}

export default App;