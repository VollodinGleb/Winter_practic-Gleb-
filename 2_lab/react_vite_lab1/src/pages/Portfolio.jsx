import Header from '../components/header/Header'
import FullScreenHeader from '../components/other/FullScreenHeader';
import Section from '../components/section/Section';
import WrapContainer from '../components/other/WrapContainer';
import Card from '../components/cards/Card';
import Footer from '../components/footer/Footer';
import RadiusButton from '../components/buttons/RadiusButton';
import '../style/portfolio.css'
import project1 from '../assets/projects/1project.jpg'

export default function Portfolio() {
    return (
        <>
            <Header>
                <FullScreenHeader />
            </Header>

            <main id="content">
                <Section id="Portfolio">

                        <WrapContainer>
                            <div className="projects-cards">
                                <Card image={project1} title={"Hands-on approach"} text={
                                    "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                                    }></Card>
                                <Card image={project1} title={"Hands-on approach"} text={
                                    "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                                    }></Card>
                                <Card image={project1} title={"Hands-on approach"} text={
                                    "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                                    }></Card>
                                <Card image={project1} title={"Hands-on approach"} text={
                                    "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                                    }></Card>
                                <Card image={project1} title={"Hands-on approach"} text={
                                    "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                                    }></Card>
                                <Card image={project1} title={"Hands-on approach"} text={
                                    "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                                    }></Card>
                            </div>
                        </WrapContainer>
                </Section>

                <Section id="cta-section">
                    <h1>Let`s build something great together</h1>
                    <p>
                        Nullam vitae purus at tortor mattis dapibus. 
                        Morbi purus est, ultricies nec dolor sit amet, 
                        scelerisque cursus purus.
                    </p>
                    <RadiusButton text="Contuct Us"/>
                </Section>
            </main>

            <Footer>
                
            </Footer>
        </>
    );
}