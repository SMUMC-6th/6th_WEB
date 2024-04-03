import React from 'react';
import * as Ct from './Content.style';

const Content = ({ showContent }) => {
    return (
        <div>
            {showContent && (
                <>
                    <Ct.Hero>
                        Hero
                    </Ct.Hero>
                    <Ct.container3>
                        <Ct.MAIN>
                            MAIN
                        </Ct.MAIN>
                        <Ct.container4>
                            <Ct.IMAGE>
                            </Ct.IMAGE>
                            <Ct.EXTRA>
                                EXTRA
                            </Ct.EXTRA>
                        </Ct.container4>
                    </Ct.container3>
                </>
            )}
            {!showContent && <Ct.HiddenContent style={{height: '65vh'}} />}
        </div>
    );
};

export default Content;
