import React, { useCallback } from 'react'

import { BoardState } from '../constants/boardState'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Player } from '../constants/player'

type Props = {
  row: number
  col: number
  onClick: (row: number, col: number) => void
  state: BoardState
  current: Player
  isEven: boolean
}

export const Line: React.FC<Props> = ({
  row,
  col,
  onClick,
  isEven,
  state,
  current,
}) => {
  const handleClick = useCallback(() => {
    if (state === BoardState.N) onClick(row, col)
  }, [onClick, state, row, col])

  return (
    <Wrapper state={state} current={current} isEven={isEven}>
      <Trigger onClick={handleClick} isEven={isEven} />
    </Wrapper>
  )
}

const Trigger = styled.div<{ isEven: boolean }>`
  position: absolute;

  ${({ isEven }) =>
    isEven
      ? css`
          position: absolute;
          width: 30px;
          height: 10px;
          left: 0;
          top: -4px;
        `
      : css`
          position: absolute;
          width: 10px;
          height: 30px;
          right: -4px;
        `}
`

const Wrapper = styled.div<{
  isEven: boolean
  state: BoardState
  current: Player
}>`
  display: inline-block;
  position: relative;
  width: 5px;
  height: 30px;
  transition: 0.3s;

  ${({ isEven }) =>
    isEven &&
    css`
      display: inline-block;
      width: 30px;
      height: 5px;
    `}

  ${({ state }) =>
    state === BoardState.B
      ? css`
          background-color: #1565c0;
        `
      : state === BoardState.R
      ? css`
          background-color: #f50057;
        `
      : css``}
      
  ${({ current }) =>
    current === Player.B
      ? css`
          &:hover {
            background-color: #1565c0;
            cursor: pointer;
          }
        `
      : current === Player.R
      ? css`
          &:hover {
            background-color: #f50057;
            cursor: pointer;
          }
        `
      : css``}
`
