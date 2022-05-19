import { Provider } from 'react-redux';
import './App.css';
import Login from './containers/login';
import configureStore from '../src/redux/store'
import Signup from './containers/signup';
import { Route, Switch } from 'react-router-dom';

function App() {
  const store = configureStore()
  return (
    <>
      <div>
        <div className='row py-4'>
          <div className='col-6'>
            <NavLink to="/signup" activeClassName='aptactive'>
              Sign up
            </NavLink>
          </div>
          <div className='col-6'>
            <NavLink to="/login" activeClassName='aptactive'>
              Login
            </NavLink>
          </div>
        </div>
      </div>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </Provider>
    </>
  );
}

export default App;
