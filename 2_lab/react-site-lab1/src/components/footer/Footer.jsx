import logo from '../../svg/logo.svg'
import SocialLinks from '../other/SocialLinks';
// import WrapContainer from '../other/WrapContainer';
import BottomFooter from './BottomFooter';
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
                        
                        {/* <WrapContainer>
                            <div className="email">
                                <p>Email:</p>
                                <a href="https://mail.google.com">contact@website.com</a>
                            </div>
                            <div className="phone">
                                <p>Phone:</p>
                                <a href="">0927 6277 28525</a>
                            </div>
                        </WrapContainer> */}
                    </div>
                </div>
            </div>

            <BottomFooter />
            
        </footer>
    );
}