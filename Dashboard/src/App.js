import './App.css';
import AverageRating from './components/AverageRating';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import SentAnalysis from './components/SentAnalysis';
import WebsiteVistors from './components/WebsiteVisitors';


function App() {
  return (
    <div className = "app">
       <Menu/>
  
    
      <Reviews number='1,281'/>
  
    <AverageRating number='4.6'/>
      <SentAnalysis number='960 122 321'/>
      <WebsiteVistors number='821'/>
  
 
    </div>
  );
}

export default App;
