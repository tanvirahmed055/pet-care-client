import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ServiceDetails from './components/Home/ServiceDetails/ServiceDetails';
import Login from './components/Login/Login/Login';
import Registration from './components/Login/Registration/Registration';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import NotFound from './components/Home/NotFound/NotFound';
import Store from './components/Store/Store/Store';
import StoreItemDetail from './components/Store/StoreItemDetail/StoreItemDetail';
import Admin from './components/Admin/Admin/Admin';
import AddService from './components/Admin/ManageService/AddService/AddService';
import UpdateService from './components/Admin/ManageService/UpdateService/UpdateService';
import ManageServices from './components/Admin/ManageService/ManageService/ManageService';


function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <PrivateRoute exact path="/services/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Registration></Registration>
            </Route>
            <PrivateRoute exact path="/store">
              <Store></Store>
            </PrivateRoute>
            <PrivateRoute exact path="/items/:itemId">
              <StoreItemDetail></StoreItemDetail>
            </PrivateRoute>
            <Route exact path="/admin">
              <Admin></Admin>
            </Route>
            <Route exact path="/admin/manageService">
              <ManageServices></ManageServices>
            </Route>
            <Route exact path="/admin/manageService/addService">
              <AddService></AddService>
            </Route>
            <Route exact path="/admin/manageService/updateService/:id">
              <UpdateService></UpdateService>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
