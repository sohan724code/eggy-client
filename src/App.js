
import './App.css';
import AuthProvider from './context/AuthProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './componentes/Home/Home';
import Footer from './componentes/Footer/Footer';
import Header from './componentes/Header/Header';
import Items from './componentes/Items/Items';
import AboutUs from './componentes/AboutUs/AboutUs';
import Login from './componentes/Login/Login';
import PlaceOrder from './componentes/PlaceOrder/PlaceOrder';
import PrivateRoute from './componentes/PrivateRoute/PrivateRoute';
import AddItems from './componentes/AddItems/AddItems';
import MyOrders from './componentes/MyOrders/MyOrders';
import ManageOrders from './componentes/ManageOrders/ManageOrders';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/items">
              <Items></Items>
            </Route>
            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/additems">
              <AddItems></AddItems>
            </Route>
            <Route path="/myorders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/manageorders">
              <ManageOrders></ManageOrders>
            </Route>
            <PrivateRoute path='/placeOrder/:id'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route exact path="/">
              <Home></Home>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
