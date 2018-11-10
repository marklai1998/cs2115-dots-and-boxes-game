import { player } from '../constants/playerMap'

export const checkWinner = ({ B, R }) => {
  const remainBox = 81 - B - R
  if (B < R) {
    if (B + remainBox < R) return player.R
  } else {
    if (R + remainBox < B) return player.B
  }
  return null
}
