import { BrowserRouter,Routes,Route } from "react-router-dom"
import NavBar from "./components/navbar/NavBar"
import HomePage from "./components/homepage/HomePage"
import Footer from "./components/footer/Footer"
import Book from "./components/homepage/appointment/Book"
import Account from "./components/Account/Account"
import Edit from "./components/Account/Edit"
import Payment from "./components/Account/Payment/Payment"
import Cart from "./components/Account/cart/Cart"
import OneCard from './components/Account/cart/OneCard'
import ProductDetails from "./components/homepage/services/ProductDetails"
import Filter from "./components/filter/Filter"
import FindDoctor from './components/filter/FindDoctor'
import FindService from './components/filter/FindService'
function App() {

  return (
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path='/' element={<HomePage/>} children={[
    <Route path='/one-doctor' element={<OneCard/>}/>,
    <Route path='/one-product' element={<ProductDetails/>}/>
    ]
    }/>
    <Route path='/filter' element={<Filter/>} children={
      [
        <Route path="/filter/find-doctor" element={<FindDoctor/>} />,
        <Route path="/filter/find-service" element={<FindService/>} />
      ]
    }/>
    <Route path='/book' element={<Book/>}/>
    <Route path='/user' element={<Account/>} children={[
        <Route path='/user/' element={<Edit/>}/>,
        <Route path='/user/pay' element={<Payment/>}/>,
        <Route path='/user/cart' element={<Cart/>}/>

      ]
    }
    />
    
  </Routes>
  <Footer/>
  </BrowserRouter>
  )
}

export default App
