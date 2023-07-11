import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage'
import SignInPage from './pages/signInPage/SignInPage'
import SignUpPage from './pages/signUpPage/SignUpPage'
import TransactionPage from './pages/transaction/TransactionPage'

function App() {
   return (
      <>
         <Routes location={useLocation()} key={useLocation().pathname}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<SignInPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="/nova-transacao/:tipo" element={<TransactionPage />} />
         </Routes>
      </>
   )
}

export default App
