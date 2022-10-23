import React from 'react';
import GridMemes from './GridMemes';

const CenterUpload = () => {
    return (
        <div className='center'>
            <div className='form-upload'>
            <div className='field'>
                <label>Title</label>
                    <input></input>
            </div>
            <div className='field'>
                 <label>Tags</label>
                    <input></input>
            </div>
            <button className='image-selector'>
                Choose Image
            </button>
            <button className="upload-button">Submit</button>
            </div>
        </div>
    );
};

export default CenterUpload;