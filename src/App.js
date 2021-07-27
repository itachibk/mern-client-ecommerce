import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Signin from './containers/Signin';
import Home from './containers/Home';
import Signup from './containers/Signup';




function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signin' component={Signin} />
          <Route path='/signup' component={Signup} />
        </Switch>
      </Router>
    </div >
  );
}

export default App;
