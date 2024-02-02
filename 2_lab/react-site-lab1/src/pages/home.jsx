import Card from '../components/cards/Card';
import Header from '../components/header/Header'
import FullScreenHeader from '../components/other/FullScreenHeader';
import WrapContainer from '../components/other/WrapContainer';
import Heading from '../components/section/Heading';
import Section from '../components/section/Section';
import '../style/home.css'

export default function Home() {
    return (
        <>
            <Header>
                <FullScreenHeader />
            </Header>

            <main id="content">
                <Section id="How-work">
                    <Heading className={"work-heading"}>
                        <h2>How we work</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam quos totam ducimus.</p>
                        <a href="">Get into with us</a>
                    </Heading>
                    
                    <WrapContainer>
                        <div className="work-cards">
                            <Card title={"Strategy"} text={"Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam."}></Card>
                            <Card title={"Strategy"} text={"Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam."}></Card>
                            <Card title={"Strategy"} text={"Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam."}></Card>
                            <Card title={"Strategy"} text={"Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam."}></Card>
                        </div>
                    </WrapContainer>
                </Section>
            </main>
        </>
    );
}