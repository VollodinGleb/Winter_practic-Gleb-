import styled from 'styled-components';

const Button = styled.a`
    display: inline-block;
    padding: 15px 10px 15px;
    min-width: 200px;
    border-radius: 30px;
    text-align: center;
    background-color: #FCD980;
    color: #000;
`

export default function RadiusButton({ href, text }) {
    return (
        <Button href={href}>{text}</Button>
    );
}