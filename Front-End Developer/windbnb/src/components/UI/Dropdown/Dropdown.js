import './Dropdown.css';

const dropdown = props => props.showSearch || props.showGuest ? <div className="dropdown"></div> : null;

export default dropdown;