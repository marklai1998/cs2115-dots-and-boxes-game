import React from 'react'
import { Game } from './containers/Game'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'

export const App = () => (
  <Wrapper>
    <Global
      styles={css`
        body {
          margin: 0;
          padding: 0;
          font-family: 'Rajdhani', Microsoft JhengHei, sans-serif;
          background-color: #151515;
        }
      `}
    />
    <Header />
    <Game />
    <Footer />
  </Wrapper>
)

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
