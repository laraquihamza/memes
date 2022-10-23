import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import Center from './Center';
import CenterUpload from './CenterUpload';
import Left from './Left';
import Right from './Right';

const BodyUpload = () => {
    return (
        <Fragment>
        <div className='body-header'>
            <span><b>UPLOAD</b> Meme</span>
        </div>
        <div className="body">
            <Left/>
            <CenterUpload/>
            <Right/>
        </div>
        </Fragment>
    );
};

export default BodyUpload;