import './Backdrop.css';

const backdrop = (props) => 
    props.showDrawer
    ? <div className="backdrop" onClick={props.clicked}></div> 
    : null;

export default backdrop;