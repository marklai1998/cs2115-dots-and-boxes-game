import React from 'react'

import './index.css'
import { board } from '../../constants/boardMap'

export class Line extends React.PureComponent {
  onClick = () => {
    if (this.props.state === board.N) {
      this.props.onClick(this.props.row, this.props.col)
    }
  }

  render () {
    const { className, state, current } = this.props
    return (
      <div className={`line ${className} ${state} current-${current}`}>
        <div className='trigger' onClick={this.onClick} />
      </div>
    )
  }
}
