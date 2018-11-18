import React from 'react'
import { Game } from './containers/Game'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
export const App = React.memo(() => (
  <div className='app'>
    <Header />
    <Game />
    <Footer />
  </div>
))
