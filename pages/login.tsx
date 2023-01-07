import Image from "next/image"
import Head from "next/head"

export default function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-container-inner">
          <div className="title">
            <h3>Orion</h3>
          </div>

          <label className="login-input-block login-input-block-username">
            <span>Username</span>
            <input name="username" type="text" required />
          </label>

          <label className="login-input-block">
            <span>Password</span>
            <input name="password" type="password" required />
          </label>

          {/* <div className="forgot-password link">Forgot your password?</div> */}

          <div className="remember-me">
            <input type="checkbox" name="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button className="login-button">
            <span className="login-button-text">Log in</span>
          </button>

          <div className="register">
            Don't have an account?{" "}
            <a href="#" className="link">
              Register here
            </a>
          </div>
        </div>

        <div className="copyright">Copyright &#169; 2023 peciak.xyz</div>
      </div>

      <div className="login-image">
        <Image alt="orion" src="/orion.jpg" fill />
      </div>
    </div>
  )
}
