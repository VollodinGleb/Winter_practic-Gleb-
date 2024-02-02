export default function FullScreenHeader({ children }) {
    return (
        <div className="header">
            <div className="wrap-container">
                <div className="header-description">

                    <h1>Building stellar websites for early startups</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt.
                    </p>
                    <div className="link-buttons">
                        <a className="radius-button" href="">Vie our work</a>
                        <a className="arrow-button" href="">Vie Pricing <span id="right-arrow">&#8594;</span></a>
                    </div>

                    {children}
                    
                </div>
            </div>
        </div>
    );
}