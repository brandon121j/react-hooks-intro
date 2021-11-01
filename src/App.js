import { useState, useEffect } from 'react';
import './App.css';

function App () {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="App">
      {toggle ? <MouseMove/> : "Nothing to see here"}
      <button onClick={() => setToggle((prevState) => 
        setToggle(!prevState))}>
          Toggle
        </button>
    </div>
  )
}

function MouseMove() {

  const [mouseX, setMouseX] = useState("0")
  const [mouseY, setMouseY] = useState("0")

  useEffect(() => {
    console.log("Component Did Mount");
    document.addEventListener("mousemove",
    handleMouseMove);

    return() => {
      console.log("Component Will Unmount")
      document.removeEventListener("mouseover", handleMouseMove)
    }
  }, []);

  function handleMouseMove(e) {
    setMouseY(e.clientY);
    setMouseX(e.clientX);
  }

	return (
		<div>
    <h1>Mouse Moving</h1>
      <div>Mouse X Position: {mouseX}</div>
      <div>Mouse Y Position: {mouseY}</div>
    </div>

  );
}

export default App;

/*  

  useEffect is ComponentDidMount + ComponentDidUpdate + ComponentWilllUnmount

*/