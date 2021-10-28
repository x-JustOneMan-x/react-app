
import Contacts from './Contacts/contacts';
import Messages from './Massages/messages';
import './dialogs.scss';

const Dialogs = () => {
    return (
        <div className="dialogs">
            <Contacts />
            <Messages />
        </div>
    );
}

export default Dialogs;