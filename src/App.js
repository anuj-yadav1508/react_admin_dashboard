import React from 'react'
import Home from './pages/home/Home'
import EditUser from './pages/editUser/EditUser'
import CreateUser from './pages/createUser/CreateUser'
import EditProduct from './pages/editProduct/EditProduct'
import CreateProduct from './pages/createProduct/CreateProduct'
import Users from './pages/users/Users'
import Products from './pages/products/Products'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AnalyticsPage from './pages/analyticsPage/AnalyticsPage'

function App() {
  return (
    <>
    <Router>
      <Switch> 
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/users">
          <Users />
        </Route>

        <Route path="/edituser/:userid">
          <EditUser />
        </Route>


        <Route path="/createuser/:userid">
          <CreateUser />
        </Route>


        <Route path="/products">
          <Products />
        </Route>

        <Route path="/editproduct/:productid">
          <EditProduct />
        </Route>

        <Route path="/createproduct/:productid">
          <CreateProduct />
        </Route>

        <Route path="/analyticspage">
          <AnalyticsPage />
        </Route>

      </Switch>
    </Router>
    </>
  );
}

export default App;
