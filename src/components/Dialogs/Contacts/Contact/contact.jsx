import { NavLink } from 'react-router-dom';

const ContactItem = (props) => {
    let url = '/dialogs/' + props.id;
    return (
        <div className={"contacts__item"} >
            <span><NavLink to={url}>{props.name}</NavLink></span>
        </div>
    );
}

export default ContactItem;