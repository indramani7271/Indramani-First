import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Card from './Component/Card'
import Counter from './Component/Counter'

function App() {
 const student = [
  {name : "apple", age : 12 } ,{name : "apple", age : 12 }
 ]

  return (
    <div>
      {/* <Navbar /> */}
      {/* <Card name = "mango" age = {7} /> */}
      {/* <Card /> */}
      {/* <Card /> */}
      {/* <Footer /> */}
      <Counter />

      
    </div>
     
  )
}

export default App
