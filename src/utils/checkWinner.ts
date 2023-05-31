import { Player } from '../constants/player'

export const checkWinner = ({ B, R }: { B: number; R: number }) => {
  const remainBox = 81 - B - R
  if (B < R) {
    if (B + remainBox < R) return Player.R
  } else {
    if (R + remainBox < B) return Player.B
  }
  return null
}
