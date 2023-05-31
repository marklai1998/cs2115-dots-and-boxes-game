import React from 'react'

import { Player } from '../constants/player'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

type Props = { winner: Player | null; show: boolean }

export const WinBox: React.FC<Props> = ({ winner, show }) => (
  <Wrapper show={show}>{winner === Player.B ? 'Blue' : 'Red'} Won!</Wrapper>
)

const Wrapper = styled.div<{ show: boolean }>`
  background-color: #3f3f3f;
  color: #e6e6e6;
  padding: 0 10px;
  border-radius: 3px;
  margin-bottom: 10px;
  height: 0;
  overflow: hidden;
  transition: 0.3s;

  ${({ show }) =>
    show &&
    css`
      padding: 5px 10px;
      height: 20px;
    `}
`
