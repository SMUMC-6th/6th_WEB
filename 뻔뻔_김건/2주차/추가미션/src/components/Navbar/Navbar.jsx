import React from 'react';
import * as MD from './Navbar.style';

const Navbar = ({ toggleContent, showContent }) => {
    return (
        <div>
            <MD.Container>
                <MD.Header>
                    HEAD
                </MD.Header>
                <MD.Menu>
                    <button onClick={toggleContent}>
                        {showContent ? 'Content 보지 않기!' : 'Content 보기!'}
                    </button>
                </MD.Menu>
            </MD.Container>
        </div>
    );
};

export default Navbar;
