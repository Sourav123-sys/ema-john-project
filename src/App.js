
import { Route, Routes } from 'react-router-dom';
import './App.css';
 import About from './Components/About/About';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
 import Login from './Components/Login/Login';
 import NotFound from './Components/NotFound/NotFound';
 import Orders from './Components/Orders/Orders';
import RequireAuth from './Components/RequireAuth/RequireAuth';
 import Shipment from './Components/Shipment/Shipment';
import Shop from './Components/Shop/Shop';
 import SignUp from './Components/Sign Up/SignUp';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/order" element={<Orders />}></Route>
        <Route path="/inventory" element={

          <RequireAuth>
            <Inventory />
          </RequireAuth>
        }></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/shipment" element={
            <RequireAuth>
             <Shipment />
          </RequireAuth>
         
        }></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route> 
         <Route path="*" element={<NotFound />}></Route>

      </Routes>


    </div>
  );
}

export default App;
