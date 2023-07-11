import { styled } from 'styled-components'

export default function Transactions({ data }) {
   const inputs = data.filter((transaction) => transaction.transactionType === 'entrada')
   const outputs = data.filter((transaction) => transaction.transactionType === 'saida')

   const inputValues = inputs
      .map((input) => Number(input.value))
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
      .toFixed(2)

   const outputValues = outputs
      .map((output) => Number(output.value))
      .reduce((acc, curr) => acc + curr, 0)
      .toFixed(2)

   const sum = (inputValues - outputValues).toFixed(2)

   return (
      <Container>
         {data.length == 0 ? (
            <div id="no-content">
               <h2>
                  Não há registros de <br /> entrada ou saída
               </h2>
            </div>
         ) : (
            <>
               <ul>
                  {data.map((transaction) => {
                     return (
                        <Transaction key={transaction._id} type={transaction.transactionType}>
                           <span style={{display: 'flex'}}>
                              <span id="data">{transaction.date}</span>
                              <p id="descricao" data-test="registry-name">
                                 {transaction.description}
                              </p>
                           </span>
                           <span id="valor" data-test="registry-amount">
                              {transaction.value.replace('.', ',')}
                           </span>
                        </Transaction>
                     )
                  })}
               </ul>
               <div>
                  <p>SALDO</p>
                  <Saldo data-test="total-amount" value={sum}>
                     {sum.replace('.', ',')}
                  </Saldo>
               </div>
            </>
         )}
      </Container>
   )
}

const Saldo = styled.span`
   color: ${({ value }) => (value == 0 ? '#000' : value > 0 ? '#03AC00' : '#C70000')};
   text-align: right;
   font-weight: 600;
`

const Container = styled.div`
   background: #8c11be;
   width: 326px;
   height: 446px;
   background: #fff;
   border-radius: 5px;
   font-family: Raleway;
   font-size: 16px;
   line-height: normal;

   display: flex;
   flex-direction: column;
   justify-content: space-between;

   margin-top: 22px;
   margin-bottom: 13px;

   overflow: hidden;

   div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-inline: 0.75rem;
      padding-block: 0.5rem;
      font-size: 1.0625rem;
      p {
         color: #000;
         font-weight: 700;
      }
   }

   h2 {
      color: #868686;
      text-align: center;
      font-size: 1.25rem;
   }

   ul {
      display: flex;
      flex-direction: column;

      overflow-y: scroll;
      padding-bottom: 16px;
   }

   #no-content {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
   }
`
const Transaction = styled.li`
   display: flex;
   justify-content: space-between;
   padding-inline: 15px;
   padding-top: 25px;

   #data {
      color: #c6c6c6;
      margin-right: 0.5rem;
   }

   #descricao {
      color: #000;
   }

   #valor {
      color: ${({ type }) => {
         return type === 'entrada' ? '#03AC00' : '#C70000'
      }};
   }
`
