import React from 'react'; // ✅ Add this line
import { Link } from 'react-router-dom';

export default function AuthForm() {
  const [isLogin, setIsLogin] = React.useState(true);

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={isLogin ? 'active' : ''}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? 'active' : ''}
            onClick={() => setIsLogin(false)}
          >
            SignUp
          </button>
        </div>
        {isLogin ? (
          <div className="form">
            <h2>Login Form</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot Password</a>
            <button>Login</button>
            <p>
              Not a Member?{' '}
              <Link to="/signup" onClick={() => setIsLogin(false)}>
                SignUp now
              </Link>
            </p>
          </div>
        ) : (
          <div className="form">
            <h2>SignUp Form</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button>SignUp</button>
            <p>
              Already a member?{' '}
              <Link to="/login" onClick={() => setIsLogin(true)}>
                Login now
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
