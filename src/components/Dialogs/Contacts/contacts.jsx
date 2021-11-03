
import ContactItem from './Contact/contact';
import './contacts.scss';


const Contacts = (props) => {
    let contactElement = props.contact.map(contact => <ContactItem active={contact.active} name={contact.name} id={contact.id} />);

    return (
        <div className="dialogs__contacts">
            {contactElement}
        </div>
    );
}

export default Contacts;