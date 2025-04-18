import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import "./app.css";
import Tasklist from './components/Tasklist';

function App() {
  // State practice second example
  return (
    <div className="App">
      <Header />
      <Tasklist />
      <Footer />
    </div>
  )

  /* State Practice first example

  const [count, setCount]=useState(0);


  function handleAdd() {
    setCount(count+1);
  }
  function handleSub() {
    setCount(count-1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div className="App">
      <div className="box">
        <p>{count}</p>
        <button onClick={handleSub} className="sub">SUB</button>
        <button onClick={handleAdd} className="add">ADD</button>
        <button onClick={handleReset} className="reset">RESET</button>
      </div>
    </div>
  ) */


}

export default App