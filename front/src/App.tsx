import { useState } from 'react'
import React, { Component } from 'react'
import {IngredientsList} from './components/ingredientsList'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <div className="App">
      <IngredientsList title="a"/>
    </div>
  )
}

export default App
