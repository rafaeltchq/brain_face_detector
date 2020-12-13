import React from 'react';
import './image-face-detector.css';

const ImageFaceDetector = ({ imageFace, box }) => {
    const sqrBoxes = box.map((face, i) => {
        return (
            <div
            key={i}
            className='sqrFaceBox'
            style={{
                top: face.topRow,
                bottom: face.bottomRow,
                left: face.leftCol,
                right: face.rightCol
            }}
            >
            </div>
        )}
        )
    return (
        <div className='imageDiv center mt3'>
            <div>
                {sqrBoxes}
                <img src={imageFace} alt='' id='imgDctFace' className='img'/>
            </div>
        </div>
    );
};

export default ImageFaceDetector;