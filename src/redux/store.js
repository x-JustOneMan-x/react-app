import contact from '../img/contact.jpg';
import mrfor from '../img/mrfour.jpg';
import denis from '../img/denis.jpg';
import ami from '../img/amina.jpg';
import iya from '../img/iya.jpg';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        settings: {
            avatar: "../img/avatar.jpg"
        },
        dialogsPage: {
            contacts: [
                { id: "1", name: "Andrew", avatar: mrfor },
                { id: "2", name: "DeNis", avatar: denis },
                { id: "3", name: "Ami", avatar: ami },
                { id: "4", name: "ms. Stories", avatar: iya }
            ],
            messages: [
                { image: contact, text: "Lorem ipsum dolor sit amet consectetur", path: 'in' },
                { image: contact, text: "Hello!", path: 'out' },
                { image: contact, text: "How are you?", path: 'in' }
            ],
            newMessageText: ''
        },
        profilePage: {
            posts: [
                { id: "1", name: "Hello! How are you?", like: 12 },
                { id: "2", name: "Cool project, guys!", like: 12 },
                { id: "3", name: "Hey, i`m working", like: 12 },
                { id: "4", name: "Rest! I need some rest!", like: 12 }
            ],
            newPostText: 'New POst Text'
        }
    },
    _callSubscriber() {
        console.log('state was changed')
    },
    _addPost() {
        let newPost = {
            id: 5,
            name: this._state.profilePage.newPostText,
            like: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._updateNewPostText('');
        this._callSubscriber(this._state);
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    _addMessage() {
        let newMessage = {
            image: contact,
            text: this._state.dialogsPage.newMessageText,
            path: 'out'
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._updateNewMessageText('');
        this._callSubscriber(this._state);
    },
    _updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText);
        } else if (action.type === ADD_MESSAGE) {
            this._addMessage();
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._updateNewMessageText(action.newText);
        }
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
})

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
})

export default store;