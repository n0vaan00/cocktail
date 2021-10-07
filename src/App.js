import './App.css';
import Drink from './Drink';

function App() {
  function tryNext() {
    window.location.reload(false);
  }

  return (
    
    <div style={{margin:50}}>
      <h1>Drink for today</h1>
      <h4>Don't like it?</h4>
      <button onClick={tryNext}>Try next</button>
      <Drink />
      
    </div>
  );
  
}

export default App;
