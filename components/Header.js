import Router from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'

const Header = styled.div`
  color: red;
  font-size: 20px;
  font-family: sans-serif;
  display: flex;
  justify-content:space-around;
  align-items: center;
`

export default () =>
<Header>
  <Link href='/'>
    <a>Home</a>
  </Link>

  <Link prefetch href='/about'>
    <a>About</a>
  </Link>

  <Link href='/about'>
    <a onMouseEnter={() => {
      Router.prefetch('/about');
      console.log('prefetching /about!')
    }}> About </a>
  </Link>

  <Link href='/contact'>
    <a>Contact (<small>NO-PREFETCHING</small>)</a>
  </Link>
</Header>
