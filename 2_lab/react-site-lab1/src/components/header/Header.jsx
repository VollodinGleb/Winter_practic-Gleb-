import NavBar from './headerComponents/NavBar';
import FullScreenHeader from
import logo from '../../logo.svg';
import './header.css';

export default function Header() {
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
            <div className="header">
                <div className="wrap-container">
                    <div className="header-description">
                        <h1>Building stellar websites for early startups</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt.
                        </p>
                        <div className="link-buttons">
                            <a className="radius-button" href="portfolio.html">Vie our work</a>
                            <a className="arrow-button" href="">Vie Pricing <span id="right-arrow">&#8594;</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
  }