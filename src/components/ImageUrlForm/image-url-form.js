import React from 'react';

const ImageUrlForm = ({ inputImageUrl, imageBtnSubmit, resetInput }) => {
       return (
        <div className='flex-wrap-m center w-50-ns shadow-5 h2'>
            <input type='text' className='w-70' id='urlInput'
            placeholder='Insert an URL'
            onChange={inputImageUrl}
            ></input>
            <button type='submit' className='w-15'
                onClick={imageBtnSubmit}
            >Detect</button>
            <button type='reset' onClick={resetInput} className='w-15'>Clear</button>
        </div>
    );
};

export default ImageUrlForm;