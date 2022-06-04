import React from 'react'

import './index.css'

export const ScoreBoard = React.memo(({ B, R, reset }) => (
  <div className='score-board'>
    <span className='score B'>{B}</span>
    <button type='button' className='reset' onClick={reset}>
      <i className='fas fa-redo-alt' />
    </button>
    <span className='score R'>{R}</span>
  </div>
))
