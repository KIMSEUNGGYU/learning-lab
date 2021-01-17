import { Link } from "react-router-dom";
import "./Home.css";

function Login() {
  return (
    <>
      <section className="section section--home">
        <div className="inner">
          <div className="main">
            <div className="summary">
              <h2 className="summary__title">
                How people manage&nbsp;schedule
              </h2>
              <p className="summary__description">
                생각 그리고 계획만 세우지 말고 실천을 하자..
              </p>
            </div>
            <ul className="btn-group">
              <Link to="demo">
                <button className="btn">DEMO</button>
              </Link>
              <Link to="login">
                <button className="btn">LOGIN</button>
              </Link>
            </ul>
          </div>

          <div className="main__logo">
            <img
              src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
