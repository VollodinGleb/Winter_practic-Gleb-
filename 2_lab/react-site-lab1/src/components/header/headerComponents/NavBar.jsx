export default function NavBar( {logo} ) {
    return (
        <nav id="main-nav-menu" >
            <div className="nav-menu">
                <img src={logo} alt="logo" className="nav-logo"/>
                <div className="nav-container">
                    <ul className="menu">
                        <li className="item"><a href="index.html">Home</a></li>
                        <li className="item"><a href="aboutUs.html">About us</a></li>
                        <li className="item"><a href="">Features</a></li>
                        <li className="item"><a href="">Pricing</a></li>
                        <li className="item"><a href="">FAQ</a></li>
                        <li className="item"><a href="">Blog</a></li>
                    </ul>
                </div>

                <a className="cta-button" href="contuctUs.html">Contact us</a>
                <button className="navigation-toggle">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </nav>
    );
  }