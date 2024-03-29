import React from 'react'

import styled from '@emotion/styled'

export const Footer = () => (
  <Wrapper>
    Build with <i className='fab fa-react' />
    React.js
  </Wrapper>
)

const Wrapper = styled.footer`
  padding: 10px 10px;
  padding-bottom: 0;
  font-size: 16px;
  height: 30px;
  transition: 0.5s;
  background-color: #222;
  flex-shrink: 0;
  color: #e6e6e6;
`
