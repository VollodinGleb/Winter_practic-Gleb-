import Header from '../components/header/Header';
import FullScreenHeader from '../components/other/FullScreenHeader';
import WrapContainer from '../components/other/WrapContainer';
import Footer from '../components/footer/Footer';
import { createUseStyles } from 'react-jss';
import ContactForm from '../components/other/ContactForm';

// const ContactStyles = createUseStyles({
//   downArrow: {
//     '@media (max-width: 725px)': {
//       '&': {
//         content: `\\2193`,
//       },
//     },
//   },
// });

export default function ContactUs() {
  return (
    <>
      <Header />
      <FullScreenHeader textCenter={'center'} marginBottom={'20px'}>
        <h1>Contatc Us</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, doloremque error.
          Praesentium explicabo aspernatur dolores non ab?
        </p>
        <span style={{ fontSize: '45px', fontWeight: '900' }}>&#8595;</span>
      </FullScreenHeader>

      <main id="content">
        <WrapContainer>
          <ContactForm />
        </WrapContainer>
      </main>

      <Footer />
    </>
  );
}
