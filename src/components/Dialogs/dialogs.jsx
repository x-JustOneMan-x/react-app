
import Contacts from './Contacts/contacts';

import Messages from './Massages/messages';


import './dialogs.scss';

const Dialogs = (props) => {
    return (
        <div className="dialogs">
            <Contacts contact={props.data.contacts} />
            <Messages message={props.data.messages} newMessageText={props.data.newMessageText} dispatch={props.dispatch} />
        </div>
    );
}

export default Dialogs;