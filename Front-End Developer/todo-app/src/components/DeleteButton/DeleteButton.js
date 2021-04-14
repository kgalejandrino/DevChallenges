import './DeleteButton.css';

const deletButton = (props) => {
    return (
        <div className="DeleteButton" onClick={props.deleted}>
            <button className="btn-delete">
                <span className="material-icons md-16">delete_outline</span>delete all
            </button>
        </div>
    )
}

export default deletButton;