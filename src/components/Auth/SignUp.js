import {BrowserRouter as Router, Link} from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [user, setUser] = useState({})
  const [username, setUserName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassWord] = useState()
  const [token, setToken] = useState()
  
  const hanlderSignUp = (e) => {
    e.preventDefault();
    fetch('https://conduit.productionready.io/api/users',
      {
        method: "POST",
        user: {
          username: username,
          email: email,
          password: password
        }
      },
    )
      .then(res => res.json())
      .then(response => {
        setUserName(username)
        setEmail(email)
        setPassWord(password)
        console.log(response)
      })
      .catch(error => console.log(error))
  }

  return (
      <div className="auth-page">
        <div className="container page">
        <div className="row">
        <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center">Sign Up</h1>
          <p className="text-xs-center">
            <Link className="" to="/sign-in">Have an account?</Link>
          </p>
          <form>
            <fieldset>
              <fieldset className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Username" onChange={e => setUserName(e.target.value)} />
              </fieldset>
              <fieldset className="form-group">
                <input type="email" className="form-control form-control-lg" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
              </fieldset>
              <fieldset className="form-group">
                <input type="password" className="form-control form-control-lg" placeholder="Password" onChange={e => setPassWord(e.target.value)}/>
              </fieldset>
                <button className="btn btn-lg btn-primary pull-xs-right" onClick={hanlderSignUp}>Sign in</button>
              </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}   
export default SignUp
