import './App.css';
import { Route, Switch } from "react-router-dom";
import configureStore from './redux/store';
import { Provider } from 'react-redux';
import Signup from './containers/signup';
import Login from './containers/Login';

function App() {
  const store = configureStore()

  return (
    <>
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