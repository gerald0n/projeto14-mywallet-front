import { styled } from 'styled-components'
import exitIcon from '../assets/Vector.svg'
import { useNavigate } from 'react-router-dom'

export default function Header({ username }) {

   const navigate = useNavigate()

   function logout() {
      localStorage.clear()
      navigate('/')
   }

   return (
      <Container>
         <Greeting data-test="user-name">Olá, {username}</Greeting>
         <img data-test="logout" src={exitIcon} onClick={logout} />
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
   line-height: normal;
   color: #fff;
   font-family: Raleway;
   font-size: 26px;
   font-weight: 600;
`
