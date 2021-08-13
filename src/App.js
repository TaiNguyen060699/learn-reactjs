import './App.css';
import {BrowserRouter as Router, Switch,  Route, Link} from "react-router-dom";
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Footer from './components/Footer'
import Home from './components/Home/HomePage';
function App() {
  return (
    <>
      <Router>
        <div className="data-reactroot">
        <nav className="navbar navbar-light">
          <div className="container">
            <Link className="navbar-brand" to="/">conduit</Link>
            <ul className="nav navbar-nav pull-xs-right">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sign-in">Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/sign-up'>Sign up</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/' component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router> 
    </>
  );
}

export default App;
