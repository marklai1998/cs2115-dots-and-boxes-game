import React from 'react'

import styled from '@emotion/styled'
import { BoardState } from '../constants/boardState'
import { css } from '@emotion/react'

type Props = {
  state: BoardState
}

export const Box: React.FC<Props> = ({ state }) => <Wrapper state={state} />

const Wrapper = styled.div<{ state: BoardState }>`
  display: inline-block;
  width: 30px;
  height: 30px;
  transition: 0.5s;

  ${({ state }) =>
    state === BoardState.B
      ? css`
          background-color: #0d47a1;
        `
      : state === BoardState.R
      ? css`
          background-color: #c51162;
        `
      : css``}
`
