import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './components/App/App';
import store from './redux/store';
import './index.scss';

let rerenderEntrireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App states={state}
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntrireTree(store.getState());

store.subscribe(rerenderEntrireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
