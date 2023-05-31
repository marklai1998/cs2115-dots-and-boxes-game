import { BoardState } from '../constants/boardState'
import { Player } from '../constants/player'

export const checkScore = (boardArr: BoardState[][]) => {
  let B = 0,
    R = 0
  for (let row = 1; row < boardArr.length; row = row + 2) {
    for (let col = 1; col < boardArr.length; col = col + 2) {
      if (boardArr[row][col] === BoardState.B) B++
      if (boardArr[row][col] === BoardState.R) R++
    }
  }
  return {
    [Player.B]: B,
    [Player.R]: R,
  }
}
