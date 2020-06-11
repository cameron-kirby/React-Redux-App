import React from 'react';
import './App.css';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { filmReducer } from './reducers/filmReducer'

// Components
import FilmForm from './components/FilmForm'
import FilmList from './components/FilmList'

const store = createStore(filmReducer, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Ghibli Films</h1>
        <FilmForm />
        <FilmList />
      </div>
    </Provider>
  );
}

export default App;
