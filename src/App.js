
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/Body/About/About';
import Appointment from './components/Body/Appointment/Appointment';
import Blog from './components/Body/Blog/Blog';
import MiddlePoster from './components/Body/MiddlePoster/MiddlePoster';
import Package from './components/Body/Package/Package';
import Services from './components/Body/Services/Services';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import Login from './components/Form/Login/Login';
import Register from './components/Form/Register/Register';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './contex/AuthProvider';

function App() {
  return (
    <div className="">
     {/* Cotext Api & React router used here */}
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/appointment">
            <Appointment></Appointment>
          </PrivateRoute>
          <PrivateRoute path="/details/:serviceId">
            <Details></Details>
          </PrivateRoute>
          <PrivateRoute path="/blog">
          <Blog></Blog>
          </PrivateRoute>
          <Route path="/services">
          <Services></Services>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/package">
            <Package></Package>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route  path="/middlePoster">
            <MiddlePoster />
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>

  
    </div>
  );
}

export default App;
