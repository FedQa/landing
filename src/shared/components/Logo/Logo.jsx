import './Logo.css'

function Logo(props) {
    return (
        <div className="logo">
            {props.text}
            {props.style}
        </div>
    )
}

export default Logo;