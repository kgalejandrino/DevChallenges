import './FilteredCity.css';

const filteredCity = (props) => {
    return (
        <div className="filteredCity">
            <span className="material-icons md-24 city-icon">place</span>
            <span className="city-name">{props.children}</span>
        </div>
    )
}

export default filteredCity;