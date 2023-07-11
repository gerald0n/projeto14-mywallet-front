import { styled } from 'styled-components'
import Header from '../../components/Header'
import Transactions from '../../components/Transactions'
import InOutput from '../../components/InOutput'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function HomePage() {
   const [username, setUsername] = useState('')
   const [transactions, setTransactions] = useState([])

   useEffect(() => {
      if (localStorage.length > 0) {
         let tokenSession = localStorage.getItem('token')
         tokenSession = JSON.parse(tokenSession)

         axios
            .get(`${import.meta.env.VITE_API_URL}/home`, {
               headers: { Authorization: `Bearer ${tokenSession}` }
            })
            .then((response) => {
               setUsername(response.data.name)
               setTransactions([...response.data.transactionsUser])
            })
      }
   }, [])

   return (
      <Container>
         <Header username={username} />
         <Transactions data={transactions} />
         <div id="input-output">
            <InOutput type="entrada" />
            <InOutput type="saida" />
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

   #input-output {
      display: flex;
      gap: 15px;
   }
`
