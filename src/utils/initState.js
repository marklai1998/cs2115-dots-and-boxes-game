import { board } from '../constants/boardMap'

export const initBoard = size =>
  [...Array(size * 2 - 1)].map((__, rowCount) => {
    const isOddRow = rowCount % 2
    const row = [...Array(size * 2 - 1)]
    return isOddRow
      ? row.fill(board.N)
      : row.map((value, index) => (index % 2 ? board.N : board.O))
  })
