import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Home/NotFound/NotFound';
import Booking from './Pages/Booking/Booking';
import LogIn from './Pages/LogIn/Firebase/LogIn';
import Header from './Pages/Header/Header';
import AuthContextProvider from './Context/AuthContextProvider';
import PrivetRoute from './Pages/LogIn/ProvetRoute/PrivetRoute';
import AddService from './Pages/AddService/AddService';


function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <PrivetRoute path="/booking/:serviceId">
            <Booking></Booking>
          </PrivetRoute>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
