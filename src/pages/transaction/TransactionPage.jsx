import { styled } from 'styled-components'
import { Form } from '../../styles/GlobalStyle'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function TransactionPage() {
   const { tipo: type } = useParams()
   const [tokenSession, setTokenSession] = useState('')
   const navigate = useNavigate()

   useEffect(() => {
      if (localStorage.length === 0) navigate('/')

      let local = localStorage.getItem('token')
      local = JSON.parse(local)
      setTokenSession(local)
   }, [])

   const [transaction, setTransaction] = useState({
      value: '',
      description: ''
   })

   function sendTransaction() {
      event.preventDefault()

      axios
         .post(`${import.meta.env.VITE_API_URL}/nova-transacao/${type}`, transaction, {
            headers: { Authorization: `Bearer ${tokenSession}` }
         })
         .then(() => navigate('/home'))
         .catch((error) => alert(...error.response.data))
   }

   return (
      <Container>
         <div>Nova {type}</div>

         <Form onSubmit={sendTransaction}>
            <input
               data-test="registry-amount-input"
               type="text"
               placeholder="Valor"
               value={transaction.value}
               onChange={() => setTransaction({ ...transaction, value: event.target.value })}
               required
            />
            <input
               data-test="registry-name-input"
               type="text"
               placeholder="Descrição"
               value={transaction.description}
               onChange={() => setTransaction({ ...transaction, description: event.target.value })}
               required
            />
            <input data-test="registry-save" type="submit" value={`Salvar ${type}`} />
         </Form>
      </Container>
   )
}

const Container = styled.div`
   background: #8c11be;
   height: 100vh;
   padding: 25px;

   div {
      margin-bottom: 40px;
      color: #fff;
      font-family: Raleway;
      font-size: 1.625rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
   }
`
