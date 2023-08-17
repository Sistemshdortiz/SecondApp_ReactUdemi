import './index.css'

const Card = (props) => {

    return (
        <ul id="concepts">
            <li className="concept">
            {props.children}
            </li>
        </ul>
    )
}

export default Card;