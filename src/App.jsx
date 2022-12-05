import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <main>
      <h1>Animal farm</h1>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => console.log(e.target.value)}
      />
    </main>
  )
}

export default App
