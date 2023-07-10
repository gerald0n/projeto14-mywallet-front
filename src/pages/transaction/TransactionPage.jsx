import { styled } from 'styled-components'
import { Form } from '../../styles/GlobalStyle'

export default function TransactionPage() {
   const type = 'entrada'

   return (
      <Container>
         <div>Nova {type}</div>

         <Form>
            <input type="text" name="valor" id="valor" placeholder="Valor" />
            <input type="text" name="descricao" id="descricao" placeholder="Descrição" />
            <input type="submit" value={`Salvar ${type}`} />
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
