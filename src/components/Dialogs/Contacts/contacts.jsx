
import ContactItem from './Contact/contact';
import './contacts.scss';


const Contacts = (props) => {
    let contactElement = props.contact.map(contact => <ContactItem name={contact.name} id={contact.id} avatar={contact.avatar} />);

    return (
        <div className="dialogs__contacts">
            {contactElement}
        </div>
    );
}

export default Contacts;