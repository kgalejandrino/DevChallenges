import Radium from 'radium';

import './FilterCity.css';

const filterCity = (props) => {        
    const styles = {
        filterCity: {
            '@media (max-width: 770px)': {
                marginTop: "36px",
                paddingLeft: "18px"
            }   
        }
      }

    return (
        <div className="FilterCity" style={props.showDrawer ? styles.filterCity: null}>
            <span className="material-icons md-24 city-icon">place</span>
            <span className="city-name"  onClick={props.clicked}>{props.children}</span>
        </div>
    )
}

export default Radium(filterCity);