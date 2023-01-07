import LoginButton from "../components/login/LoginButton"
import LoginInput from "../components/login/LoginInput"
import Image from "next/image"
import Head from "next/head"

export default function Login() {
  return (
    <>
      <div className="login-wrapper">
        <div className="login-container">
          <div className="login-container-inner">
            <div className="title">
              <h3>Orion</h3>
            </div>

            <LoginInput type="text" label="Username" />
            <LoginInput type="password" label="Password" />
            {/* <div className="forgot-password link">Forgot your password?</div> */}

            <div className="remember-me">
              <input type="checkbox" name="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <LoginButton />

            <div className="register">
              Don't have an account? <span className="link">Register here</span>{" "}
            </div>
          </div>

          {/* <div className="copyright">Copyright &#169; 2023 peciak.xyz</div> */}
        </div>

        <div className="login-image">
          <Image alt="orion" src="/orion.jpg" fill />
        </div>
      </div>
    </>
  )
}
