import Header from '../components/header/Header';
import FullScreenHeader from '../components/other/FullScreenHeader';
import Section from '../components/section/Section';
import WrapContainer from '../components/other/WrapContainer';
import Card from '../components/cards/Card';
import Footer from '../components/footer/Footer';
import RadiusButton from '../components/buttons/RadiusButton';
import ArrowButton from '../components/buttons/ArrowButton';
import '../style/portfolio.css';
import project1 from '../assets/projects/1project.jpg';
import SocialIcons from '../components/other/SocialLinks';
import Icon from '../components/other/Icon';
import facebook from '../assets/social/facebook_black.svg';

export default function Portfolio() {
  return (
    <>
      <Header>
        <FullScreenHeader backColor={'#F4F6FC'} textAlign={'center'}>
          <h3>What we created</h3>
          <h1>Our Work Portfolio</h1>
          <p>
            We help teams create great digital products by providing them with tools and technology
            to make the design-to-code process universally accessible.
          </p>
          <SocialIcons justify={'center'}>
            <Icon href={'https://www.facebook.com/'} icon={facebook} />
            <Icon href={'https://www.facebook.com/'} icon={facebook} />
            <Icon href={'https://www.facebook.com/'} icon={facebook} />
            <Icon href={'https://www.facebook.com/'} icon={facebook} />
          </SocialIcons>
        </FullScreenHeader>
      </Header>

      <main id="content">
        <Section id="Portfolio">
          <WrapContainer>
            <div className="projects-cards">
              <Card
                image={project1}
                title={'Hands-on approach'}
                text={
                  'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.'
                }
              >
                <ArrowButton text={'View More'} color={'#2405F2'} />
              </Card>
              <Card
                image={project1}
                title={'Hands-on approach'}
                text={
                  'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.'
                }
              >
                <ArrowButton text={'View More'} color={'#2405F2'} />
              </Card>
              <Card
                image={project1}
                title={'Hands-on approach'}
                text={
                  'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.'
                }
              >
                <ArrowButton text={'View More'} color={'#2405F2'} />
              </Card>
              <Card
                image={project1}
                title={'Hands-on approach'}
                text={
                  'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.'
                }
              >
                <ArrowButton text={'View More'} color={'#2405F2'} />
              </Card>
              <Card
                image={project1}
                title={'Hands-on approach'}
                text={
                  'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.'
                }
              >
                <ArrowButton text={'View More'} color={'#2405F2'} />
              </Card>
              <Card
                image={project1}
                title={'Hands-on approach'}
                text={
                  'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.'
                }
              >
                <ArrowButton text={'View More'} color={'#2405F2'} />
              </Card>
            </div>
          </WrapContainer>
        </Section>

        <Section id="cta-section">
          <h1>Let`s build something great together</h1>
          <p>
            Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit
            amet, scelerisque cursus purus.
          </p>
          <RadiusButton text="Contuct Us" />
        </Section>
      </main>

      <Footer></Footer>
    </>
  );
}
