import { assocPath, slice } from 'ramda'

import { BoardState } from '../constants/boardState'
import { Player } from '../constants/player'

export const checkComplete = (boardArr: BoardState[][], current: Player) => {
  for (let row = 0; row < boardArr.length; row = row + 2) {
    for (let col = 0; col < boardArr.length; col = col + 2) {
      boardArr = checkOrigin({ row, col })(boardArr, current)
    }
  }
  return boardArr
}

const checkOrigin =
  (origin: { row: number; col: number }) =>
  (boardArr: BoardState[][], current: Player) => {
    const rowMax = boardArr.length - origin.row
    const colMax = boardArr.length - origin.col
    for (let height = 2; height < rowMax; height = height + 2) {
      for (let width = 2; width < colMax; width = width + 2) {
        const rectangleSize = { width, height }
        if (isRectangle(origin, rectangleSize)(boardArr)) {
          boardArr = colorArea(origin, rectangleSize)(boardArr, current)
        }
      }
    }
    return boardArr
  }

const isRectangle =
  (
    origin: { row: number; col: number },
    rectangleSize: { width: number; height: number }
  ) =>
  (boardArr: BoardState[][]) => {
    const firstRow = slice(
      origin.col,
      origin.col + rectangleSize.width,
      boardArr[origin.row]
    )
    if (firstRow.some((cell) => cell === BoardState.N)) return false

    const lastRow = slice(
      origin.col,
      origin.col + rectangleSize.width,
      boardArr[origin.row + rectangleSize.height]
    )
    if (lastRow.some((cell) => cell === BoardState.N)) return false

    for (let rowOffSet = 1; rowOffSet < rectangleSize.height; rowOffSet++) {
      const rowFirstCell = boardArr[origin.row + rowOffSet][origin.col]
      const rowLastCell =
        boardArr[origin.row + rowOffSet][origin.col + rectangleSize.width]
      if (rowFirstCell === BoardState.N || rowLastCell === BoardState.N)
        return false

      for (let colOffSet = 1; colOffSet < rectangleSize.width; colOffSet++) {
        const cell = boardArr[origin.row + rowOffSet][origin.col + colOffSet]
        if (cell !== BoardState.N && cell !== BoardState.O) return false
      }
    }

    return true
  }

const colorArea =
  (
    origin: { row: number; col: number },
    rectangleSize: { width: number; height: number }
  ) =>
  (boardArr: BoardState[][], current: Player) => {
    for (let rowOffset = 1; rowOffset < rectangleSize.height; rowOffset++) {
      for (let colOffset = 1; colOffset < rectangleSize.width; colOffset++) {
        const row = origin.row + rowOffset
        const col = origin.col + colOffset
        const cell = boardArr[row][col]
        if (cell !== BoardState.O) {
          boardArr =
            row % 2 && col % 2
              ? assocPath([row, col], current, boardArr)
              : assocPath([row, col], BoardState.D, boardArr)
        }
      }
    }
    return boardArr
  }
