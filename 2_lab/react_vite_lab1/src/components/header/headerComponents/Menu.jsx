import {createUseStyles} from 'react-jss'

const MenuStyles = createUseStyles({
    Menu : {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: "5%",
        listStyle: "none",
    },

    item : {
        '& > a': {
            color: "#BBBBCB",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "28px",
            padding: "10px"
        },
        '& > a:hover': {
            color: "#FFFFFF",
        }
    },
    
    bottomMenu : {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: "4.5em",
        margin: "0",
        padding: "0",
        listStyle: "none",

        '& a': {
            color: "#000",
        },

        '& a:hover': {
            textDecoration: "underline",
            color: "#000"
        },

        '@media (max-width: 1100px)' : {
            '&' : {
                display: "none"
            }
        }
    }

})

export default function Menu({ id, useFor }) {
    const classes = MenuStyles() 
    return (
        <ul id={id} className={(useFor === 'header' ? classes.Menu : useFor === 'footer' ? classes.bottomMenu : classes.Menu) || classes.bottomMenu}>
            <li className={classes.item}><a href="">Home</a></li>
            <li className={classes.item}><a href="">About us</a></li>
            <li className={classes.item}><a href="">Features</a></li>
            <li className={classes.item}><a href="">Pricing</a></li>
            <li className={classes.item}><a href="">FAQ</a></li>
            <li className={classes.item}><a href="">Blog</a></li>
        </ul>
    );
}