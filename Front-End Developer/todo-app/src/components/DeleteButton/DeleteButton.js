import './DeleteButton.css';

const deletButton = (props) => {

    return (
        props.tab === 'Completed'
            ? <div className="DeleteButton">
                <button className="btn-delete" onClick={props.deleted}>
                    <span className="material-icons md-16">delete_outline</span>delete all
                </button>
            </div>
            : null
    )
}

export default deletButton;