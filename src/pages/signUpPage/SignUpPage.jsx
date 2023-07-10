import { Logo } from '../../styles/Logo'
import { Container, Form, Link } from '../../styles/GlobalStyle'

export default function SignUpPage() {
   return (
      <Container>
         <Logo>MyWallet</Logo>
         <Form onSubmit={(e) => e.preventDefault()}>
            <input type="text" name="name" id="name" placeholder="Nome" />
            <input type="text" name="email" id="email" placeholder="E-mail" />
            <input type="password" name="password" id="password" placeholder="Senha" />
            <input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Confirme a senha" />
            <input type="submit" id="submit" value="Cadastrar" />
         </Form>

         <Link href="">Já tem uma conta? Entre agora!</Link>
      </Container>
   )
}

