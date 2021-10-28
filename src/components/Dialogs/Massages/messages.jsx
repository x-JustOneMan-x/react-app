
import './messages.scss';
import contact from '../../../img/contact.jpg';
import Message from './Message/message';

const Messages = () => {
    return (
        <div className="dialogs__messages">
            <Message image={contact} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, necessitatibus?" />
            <Message image={contact} text="Hello!" />
            <Message image={contact} text="How are you" />
        </div>
    );
}

export default Messages;