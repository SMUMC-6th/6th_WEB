import styled  from 'styled-components';

const Container = styled.div`
    display:flex;
    flex-direction:row;
    color:white;
    height:150px    ;
`;

const Header = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    background-color:black;
    width:30%;
`;


const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:red;
    width:70%;
`;

export { Container, Header, Menu };