import ArrowButton from "../buttons/ArrowButton";
import RadiusButton from "../buttons/RadiusButton";

export default function FullScreenHeader({ children }) {
    return (
        <div className="header">
            <div className="wrap-container">
                <div className="header-description">

                    <h1>Building stellar websites for early startups</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Soluta perspiciatis 
                        enim itaque ratione esse? Officiis, 
                        culpa quisquam.
                    </p>
                    <div className="link-buttons">
                        <RadiusButton href={"./"} text={"Vie our work"}/>
                        <ArrowButton href={"./"} text={"Vie Pricingk"}/>
                    </div>

                    {children}
                    
                </div>
            </div>
        </div>
    );
}