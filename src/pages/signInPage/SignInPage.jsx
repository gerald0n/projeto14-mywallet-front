import { Logo } from '../../styles/Logo'
import { Container, Form, Link } from '../../styles/GlobalStyle'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function SignInPage() {
   const navigate = useNavigate()

   const [user, setUser] = useState({
      email: '',
      password: ''
   })

   useEffect(() => {
      if(localStorage.length > 0) {
         let tokenSession = localStorage.getItem('token')
         tokenSession = JSON.parse(tokenSession)
         
         axios.get(`${import.meta.env.VITE_API_URL}/session`, {headers: {'Authorization': `Bearer ${tokenSession}`}})
         .then(() => {
            navigate('/home')
         })
         .catch(error => console.log(error))
      }
      
   }, [])

   function signIn() {
      event.preventDefault()

      axios
         .post(`${import.meta.env.VITE_API_URL}/`, user)
         .then((response) => {
            localStorage.setItem('token', JSON.stringify(response.data))
            navigate('/home')
         })
         .catch((error) => alert(error.response.data))
   }

   return (
      <Container>
         <Logo>MyWallet</Logo>
         <Form onSubmit={signIn}>
            <input
               data-test="email"
               type="text"
               placeholder="E-mail"
               value={user.email}
               onChange={() => setUser({ ...user, email: event.target.value })}
               required
            />
            <input
               data-test="password"
               type="password"
               placeholder="Senha"
               value={user.password}
               onChange={() => setUser({ ...user, password: event.target.value })}
               required
            />
            <input type="submit" value="Entrar" data-test="sign-in-submit" />
         </Form>

         <Link onClick={() => navigate('/cadastro')}>Primeira vez? Cadastre-se!</Link>
      </Container>
   )
}
