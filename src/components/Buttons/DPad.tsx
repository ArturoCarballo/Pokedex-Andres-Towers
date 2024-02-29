import React from 'react';
import ArrowButton from '../Arrowbutton';

const DPad: React.FC = () => {
    return (
        <div className="bottom-col dpad directional-pad">
            <ArrowButton direction="" onClick={() => console.log('Up button clicked')} />
            <ArrowButton direction="up" onClick={() => console.log('Up button clicked')} />
            <ArrowButton direction="" onClick={() => console.log('Up button clicked')} />
            <ArrowButton direction="left" onClick={() => console.log('Left button clicked')} />
            <ArrowButton direction="" onClick={() => console.log('Left button clicked')} />
            <ArrowButton direction="right" onClick={() => console.log('Right button clicked')} />
            <ArrowButton direction="" onClick={() => console.log('Down button clicked')} />
            <ArrowButton direction="down" onClick={() => console.log('Down button clicked')} />
            <ArrowButton direction="" onClick={() => console.log('Down button clicked')} />
        </div>
    );
}

export default DPad;
