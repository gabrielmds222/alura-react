import React from 'react';
import Formulario from './components/Formulario';
import NoteList from './components/NoteList';

import './App.css';

const App = () => {
  return (
    <div className="App">
        <Formulario/>
        <NoteList/>
    </div>
  );
}

export default App;
