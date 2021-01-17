import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <>
      <section className="section section--login">
        <div className="inner">
          <div className="section--login">
            <div className="logo-group">
              <Link to="/">
                <img src="/images/logo.png" alt="LOGO" />
              </Link>
            </div>
            <div className="login-group">
              <ul className="input-group">
                <li>
                  <input
                    className="input--text"
                    type="text"
                    placeholder="아이디"
                  />
                </li>
                <li>
                  <input
                    className="input--text"
                    type="text"
                    placeholder="비밀번호"
                  />
                </li>
                <li>
                  <button className="btn btn--primary">로그인</button>
                </li>
              </ul>
              <p>
                <Link to="/signup">회원가입</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
