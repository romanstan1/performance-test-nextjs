import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Nav from '../components/Nav'

const Home = styled.div`
  color: red;
`

export default () =>
  <Home>
    {/* <Header/> */}
    <Nav/>
    <h1>Home page</h1>
  </Home>
