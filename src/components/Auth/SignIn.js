import {BrowserRouter as Router, Link} from "react-router-dom";

const SignIn = () => {
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center">Sign In</h1>
          <p className="text-xs-center">
            <Link className="" to="/sign-up">Need an account?</Link>
          </p><form>
            <fieldset>
              <fieldset className="form-group">
                <input type="email" className="form-control form-control-lg" placeholder="Email" /></fieldset>
                <fieldset className="form-group">
                  <input type="password" className="form-control form-control-lg" placeholder="Password" /></fieldset>
                  <button className="btn btn-lg btn-primary pull-xs-right" type="submit">Sign in</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SignIn
