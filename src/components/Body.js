import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import Center from './Center';
import Left from './Left';
import Right from './Right';

const Body = () => {
    return (
        <Fragment>
        <div className='body-header'>
            <span><b>MEMES</b> Popular</span>
        </div>
        <div className="body">
            <Left/>
            <Center/>
            <Right/>
        </div>
        </Fragment>
    );
};

export default Body;