
import Contact from './Contact/contact';
import './contacts.scss';

const Contacts = () => {
    return (
        <div className="dialogs__contacts">
            <Contact active="active" name="Andrew" />
            <Contact active="" name="DeNis" />
            <Contact active="" name="Ami" />
            <Contact active="" name="ms. Meme" />
        </div>
    );
}

export default Contacts;