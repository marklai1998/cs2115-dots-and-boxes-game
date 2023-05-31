import React from 'react'

import { Dot } from '../components/Dot'
import { Line } from '../components/Line'
import { Box } from '../components/Box'
import { BoardState } from '../constants/boardState'
import { Player } from '../constants/player'
import styled from '@emotion/styled'

type Props = {
  board: BoardState[][]
  current: Player
  onLineClick: (row: number, col: number) => void
}

export const Board: React.FC<Props> = ({ board, current, onLineClick }) => (
  <Wrapper>
    {board.map((row, rowCount) => {
      const isOdd = rowCount % 2
      return (
        <Row key={rowCount}>
          {isOdd
            ? row.map((col, colCount) =>
                colCount % 2 ? (
                  <Box key={rowCount + '-' + colCount} state={col} />
                ) : (
                  <Line
                    key={rowCount + '-' + colCount}
                    state={col}
                    current={current}
                    row={rowCount}
                    col={colCount}
                    onClick={onLineClick}
                    isEven={false}
                  />
                )
              )
            : row.map((col, colCount) =>
                col === BoardState.O ? (
                  <Dot key={rowCount + '-' + colCount} />
                ) : (
                  <Line
                    isEven
                    key={rowCount + '-' + colCount}
                    state={col}
                    current={current}
                    row={rowCount}
                    col={colCount}
                    onClick={onLineClick}
                  />
                )
              )}
        </Row>
      )
    })}
  </Wrapper>
)

const Wrapper = styled.div`
  padding: 15px;
  width: 320px;
  background-color: #222;
`

const Row = styled.div`
  display: flex;
`
