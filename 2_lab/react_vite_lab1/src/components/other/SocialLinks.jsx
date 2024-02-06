import styled from 'styled-components';

const Social = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${(props) => props.justify || 'start'};
    gap: 15%;
    margin-bottom: 20px;

    @media screen and (max-weight: 675px) {
        
    }
`

export default function SocialIcons({ justify }) {
    return (
        <Social className='social-icons' justify={justify}>
            <li><a href="https://www.facebook.com/">@</a></li>
            <li><a href="https://twitter.com/">@</a></li>
            <li><a href="https://www.instagram.com/">@</a></li>
            <li><a href="https://linkedin.com/">@</a></li>
        </Social>
    );
}