import NavBar from './headerComponents/NavBar';
import logo from './../../assets/logo.svg';
import './header.css';
import ResponsiveMenu from './headerComponents/ResponsiveMenu';

export default function Header({ children }) {
    return (
        <header id="nav" >
            <NavBar logo={logo} />
            
            <ResponsiveMenu />

            <div className="spacer" style={{"height" : "80px"}}></div>

            {children}
            
        </header>
    );
  }