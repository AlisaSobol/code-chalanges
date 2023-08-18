import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('');


  return (
    <div className="App">
      <div 
        className="color-box"
        style={{backgroundColor: color}}
      >{ color ? color : 'empty value' }</div>
      <input 
        autoFocus
        type="text"
        value={color}
        placeholder="Add color name"
        onChange={(e) => setColor(e.target.value)}
      /> 
    </div>
  );
}

export default App;
