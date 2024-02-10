import NavBar from './headerComponents/NavBar';
import logo from './../../assets/logo.svg';
import './header.css';

export default function Header({ children }) {
    return (
        <header id="nav">
            <NavBar logo={logo}></NavBar>
            <div className="responsive-menu">
                <div className="cross-click">
                    <span>&#215;</span>
                </div>
                <div className="menu-container">
                    <ul className="responsive-navbar">
                        <li className="responsive-item"><a href="">Home</a></li>
                        <li className="responsive-item"><a href="">About us</a></li>
                        <li className="responsive-item"><a href="">Features</a></li>
                        <li className="responsive-item"><a href="">Pricing</a></li>
                        <li className="responsive-item"><a href="">FAQ</a></li>
                        <li className="responsive-item"><a href="">Blog</a></li>
                    </ul>
                </div>
            </div>
            <div className="spacer" style={{"height" : "80px"}}></div>

            {children}
            
        </header>
    );
  }