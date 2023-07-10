import { styled } from 'styled-components'
import Header from '../../components/Header'
import Transactions from '../../components/Transactions'
import InOutput from '../../components/InOutput'

export default function HomePage() {
   const username = 'Geraldo Gomes'
   return (
      <Container>
         <Header username={username} />
         <Transactions />
         <div>
            <InOutput type="entrada" />
            <InOutput type="saída" />
         </div>
      </Container>
   )
}

const Container = styled.div`
   background: #8c11be;
   height: 100vh;

   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 25px;

   div {
      display: flex;
      gap: 15px;
   }
`
