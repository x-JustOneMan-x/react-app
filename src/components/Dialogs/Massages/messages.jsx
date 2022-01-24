
import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/store';
import Message from './message/message';
import './messages.scss';

const Messages = (props) => {

    let messageElement = props.message.map(mess => <Message image={mess.image} text={mess.text} />);

    let newMessage = React.createRef();

    let onMessageSend = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className="dialogs__list">
            <div className="dialogs__messages">
                {messageElement}
            </div>
            <div className="dialogs__send">
                <textarea ref={newMessage} name="add-mesaage" placeholder="your message" value={props.newMessageText} onChange={onMessageChange} ></textarea>
                <button onClick={onMessageSend}>Отправить</button>
            </div>
        </div>
    );
}

export default Messages;