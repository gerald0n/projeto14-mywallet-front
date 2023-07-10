import { styled } from 'styled-components'

export default function Transactions() {
   const arr = []

   return (
      <Container>
         {arr.length == 0 ? (
            <div id="no-content">
               <h2>
                  Não há registros de <br /> entrada ou saída
               </h2>
            </div>
         ) : (
            <>
               <ul>
                  {arr.map((transaction) => {
                     return (
                        <Transaction>
                           <p id="descricao">
                              <span id="data">{transaction.data}</span> {transaction.descricao}
                           </p>
                           <span id="valor">{transaction.valor}</span>
                        </Transaction>
                     )
                  })}
               </ul>
               <div>
                  <p>SALDO</p>
                  <span>2934.12</span>
               </div>
            </>
         )}
      </Container>
   )
}

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
      padding-inline: 0.75rem;
      padding-block: 0.5rem;
      font-size: 1.0625rem;
      p {
         color: #000;
         font-weight: 700;
      }

      span {
         color: #03ac00;
         text-align: right;
      }
   }

   h2 {
      color: #868686;
      text-align: center;
      font-size: 1.25rem;
   }

   ul {
      //pra baixo
      display: flex;
      flex-direction: column;
      
      overflow-y: scroll;
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
      color: #c70000;
      text-align: right;
      font-family: Raleway;
   }
`
