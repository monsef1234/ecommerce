import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Layouts from "./components/Layouts/Layouts";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";
import Signup from "./pages/Signup";
import { useEffect } from "react"

function App() {
  const {currentUser} = useSelector(state => state.auth)
  const RequireAuth = ({children}) => {
    return currentUser ? children : <Navigate to="/login" />
  }
  useEffect(()=>{
    currentUser && localStorage.setItem("user", JSON.stringify(currentUser))
}, [currentUser])
  return (
    <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      <Route path="/" element={<Layouts />}>
        <Route index element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="cart" element={<RequireAuth><Cart /></RequireAuth>} />
        <Route path="shop" element={<RequireAuth><Shop /></RequireAuth>} />
        <Route path="shop/:id" element={<RequireAuth><ProductDetails /></RequireAuth>} />
        <Route path="checkout" element={<RequireAuth><Checkout /></RequireAuth>} />
      </Route>
    </Routes>
  );
}

export default App;
