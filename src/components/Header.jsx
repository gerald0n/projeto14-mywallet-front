import { styled } from 'styled-components'
import exitIcon from '../assets/Vector.svg'

export default function Header({ username }) {
   return (
      <Container>
         <Greeting>Olá, {username}</Greeting>
         <img src={exitIcon} />
      </Container>
   )
}

const Container = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
`

const Greeting = styled.div`
   width: 75%;
   overflow: hidden;
   word-break: break-all;

   color: #fff;
   font-family: Raleway;
   font-size: 1.625rem;
   font-weight: 700;
`
