import React from 'react'

import styled from '@emotion/styled'

export const Dot = () => (
  <Wrapper>
    <div />
  </Wrapper>
)

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 5px;
  height: 5px;
  border-radius: 10px;

  & div {
    position: absolute;
    background-color: #2d3034;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    top: -2px;
    left: -2px;
    z-index: 10;
  }
`
