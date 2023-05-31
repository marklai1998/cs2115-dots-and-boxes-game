import React from 'react'

import styled from '@emotion/styled'
import { Player } from '../constants/player'
import { css } from '@emotion/react'

type Props = {
  current: Player
}

export const CurrentColor: React.FC<Props> = ({ current }) => (
  <Wrapper current={current} />
)

const Wrapper = styled.div<{ current: Player }>`
  height: 3px;
  width: 350px;
  transition: 0.5s;
  flex-shrink: 0;

  ${({ current }) =>
    current === Player.B
      ? css`
          background-color: #1565c0;
        `
      : current === Player.R
      ? css`
          background-color: #f50057;
        `
      : css``}
`
