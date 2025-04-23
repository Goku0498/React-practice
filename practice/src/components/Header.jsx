import Logo from "../assets/logo.png"
import "./Header.css";

const Header = () => {
  return (
    <header>
        <img src={Logo} alt="" />
        <a href="/">Home</a>
    </header>
  )
};

export default Header