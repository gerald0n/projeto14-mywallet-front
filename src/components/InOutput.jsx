import { styled } from 'styled-components'
import iconAdd from './../assets/iconAdd.svg'
import iconRemove from './../assets/iconRemove.svg'

export default function InOutput({ type }) {
   return (
      <Container>
         <img src={iconAdd} alt="" />
         <p>
            Nova <br /> {type}
         </p>
      </Container>
   )
}

const Container = styled.div`
   width: 155px;
   height: 114px;
   border-radius: 5px;
   background: #a328d6;
   font-family: Raleway;

   display: flex;
   flex-direction: column;
   justify-content: space-between;

   padding: 10px;

   img {
      width: 25px;
      height: 25px;
   }

   p {
      color: #fff;
      font-size: 17px;
      font-weight: 700;
      line-height: normal;
   }
`
