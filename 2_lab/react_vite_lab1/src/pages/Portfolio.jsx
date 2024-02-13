import Header from '../components/header/Header'
import FullScreenHeader from '../components/other/FullScreenHeader';
import Section from '../components/section/Section';
import WrapContainer from '../components/other/WrapContainer';
import Card from '../components/cards/Card';
import Footer from '../components/footer/Footer';
import '../style/portfolio.css'

export default function Portfolio() {
    return (
        <>
            <Header>
                <FullScreenHeader />
            </Header>

            <main id="content">
                <Section id="Features">

                        <WrapContainer>
                            <div className="projects-cards">
                                <Card /*image={'clients'}*/ title={"Hands-on approach"} text={
                                    "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                                    }></Card>
                                <Card /*image={'clients'}*/ title={"Hands-on approach"} text={
                                    "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                                    }></Card>
                                <Card /*image={'clients'}*/ title={"Hands-on approach"} text={
                                    "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                                    }></Card>
                                <Card /*image={'clients'}*/ title={"Hands-on approach"} text={
                                    "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                                    }></Card>
                                <Card /*image={'clients'}*/ title={"Hands-on approach"} text={
                                    "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                                    }></Card>
                                <Card /*image={'clients'}*/ title={"Hands-on approach"} text={
                                    "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                                    }></Card>
                            </div>
                        </WrapContainer>
                </Section>
            </main>

            <Footer>
                
            </Footer>
        </>
    );
}