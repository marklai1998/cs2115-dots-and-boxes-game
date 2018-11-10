import React from 'react'

import './index.css'
import { Dot } from '../../components/Dot'
import { Line } from '../../components/Line'
import { Box } from '../../components/Box'
import { board } from '../../constants/boardMap'

export const Board = React.memo(props => (
  <div className='board'>
    {props.board.map((row, rowCount) => {
      const isOdd = rowCount % 2
      return (
        <div className='row' key={rowCount}>
          {isOdd
            ? row.map(
                (col, colCount) =>
                  (colCount % 2
                    ? <Box key={rowCount + '-' + colCount} state={col} />
                    : <Line
                      key={rowCount + '-' + colCount}
                      state={col}
                      current={props.current}
                      row={rowCount}
                      col={colCount}
                      onClick={props.onLineClick}
                      />)
              )
            : row.map(
                (col, colCount) =>
                  (col === board.O
                    ? <Dot key={rowCount + '-' + colCount} />
                    : <Line
                      className='even'
                      key={rowCount + '-' + colCount}
                      state={col}
                      current={props.current}
                      row={rowCount}
                      col={colCount}
                      onClick={props.onLineClick}
                      />)
              )}
        </div>
      )
    })}
  </div>
))
