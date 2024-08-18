import './Counter.css'

function Counter(props) {
    return (
        <div className="counter">
            <div className="counter__content">
                {[...props.text].map((digit, index) => (
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