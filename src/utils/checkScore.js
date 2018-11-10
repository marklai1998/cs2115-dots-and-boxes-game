import { player } from '../constants/playerMap'

export const checkScore = boardArr => {
  let B = 0, R = 0
  for (let row = 1; row < boardArr.length; row = row + 2) {
    for (let col = 1; col < boardArr.length; col = col + 2) {
      if (boardArr[row][col] === player.B) B++
      if (boardArr[row][col] === player.R) R++
    }
  }
  return {
    [player.B]: B,
    [player.R]: R
  }
}
