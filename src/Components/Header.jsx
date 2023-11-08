import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="nav">
      <p className="title">React Project</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/cars">Cars</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
