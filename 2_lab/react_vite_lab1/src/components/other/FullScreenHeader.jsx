import ArrowButton from "../buttons/ArrowButton";
import RadiusButton from "../buttons/RadiusButton";

export default function FullScreenHeader({ children, status }) {
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