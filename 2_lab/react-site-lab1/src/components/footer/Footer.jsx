import logo from '../../svg/logo.svg'
import Menu from '../header/headerComponents/Menu';
import SocialLinks from '../other/SocialLinks';
import WrapContainer from '../other/WrapContainer';
import './footer.css'

export default function Footer() {
    return (
        <footer id="footer">
            <div className="container-footer">
                <div className="weight-wrap">
                    <div className="discription">
                        <img src={logo} alt="logo" />
                        <p>
                            We are always open to discuss your project and improve your online presence.
                        </p>
                    </div>
                    <div className="contacts">
                        <h2>Lets Talk!</h2>
                        <p>
                            We are always open to discuss your project, improve your 
                            online presence and help with your UX/UI design challenges.
                        </p>
                        
                        <SocialLinks />
                        
                        <WrapContainer>
                            <a href="https://mail.google.com" className="email">contact@website.com</a>
                            <a href="" className="phone">0927 6277 28525</a>
                        </WrapContainer>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container-bottom">
                    <div>
                        <span>Copyright 2022, Finsweet.com</span>
                    </div>
                    
                    <Menu />
                
                </div>
            </div>
        </footer>
    );
}