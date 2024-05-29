import styled from 'styled-components';

const CounterContainer = styled.div`
    background-color: #808080;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    margin: 0 auto;
    width: 80%;
    border-radius: 10px;

    h1 {
        font-size: 2.5rem;
        color: black;
    }

    h2 {
        font-size: 2rem;
        color: blue;
    }

    .button-group {
        display: flex;
        justify-content: center;
        gap: 10px;
    }

    button {
        background-color: blue;
        color: white;
        border: none;
        border-radius: 10px;
        font-size: 1rem;
    }
`

export default CounterContainer;
