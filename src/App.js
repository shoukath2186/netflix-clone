
import { Route,Routes } from "react-router-dom";
import Navebar from "./component/Navbar";
import {AuthContextProvider} from './context/authContext'
import Home from "./pages/home";
import Login from "./pages/LogIn";
import Singup from "./pages/SignUp";
import Account from "./pages/Account";
import ProtectedRoute from "./component/ProtectedRoute";



function App() {
  return (
    <>
    <AuthContextProvider>
    <Navebar/>
     <Routes>
         <Route path='/' element={<Home />}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/signin" element={<Singup/>}/>
         <Route 
         path="/account" 
         element={<ProtectedRoute><Account/></ProtectedRoute>}
         />

     </Routes>
    </AuthContextProvider>
     
    </>
  );
}

export default App;
