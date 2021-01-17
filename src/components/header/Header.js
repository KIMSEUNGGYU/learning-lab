import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <>
      <header className="section">
        <div className="inner clearfix">
          <div className="logo float--left">
            <Link to="/">TODO</Link>
          </div>
          <div className="menu-group float--right">
            <ul className="menu">
              <li>
                <Link to="/demo">DEMO</Link>
              </li>
              <li>
                <Link to="/login">LOGIN</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
