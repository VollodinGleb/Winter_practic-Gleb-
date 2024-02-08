import styled from 'styled-components';

const Button = styled.a`
    display: inline-block;
    padding: 10px 10px 10px 10px;
    margin-left: 25px;
    text-align: center;
    color: #fff;
`

const Arrow = styled.span`
    font-size: 22px;
    font-weight: 600;
`

export default function ArrowButton({href, text}) {
    return (
        <Button href={href}>{text} <Arrow>&#8594;</Arrow></Button>
    );
}