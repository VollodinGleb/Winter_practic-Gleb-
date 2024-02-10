import Card from '../components/cards/Card';
import Header from '../components/header/Header'
import FullScreenHeader from '../components/other/FullScreenHeader';
import WrapContainer from '../components/other/WrapContainer';
import Heading from '../components/section/Heading';
import Section from '../components/section/Section';
import '../style/home.css'
import pointer1 from '../assets/cards/work/pointer1.svg'
import clients from '../assets/cards/features/clients.svg'
import hands from '../assets/blog/hands.jpg'
import computers from '../assets/blog/computers.jpg'
import PCperson from '../assets/blog/PCperson.jpg'
import project1 from '../assets/projects/1project.jpg'
import Footer from '../components/footer/Footer';
import ArrowButton from '../components/buttons/ArrowButton';
import Block from '../components/cards/Block';
import RadiusButton from '../components/buttons/RadiusButton';

export default function Home() {
    return (
        <>
            <Header>
                <FullScreenHeader status="act">
                    <h1>Building stellar websites for early startups</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Soluta perspiciatis 
                        enim itaque ratione esse? Officiis, 
                        culpa quisquam.
                    </p>
                </FullScreenHeader>
            </Header>

            <main id="content">
                <Section id="How-work">
                    <Heading className={"work-heading"}>
                        <h2>How we work</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam quos totam ducimus.</p>
                        <ArrowButton href={"./"} color={'#2405F2'} text={"Get in touch with us"}/>
                    </Heading>
                    
                    <WrapContainer>
                        <div className="work-cards">
                            <Card image={pointer1} title={"Strategy"} text={"Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam."}></Card>
                            <Card image={pointer1} title={"Strategy"} text={"Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam."}></Card>
                            <Card image={pointer1} title={"Strategy"} text={"Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam."}></Card>
                            <Card image={pointer1} title={"Strategy"} text={"Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam."}></Card>
                        </div>
                    </WrapContainer>
                </Section>

                <Section id="Features">
                    <Heading className={"features-heading"}>
                        <h4>Features</h4>
                        <h2>Design that solves problems, one product at a time</h2>
                    </Heading>

                    <WrapContainer>
                        <div className="feature-cards">
                            <Card image={clients} title={"Hands-on approach"} text={
                                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                                }></Card>
                            <Card image={clients} title={"Hands-on approach"} text={
                                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                                }></Card>
                            <Card image={clients} title={"Hands-on approach"} text={
                                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                                }></Card>
                            <Card image={clients} title={"Hands-on approach"} text={
                                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                                }></Card>
                            <Card image={clients} title={"Hands-on approach"} text={
                                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                                }></Card>
                            <Card image={clients} title={"Hands-on approach"} text={
                                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."
                                }></Card>
                        </div>
                    </WrapContainer>
                </Section>

                <Section id="Our-projects">
                    <Heading className={"projects-heading"}>
                        <h2>View our projects</h2>
                        <ArrowButton href={"./"} color={'#2405F2'} text={"View More"}/>
                    </Heading>

                    <WrapContainer>
                        <div className="project-blocks">
                            <Block image={project1} title={"Project1"} text={
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eaque necessitatibus suscipit assumenda veritatis atque sunt, minus nesciunt nostrum aperiam."
                        }><RadiusButton href={"./"} text={"View More"}/></Block>
                            <Block image={project1} title={"Project1"} text={
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eaque necessitatibus suscipit assumenda veritatis atque sunt, minus nesciunt nostrum aperiam."
                        }><RadiusButton href={"./"} text={"View More"}/></Block>
                            <Block image={project1} title={"Project1"} text={
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eaque necessitatibus suscipit assumenda veritatis atque sunt, minus nesciunt nostrum aperiam."
                        }><RadiusButton href={"./"} text={"View More"}/></Block>
                        </div>
                    </WrapContainer>
                </Section>

                <Section id="Our-blog">
                    <Heading className={"blog-heading"}>
                        <h2>Our blog</h2>
                    </Heading>

                    <WrapContainer>
                        <div className="blog-cards">
                            <Card image={hands} date={"19 Jan 2022"} title={"How one Webflow user grew his single person consultancy from $0-100K in 14 months"} text={
                                "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
                                }>
                                    <ArrowButton href={"./"} color={'#2405F2'} text={"Read More"}/>
                                </Card>
                            <Card image={computers} date={"19 Jan 2022"} title={"How one Webflow user grew his single person consultancy from $0-100K in 14 months"} text={
                                "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
                                }>
                                    <ArrowButton href={"./"} color={'#2405F2'} text={"Read More"}/>
                                </Card>
                            <Card image={PCperson} date={"19 Jan 2022"} title={"How one Webflow user grew his single person consultancy from $0-100K in 14 months"} text={
                                "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
                                }>
                                    <ArrowButton href={"./"} color={'#2405F2'} text={"Read More"}/>
                                </Card>
                        </div>
                    </WrapContainer>
                </Section>
            </main>

            <Footer />
        </>
    );
}