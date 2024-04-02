import styled from 'styled-components';

const Hero = styled.div`
    display:flex;
    flex-grow:1;
    justify-content: center;
    align-items: center;
    background-color:skyblue;
    color:white;
    height: 20vh;
`;

const container3 = styled.div`
    flex-grow:1;
    display:flex;
    justify-content: space-between;
    height:45vh;
    color:white;
`;

const MAIN = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: #001000;
    width:40%;
`;

const container4 = styled.div`
    display:flex;
    flex-direction: column;
    color:black;
    width:30%;
`;

const IMAGE = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://source.unsplash.com/800x600/?nature");
    height:50%;
`;

const EXTRA = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    background-color:greenyellow;
    height:50%;
`;

const HiddenContent = styled.div`
    display: none;
`;

export { Hero, container3, MAIN, container4, IMAGE, EXTRA, HiddenContent };
