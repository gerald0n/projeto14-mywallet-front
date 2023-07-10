import { styled } from 'styled-components'
import Header from '../../components/Header'

export default function HomePage() {

  const username = 'Geraldo Gomes'
   return (
      <Container>
         <Header username = {username} />
      </Container>
   )
}

const Container = styled.div`
   margin: 1.5rem;
`


