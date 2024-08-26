import './Counter.css'
import {useEffect, useState} from "react";

function Counter(props) {
    const [counter, setCounter] = useState(() =>
    {
        const savedCounter = localStorage.getItem('counter');
        return savedCounter !== null ? JSON.parse(savedCounter) : props.initialValue;
    });

    useEffect(() => {
        localStorage.setItem('counter', JSON.stringify(counter));
    }, [counter]);


    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevCounter => prevCounter + Math.floor(Math.random() * 3) + 1);
        }, Math.floor(Math.random() * 4000) + 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="counter">
            <div className="counter__content">
                {[...String(counter)].map((digit, index) => (
                        <span key={index} className="counter__digit">{digit}</span>
                    )
                )}
            </div>
            <div className="counter__label">
                {props.label}
            </div>
        </div>
    )
}

export default Counter;