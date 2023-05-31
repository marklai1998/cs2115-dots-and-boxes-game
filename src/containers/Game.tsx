import React, { useCallback, useState } from 'react'
import { assocPath } from 'ramda'

import { Board } from './Board'
import { initBoard } from '../utils/initBoard'
import { Player } from '../constants/player'
import { checkComplete } from '../utils/checkComplete'
import { ScoreBoard } from '../components/ScoreBoard'
import { CurrentColor } from '../components/CurrentColor'
import { checkScore } from '../utils/checkScore'
import { WinBox } from '../components/WinBox'
import { checkWinner } from '../utils/checkWinner'
import styled from '@emotion/styled'
import { BoardState } from '../constants/boardState'

type State = {
  size: number
  current: Player
  board: BoardState[][]
  winner: Player | null
  B: number
  R: number
}

const InitialState: State = {
  size: 10,
  current: Player.B,
  get board() {
    return initBoard(this.size)
  },
  winner: null,
  [Player.B]: 0,
  [Player.R]: 0,
}

export const Game = () => {
  const [state, setState] = useState<State>(InitialState)

  const onLineClick = useCallback((row: number, col: number) => {
    setState((prev) => {
      const newBoard = assocPath([row, col], prev.current, prev.board)
      const boardWithComplete = checkComplete(newBoard, prev.current)
      const newScore = checkScore(boardWithComplete)
      const winner = checkWinner(newScore)
      const current =
        newScore.B !== prev.B || newScore.R !== prev.R
          ? prev.current
          : prev.current === Player.B
          ? Player.R
          : Player.B

      return {
        ...prev,
        board: boardWithComplete,
        current,
        winner,
        ...newScore,
      }
    })
  }, [])

  const reset = useCallback(() => {
    setState(InitialState)
  }, [])

  return (
    <Wrapper>
      <WinBox winner={state.winner} show={state.winner !== null} />
      <ScoreBoard B={state.B} R={state.R} reset={reset} />
      <CurrentColor current={state.current} />
      <Board
        board={state.board}
        current={state.current}
        onLineClick={onLineClick}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  position: relative;
`
