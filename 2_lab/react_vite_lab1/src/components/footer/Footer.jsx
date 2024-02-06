import logo from './../../assets/logo.svg';
import SocialIcons from '../other/SocialLinks';
// import WrapContainer from '../other/WrapContainer';
import BottomFooter from './BottomFooter';
import './footer.css'
import ContactsBlock from '../other/ContactsBlock';

export default function Footer() {
    return (
        <footer id="footer">
            <div className="container-footer">
                <div className="weight-wrap">
                    <div className="discription">
                        <img src={logo} alt="logo" />
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            In aut vitae eligendi, ducimus mollitia fuga totam 
                            distinctio quis sed sit animi, minima ad neque, 
                            fugit facilis sapiente labore tenetur iure?
                        </p>
                    </div>
                    <div className="contacts">
                        <h2>Lets Talk!</h2>
                        <p>
                            We are always open to discuss your project, improve your 
                            online presence and help with your UX/UI design challenges.
                        </p>
                        
                        <SocialIcons/>

                        <ContactsBlock />
                        
                    </div>
                </div>
            </div>

            <BottomFooter />
            
        </footer>
    );
}