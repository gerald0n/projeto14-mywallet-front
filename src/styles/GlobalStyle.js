import { styled, createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
      font-family: Raleway;
        font-style: normal;
        font-weight: 400;
        box-sizing: border-box;
    }`

export const Container = styled.div`
   background: #8c11be;
   height: 100vh;
   padding-inline: 25px;
   padding-top: 9.95rem;

   text-align: center;
`
export const Form = styled.form`
   display: flex;
   flex-direction: column;
   gap: 0.81rem;

   margin-top: 1.5rem;
   margin-bottom: 2.5rem;

   input {
      border-radius: 0.3125rem;
      border: none;
      background: #fff;

      color: #000;
      font-family: Raleway;
      font-size: 1.25rem;
   }

   [type='text'],
   [type='password'] {
      height: 3.625rem;
      padding-inline: 0.95rem;
      color: #000;
      font-weight: 500;

      &:focus {
         outline-color: #9021c0;
      }
   }

   [type='submit'] {
      height: 2.875rem;
      font-weight: 700;
      background: #a328d6;
      color: #fff;
      cursor: pointer;

      &:hover {
         background: #6d1593;
      }
   }
`

export const Link = styled.div`
   color: #fff;
   font-family: Raleway;
   font-size: 0.9375rem;
   text-decoration: none;
   font-weight: 700;
`
