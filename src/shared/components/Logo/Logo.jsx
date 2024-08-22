
function Logo(props) {
    return (
        <div style={{fontSize: props.size || 24, fontWeight: props.weight || 800}}>
            {props.text}
        </div>
    )
}

export default Logo;