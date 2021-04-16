import './DeleteButton.css';

const deletButton = (props) => {
    return (
        <div className="DeleteButton">
            <button className="btn-delete" onClick={props.deleted}>
                <span className="material-icons md-16">delete_outline</span>delete all
            </button>
        </div>
    )
}

export default deletButton;