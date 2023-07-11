import { Logo } from '../../styles/Logo'
import { Container, Form, Link } from '../../styles/GlobalStyle'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function SignUpPage() {
   const navigate = useNavigate()

   const [novoCadastro, setNovoCadastro] = useState({
      name: '',
      email: '',
      password: '',
      passwordCheck: ''
   })

   function signUp(e) {
      e.preventDefault()

      if (novoCadastro.password === novoCadastro.passwordCheck) {
         axios
            .post(
               `${import.meta.env.VITE_API_URL}/cadastro`,
               Object.fromEntries(Object.entries(novoCadastro).slice(0, 3))
            )
            .then(() => {
               setNovoCadastro({
                  name: '',
                  email: '',
                  password: '',
                  passwordCheck: ''
               })
               navigate('/')
            })
            .catch((error) => alert(error.response.data))
      } else alert('As senhas não conferem! Tente novamente.')
   }

   return (
      <Container style={{ paddingTop: '95px' }}>
         <Logo>MyWallet</Logo>
         <Form onSubmit={signUp}>
            <input
            data-test="name"
               type="text"
               placeholder="Nome"
               value={novoCadastro.name}
               onChange={() => setNovoCadastro({ ...novoCadastro, name: event.target.value })}
               required
            />
            <input
            data-test="email"
               type="text"
               placeholder="E-mail"
               value={novoCadastro.email}
               onChange={() => setNovoCadastro({ ...novoCadastro, email: event.target.value })}
               required
            />
            <input
            data-test="password"
               type="password"
               placeholder="Senha"
               value={novoCadastro.password}
               onChange={() => setNovoCadastro({ ...novoCadastro, password: event.target.value })}
               required
            />
            <input
            data-test="conf-password"
               type="password"
               placeholder="Confirme a senha"
               value={novoCadastro.passwordCheck}
               onChange={() =>
                  setNovoCadastro({ ...novoCadastro, passwordCheck: event.target.value })
               }
               required
            />
            <input data-test="sign-up-submit" type="submit" value="Cadastrar" />
         </Form>

         <Link onClick={() => navigate('/')}>Já tem uma conta? Entre agora!</Link>
      </Container>
   )
}
