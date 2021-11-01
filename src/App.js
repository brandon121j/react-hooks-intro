import {useState} from 'react';
import './App.css';

function App() {

  const [addOne, setAddOne] = useState(0)



  return (
    <div className="App">
      Starting Value: {addOne}
      <button onClick={() => setAddOne(addOne + 1)}>+</button>
      <button onClick={() => setAddOne(addOne - 1)}>-</button>
    </div>
  );
}

export default App;
