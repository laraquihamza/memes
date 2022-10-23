import React,{Fragment} from 'react';
import Left from './Left';
import Center from './Center';
import Right from './Right';
import CenterMeme from './CenterMeme';
import LeftMeme from './LeftMeme';
const BodyMeme = () => {
        return (
            <Fragment>
            <div className="body body-meme">
                <LeftMeme/>
                <CenterMeme/>
                <Right/>
            </div>
            </Fragment>
        );
};

export default BodyMeme;