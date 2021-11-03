import contact from '../img/contact.jpg';

let state = {
    dialogsPage: {
        contacts: [
            { id: "1", name: "Andrew", active: "active" },
            { id: "2", name: "DeNis", active: "" },
            { id: "3", name: "Ami", active: "" },
            { id: "4", name: "ms. Stories", active: "" }
        ],
        messages: [
            { image: contact, text: "Lorem ipsum dolor sit amet consectetur" },
            { image: contact, text: "Hello!" },
            { image: contact, text: "How are you?" }
        ],
    },
    profilePage: {
        posts: [
            { id: "1", name: "Hello! How are you?", like: 12 },
            { id: "2", name: "Cool project, guys!", like: 12 },
            { id: "3", name: "Hey, i`m working", like: 12 },
            { id: "4", name: "Rest! I need some rest!", like: 12 }
        ]
    }
}

export default state;