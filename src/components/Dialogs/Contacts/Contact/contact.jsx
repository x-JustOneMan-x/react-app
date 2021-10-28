
const Contact = (props) => {
    return (
        <div className={"contacts__item " + props.active} >
            <span>{props.name}</span>
        </div>
    );
}

export default Contact;