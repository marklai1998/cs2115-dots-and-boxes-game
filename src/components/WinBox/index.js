import React from 'react'

import './index.css'
import { player } from '../../constants/playerMap'

export const WinBox = React.memo(({ winner, show }) => (
  <div className={show ? 'win-box show' : 'win-box'}>
    {winner === player.B ? 'Blue' : 'Red'} Won!
  </div>
))
