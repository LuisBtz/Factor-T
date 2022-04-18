import React from "react"
import { Normalizer } from "../styles/Normalizer"
import { GlobalStyle } from "../styles/GlobalStyle"
import Header from '../layout/header'
import Footer from "./footer"
import styled from "styled-components"



function Layout({ children, black, background }) {

    const Container = styled.div`
        background-color: ${background};
        main {
            background-color: ${background};
        }
    `
  
  return (
    <Container>
      <Normalizer />
      <GlobalStyle />
      <Header black={black} background={background} />
      <main>{children}</main>
      <Footer background={background} />
    </Container>
  )
}




export default Layout