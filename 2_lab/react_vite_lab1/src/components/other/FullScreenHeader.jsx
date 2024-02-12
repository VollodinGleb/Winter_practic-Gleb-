import { createUseStyles } from "react-jss";
import ArrowButton from "../buttons/ArrowButton";
import RadiusButton from "../buttons/RadiusButton";

// const FullScreenHeaderStyles = createUseStyles({
//     header : {
//         color: props => props.color,
//         height: props => props.height
//     },
    
//     wrapContainer : {
//         display: "flex",
//         justifyContent: "center",
//         flexWrap: "wrap",
//         alignItems: "center",
//         height: "100%"
//     },

//     headerDescription : {
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "flex-start",
//         alignItems: "center",
    
//         marginBottom: "150px",

//         '& > *': {
//             width: "70%"
//         },

//         '& > h1': {
//             fontSize: "50px",
//             lineHeight: "50px"
//         },

//         '& > p' : {
//             color: props => props.textColor
//         }
//     },

//     linkButtons : {
//         marginTop: "55px"
//     }
// })

export default function FullScreenHeader({ children, status }) {
    // const classes = FullScreenHeaderStyles()
    return (
        <div className="header">
            <div className="wrap-container">
                <div className="header-description">

                    {children}

                    <div className="link-buttons" style={status === "act" ? {} : {"display": "none"}}>
                        <RadiusButton href={"./"} text={"Vie our work"}/>
                        <ArrowButton href={"./"} text={"Vie Pricingk"} spacing={"25px"}/>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
// FullScreenHeader.defaultProps = {
//     color: '#fff',
//     height: '100vh',
//     textColor: '#BBBBCB'
// }