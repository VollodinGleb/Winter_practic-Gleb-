import {createUseStyles} from 'react-jss'
import Menu from './Menu'
import NavionToogle from './NavToogle';

const NavBarStyles = createUseStyles({
    mainNavMenu : {
        display: "inline",
        position: "fixed",
        width: "100%",
        top: "0",
        left: "0",
        right: "0",
        transition: "top 0.3s",
        backgroundColor: "#1C1E53"
    },
    
    navMenu : {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    margin: "auto",
    height: "80px",
    width: "90%"
    },
    
    logo: {
        cursor: "pointer",
        marginRight: "auto",
        
        '@media(max-width: 330px)' : {
            width: "40%",
            marginRight: "5px"
        }
    },

    navContainer : {
        width: "70%",
        marginRight: "3%",
        
        '@media (max-width: 1100px)' : {
            display: "none"
        }
    },

    ctaButton : {
        padding: "15px 20px",
        flexShrink: "0",
    
        cursor: "pointer",
        borderRadius: "41px",
        border: "2px solid rgba(244, 246, 252, 0.20)",
        backgroundColor: "#1C1E53",
        color: "#FFFFFF",

        '&:hover': {
            borderColor: "#83838d",
            backgroundColor: "hsl(238, 59%, 30%)"
        },
        
        '@media(max-width: 330px)' : {
            padding: "5px 10px"
        }
    },
})

export default function NavBar( {logo} ) {
    const classes = NavBarStyles()
    return (
        <nav className={classes.mainNavMenu} id="main-nav-menu" >
            <div className={classes.navMenu}>
                <img src={logo} alt="logo" className={classes.logo}/>
                <div className={classes.navContainer}>
                    
                    <Menu />
                
                </div>

                <a className={classes.ctaButton} href="">Contact us</a>

                <NavToogle />
                
            </div>
        </nav>
    );
  }