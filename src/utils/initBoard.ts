import { range } from 'ramda'
import { BoardState } from '../constants/boardState'

export const initBoard = (size: number) =>
  range(0, size * 2 + 1).map((__, rowCount) => {
    const isOddRow = rowCount % 2
    const row = range(0, size * 2 + 1)
    return isOddRow
      ? row.map(() => BoardState.N)
      : row.map((value, index) => (index % 2 ? BoardState.N : BoardState.O))
  })
