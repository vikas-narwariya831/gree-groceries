import Company from "./components/administrator/Company";
import DisplayAllCompanies from "./components/administrator/DisplayAllCompanies";

 
import DashBoard from "./components/administrator2/DashBoard";
 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./components/administrator2/AdminLogin";

import Home from "./components/userinterface/screens/Home";
import HomePageDrawer from "./components/userinterface/usercomponents/HomePageDrawer";
import AllCategory from "./components/userinterface/screens/AllCategory"  
import Product from "./components/userinterface/screens/Product"
import Cart from "./components/userinterface/screens/Cart"
import MakePayment from "./components/userinterface/screens/MakePayment";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Company />} path={"/company"} />
          <Route
            element={<DisplayAllCompanies />}
            path={"/displayallcompanies"}
          />

        
         
          <Route element={<AdminLogin />} path={"/adminlogin"} />
          <Route  element={<Home/>} path='/'/>

          <Route element={<DashBoard />} path={"/dashboard/*"} />
          <Route element={<Home />} path={"/home"} />
          <Route element={<AllCategory />} path={"/allcategory"} />
          <Route element={<HomePageDrawer />} path={"/homepagedrawer"} />
          <Route element={<Product />} path={"/exploreproduct"} />
          <Route element={<Cart />} path={"/cart"} />
          <Route element={<MakePayment />} path={"/makepayment"} />
          
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
