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
   width: 326px;
   display: flex;
   justify-content: space-between;
   align-items: start;

   img {
      padding-top: 3px;
   }
`

const Greeting = styled.div`
   width: 250px;
   overflow: hidden;
   word-break: break-all;
   line-height: normal;
   color: #fff;
   font-family: Raleway;
   font-size: 26px;
   font-weight: 600;
`
