import React from 'react'
import { assocPath } from 'ramda'

import './index.css'
import { Board } from '../Board'
import { initBoard } from '../../utils/initState'
import { player } from '../../constants/playerMap'
import { checkComplete } from '../../utils/checkComplete'
import { ScoreBoard } from '../../components/ScoreBoard'
import { CurrentColor } from '../../components/CurrentColor'
import { checkScore } from '../../utils/checkScore'
import { WinBox } from '../../components/WinBox'
import { checkWinner } from '../../utils/checkWinner'

const InitialState = {
  size: 10,
  current: player.B,
  get board () {
    return initBoard(this.size)
  },
  winner: null,
  [player.B]: 0,
  [player.R]: 0
}

export class Game extends React.PureComponent {
  state = InitialState

  onLineClick = (row, col) => {
    const newBoard = assocPath([row, col], this.state.current, this.state.board)
    const boardWithComplete = checkComplete(newBoard, this.state.current)
    const newScore = checkScore(boardWithComplete)
    const winner = checkWinner(newScore)
    const current = newScore.B !== this.state.B || newScore.R !== this.state.R
      ? this.state.current
      : this.state.current === player.B ? player.R : player.B
    console.info(boardWithComplete)
    this.setState({
      board: boardWithComplete,
      current,
      winner,
      ...newScore
    })
  }

  reset = () => {
    this.setState(InitialState)
  }

  render () {
    return (
      <div className='game-wrapper'>
        <WinBox winner={this.state.winner} show={this.state.winner !== null} />
        <ScoreBoard B={this.state.B} R={this.state.R} reset={this.reset} />
        <CurrentColor current={this.state.current} />
        <Board
          size={this.state.size}
          board={this.state.board}
          current={this.state.current}
          onLineClick={this.onLineClick}
        />
      </div>
    )
  }
}
