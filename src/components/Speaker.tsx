import React from 'react';

const Speaker: React.FC = () => {
  return (
    <div className='speaker'>
        <div className='dots'>
            <div className='dot-container'>
                <div className="dot"></div>
            </div>
            <div className='dot-container'>
                <div className="dot"></div>
            </div>
            <div className='dot-container'>
                <div className="dot"></div>
            </div>
        </div>
        <div className='dots'>
            <div className='dot-container'>
                <div className="dot"></div>
            </div>
            <div className='dot-container'>
                <div className="dot"></div>
            </div>
            <div className='dot-container'>
                <div className="dot"></div>
            </div>
        </div>
    </div>
  );
}

export default Speaker;
