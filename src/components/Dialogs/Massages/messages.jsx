
import Message from './message/message';
import './messages.scss';

const Messages = (props) => {

    let messageElement = props.message.map(mess => <Message image={mess.image} text={mess.text} />);

    return (
        <div className="dialogs__messages">
            {messageElement}
        </div>
    );
}

export default Messages;