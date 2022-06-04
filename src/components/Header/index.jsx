import React from 'react'

import './index.css'
import logo from '../../assets/logo.svg'
import ghLogo from '../../assets/github-logo.svg'

export const Header = () => (
  <header className='header'>
    <img src={logo} className='logo' alt='logo' />
    <div className='title'>CS2115 Dots & Boxes Game</div>
    <a href='https://github.com/marklai1998/cs2115-dots-and-boxes-game'>
      <img src={ghLogo} className='ghLogo' alt='git-hub-logo' />
    </a>
  </header>
)
