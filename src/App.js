
import './App.css';
import Analysis from './components/Analysis';
import Dashboard from './components/Dashboard';
import Rating from './components/Rating';
import Reviews from './components/Reviews';
import Visitors from './components/Visitors';


function App() {
  return (
    <div className="App">
      <Dashboard />
      <Rating />
      <Reviews />
      <Analysis />
      <Visitors />
     
    </div>
  );
}

export default App;
