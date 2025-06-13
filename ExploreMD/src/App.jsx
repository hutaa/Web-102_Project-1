import React from 'react'
import './App.css';
import Events from './components/Events'

const App = () => {

  return (
    <div className="App">
      <header className="hero">
        <h1>ExploreMD</h1>
        <h2>Discover Maryland, one spot at a time</h2>
      </header>
      <Events />
    </div>
  )
}

export default App