// import styled from 'styled-components';

// const Button = styled.a`
//     display: inline-block;
//     padding: 15px 10px 15px;
//     min-width: 200px;
//     border-radius: 30px;
//     text-align: center;
//     background-color: #FCD980;
//     color: #000;
// `
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    radiusButton: {
        display: 'inline-block',
        padding: '15px 10px 15px',
        minWidth: '200px',
        borderRadius: '30px',
        textAlign: 'center',
        backgroundColor: '#FCD980',
        color: '#000'
    }
})

export default function RadiusButton({ href, text }) {
    const classes = useStyles()
    return (
        <a className={classes.radiusButton} href={href}>{text}</a>
    );
}