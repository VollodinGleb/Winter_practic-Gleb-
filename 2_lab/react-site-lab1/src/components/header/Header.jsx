import NavBar from './headerComponents/NavBar';
import logo from '../../logo.svg';
import './header.css';

export default function Header({ children }) {
    return (
        <header id="nav" style={{height: "100vh"}}>
            <NavBar logo={logo}></NavBar>
            <div className="responsive-menu">
                <div className="cross-click">
                    <span>&#215;</span>
                </div>
                <div className="menu-container">
                    <ul className="responsive-navbar">
                        <li className="responsive-item"><a href="index.html">Home</a></li>
                        <li className="responsive-item"><a href="aboutUs.html">About us</a></li>
                        <li className="responsive-item"><a href="">Features</a></li>
                        <li className="responsive-item"><a href="">Pricing</a></li>
                        <li className="responsive-item"><a href="">FAQ</a></li>
                        <li className="responsive-item"><a href="">Blog</a></li>
                    </ul>
                </div>
            </div>

            {children}
            
        </header>
    );
  }