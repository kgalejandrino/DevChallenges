import './SideBar.css';

const sideBar = (props) => <div className="SideBar" style={props.search ? { animation: "slide .2s" } : null}>{props.children}</div>;

export default sideBar;