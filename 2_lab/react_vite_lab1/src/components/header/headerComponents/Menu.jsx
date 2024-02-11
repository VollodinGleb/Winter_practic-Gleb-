import {createUseStyles} from 'react-jss'

const MenuStyles = createUseStyles({
    menu : {
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
            color: "#FFFFFF"
        }
    }
})

export default function Menu({ id }) {
    const classes = MenuStyles() 
    return (
        <ul id={id} className={classes.menu}>
            <li className={classes.item}><a href="">Home</a></li>
            <li className={classes.item}><a href="">About us</a></li>
            <li className={classes.item}><a href="">Features</a></li>
            <li className={classes.item}><a href="">Pricing</a></li>
            <li className={classes.item}><a href="">FAQ</a></li>
            <li className={classes.item}><a href="">Blog</a></li>
        </ul>
    );
}