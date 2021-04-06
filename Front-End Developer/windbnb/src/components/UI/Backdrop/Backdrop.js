import './Backdrop.css';

const backdrop = (props) => 
    props.showSearch || props.showGuest 
    ? <div className="backdrop" onClick={props.clicked}></div> 
    : null;

export default backdrop;