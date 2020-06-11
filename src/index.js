import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {createStore, combineReducers} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';

import { reducer as formReducer } from 'redux-form'
import { reducer as manageQuestionsReducer } from './reducers/ManageQuestionsReducer'
import { reducer as quizReducer } from './reducers/GameReducer'
import { reducer as verificationReducer } from './reducers/VerificationReducer'

import './bootstrap.css';
import App  from './App';
import {loadData} from "./actions/QuestionActions";

const rootReducer = combineReducers({
    manageQuestionsReducer: manageQuestionsReducer,
    verificationReducer: verificationReducer,
    quizReducer: quizReducer,
    form: formReducer
});

const store = createStore(rootReducer ,composeWithDevTools());

//initialize from localstorage
store.dispatch(loadData());

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
     </Provider>,
    document.getElementById('root')
);
