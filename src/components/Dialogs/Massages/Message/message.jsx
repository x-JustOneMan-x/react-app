const Message = (props) => {
    return (
        <div className="message">
            <div className="message__avatar">
                <img src={props.image} alt="" />
            </div>
            <div className="message__content">
                {props.text}
            </div>
        </div>
    );
}

export default Message;