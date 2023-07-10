import { Logo } from '../../styles/Logo'
import { Container, Form, Link } from '../../styles/GlobalStyle'

export default function SignInPage() {
   return (
      <Container>
         <Logo>MyWallet</Logo>
         <Form onSubmit={(e) => e.preventDefault()}>
            <input type="text" name="email" id="email" placeholder="E-mail" />
            <input type="password" name="password" id="password" placeholder="Senha" />
            <input type="submit" id="submit" value="Entrar" />
         </Form>

         <Link href="">Primeira vez? Cadastre-se!</Link>
      </Container>
   )
}