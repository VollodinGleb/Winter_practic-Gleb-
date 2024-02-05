import Menu from './Menu'

export default function NavBar( {logo} ) {
    return (
        <nav id="main-nav-menu" >
            <div className="nav-menu">
                <img src={logo} alt="logo" className="logo"/>
                <div className="nav-container">
                    
                    <Menu />
                
                </div>

                <a className="cta-button" href="">Contact us</a>
                
                <button className="navigation-toggle">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </nav>
    );
  }