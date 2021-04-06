import './FilterCity.css';

const filterCity = (props) => {
    return (
        <div className="FilterCity">
            <span className="material-icons md-24 city-icon">place</span>
            <span className="city-name"  onClick={props.clicked}>{props.children}</span>
        </div>
    )
}

export default filterCity;