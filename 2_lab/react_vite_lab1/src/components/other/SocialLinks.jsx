import styled from 'styled-components';
import facebook from '../../assets/social/facebook.svg'

const Social = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: ${(props) => props.justify || 'start'};
    gap: 10%;
    margin-bottom: 20px;
    padding: 0;
    list-style: none;
`

function Icon({ icon, href }) {
    return (
        <li><a href={href}><img src={icon} alt="" /></a></li>
    );
}

export default function SocialIcons({ justify }) {
    return (
        <Social justify={justify}>
            <Icon href={"https://www.facebook.com/"} icon={facebook}></Icon>
            <Icon href={"https://www.facebook.com/"} icon={facebook}></Icon>
            <Icon href={"https://www.facebook.com/"} icon={facebook}></Icon>
            <Icon href={"https://www.facebook.com/"} icon={facebook}></Icon>
        </Social>
    );
}