import { useState } from 'react'

import Header from './Components/Header'
import AddTask from './Components/AddTask'
import ShowTask from './Components/ShowTask'

import './App.css'

function App() {

  const [tasklist,setTasklist] = useState([]);

  return (
    <>
      <Header/>
      <AddTask tasklist={tasklist} setTasklist={setTasklist}/>
      <ShowTask/>
    </>
  )
}

export default App
