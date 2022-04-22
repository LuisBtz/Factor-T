import React,{useEffect} from "react"
import { Normalizer } from "../../styles/Normalizer"
import { GlobalStyle } from "../../styles/GlobalStyle"
import Header from './header'
import Footer from "./footer"
import styled from "styled-components"
import AOS from "aos";
import 'aos/dist/aos.css';



function Layout({ children, black, background }) {

  useEffect(()=>{
    AOS.init({
      once: true
    })
    
  })

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