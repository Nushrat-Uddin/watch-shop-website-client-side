import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Homepage/Home/Home';
import Products from './Pages/Homepage/Products/Products';
import AddProduct from './Pages/Homepage/AddProduct/AddProduct';
import Explore from './Pages/Explore/Explore';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import Purchase from './Pages/Purchase/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Payment from './Pages/Dashboard/Payment/Payment';
import MyOrder from './Pages/MyOrder/MyOrder';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Switch>
          <Route path="/home">
          <Home></Home> 
          </Route>
          <Route path="/products">
          <Products></Products>
          </Route>
          <Route path="/addproduct">
          <AddProduct></AddProduct>
          </Route>
          <Route path="/explore">
          <Explore></Explore>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/myorder">
            <MyOrder></MyOrder>
          </PrivateRoute>
          <PrivateRoute path="/pay">
            <Payment></Payment>
          </PrivateRoute>
          <PrivateRoute path="/purchase/:productId">
            <Purchase></Purchase>
          </PrivateRoute>

          <Route exact path="/">
            <Home></Home>
          </Route>
          
        </Switch>
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
