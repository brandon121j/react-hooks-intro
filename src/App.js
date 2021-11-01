import {useState} from 'react';
import './App.css';

function App() {

  const [addOne, setAddOne] = useState(0);
  const [firstName, setFirstName] = useState("")



  return (
    <div className="App">
      Starting Value: {addOne}
      <button onClick={() => setAddOne(addOne + 1)}>+</button>
      <button onClick={() => setAddOne(addOne - 1)}>-</button>
      <hr/>
      <input name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
      <button onClick={() => console.log(firstName)}>Submit</button>
    </div>
  );
}

export default App;
