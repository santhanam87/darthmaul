import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import createStore from '../../app/store';
import BlogPages from '../components/blogPages';

const rootNode = document.getElementById('root');
const store = createStore(window.INITIAL_STATE);
ReactDOM.hydrateRoot(
    rootNode,
    <Provider store={store}>
        <BlogPages />
    </Provider>,
);
