import React from 'react'

import styled from '@emotion/styled'

type Props = {
  B: number
  R: number
  reset: () => void
}

export const ScoreBoard: React.FC<Props> = React.memo(({ B, R, reset }) => (
  <Wrapper>
    <BScore>{B}</BScore>
    <Reset type='button' onClick={reset}>
      <i className='fas fa-redo-alt' />
    </Reset>
    <RScore>{R}</RScore>
  </Wrapper>
))

const Wrapper = styled.div`
  width: 330px;
  background-color: #2d3034;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`

const Score = styled.span`
  font-size: 25px;
  min-width: 50px;
`

const BScore = styled(Score)`
  color: #1565c0;
`

const RScore = styled(Score)`
  color: #f50057;
  text-align: end;
`

const Reset = styled.button`
  background-color: unset;
  padding-top: 2px;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  color: #e6e6e6;
  cursor: pointer;
  border: 0;
  transition: 0.5s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.301);
  }

  &:focus {
    outline: none;
  }
`
