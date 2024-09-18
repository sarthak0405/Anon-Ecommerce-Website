// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Navbar from './Components/navbar';
// import Hero from './Components/hero';
// import Footer from './Components/footer';
import Login from './Components/login';
import Mens from './Components/mens';
import Womens from './Components/womens';
import Adminlogin from './Components/adminlogin';
import Adminpage from './Components/adminpage';
import Allproduct from './Components/allproduct';
import Adminusers from './Components/adminusers';
import Prod1 from './Components/prod1';
import Cart from './Components/cart';
import Order from './Components/order';
import Allorders from './Components/adminorder';
import Menspage from './Components/menspage';
import { CartProvider } from './Components/cartContext';
import Womenspage from './Components/womenspage';
import PayReceipt from './Components/payreceipt';
import Kidspage from './Components/kidspage';
import Electronicspage from './Components/electronics';
import Perfumepage from './Components/perfumes';

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          {/* <Navbar /> */}
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Prod1 />} />

            {/* <Route path='/mens' element={<Mens />} /> */}
            <Route path='/login' element={<Login />} />
            {/* <Route path='/womens' element={<Womens />} /> */}
            <Route path='/admin' element={<Adminlogin />} />
            <Route path='/adminpage' element={<Adminpage />} />
            <Route path='/products' element={<Allproduct />} />
            <Route path='/users' element={<Adminusers />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<Order />} />
            <Route path='/adminorder' element={<Allorders />} />
            <Route path='/mens' element={<Menspage />} />
            <Route path='/womens' element={<Womenspage />} />
            <Route path='/kids' element={<Kidspage />} />
            <Route path='/electronics' element={<Electronicspage />} />
            <Route path='/perfume' element={<Perfumepage />} />
            <Route path='/pay-receipt' element={<PayReceipt />} />


          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </CartProvider>


    </>
  );
}

export default App;
