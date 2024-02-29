import React, { useEffect } from 'react';
import style from './../../assets/styles/Buttons.module.css';

const AbxyButtons: React.FC = () => {
    const handleKeyPress = (event: KeyboardEvent) => {
        switch (event.key) {
            case 'w':
                pressX(); // Call the onPressA function when 'w' is pressed
                break;
            case 'a':
                pressY(); // Call the onPressB function when 'a' is pressed
                break;
            case 's':
                pressB(); // Call the onPressX function when 's' is pressed
                break;
            case 'd':
                pressA(); // Call the onPressY function when 'd' is pressed
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    const pressX = () => {
        console.log('X');
    }
    const pressY = () => {
        console.log('Y');
    }
    const pressA = () => {
        console.log('A');
    }
    const pressB = () => {
        console.log('B');
    }
    return (
        <div className={style.abxy + ' abxy bottom-col'}>
            <div className={`${style.abxyBtn} ${style.x}`}>
                <button className={style.abxyBtnContent} onClick={() => pressX()}>
                    X
                </button>
            </div>
            <div className={`${style.abxyBtn} ${style.y}`} onClick={() => pressY()}>
                <button className={style.abxyBtnContent}>
                    Y
                </button>
            </div>
            <div className={`${style.abxyBtn} ${style.a}`} onClick={() => pressA()}>
                <button className={style.abxyBtnContent}>
                    A
                </button>
            </div>
            <div className={`${style.abxyBtn} ${style.b}`} onClick={() => pressB()}>
                <button className={style.abxyBtnContent}>
                    B
                </button>
            </div>
        </div>
    );
}

export default AbxyButtons;
