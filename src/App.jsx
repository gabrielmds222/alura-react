import React from 'react';
import NoteList from './components/NoteList';
import './App.css';

function App() {
  return (
    <div className="App">
        <form>
          <label> Título </label>
          <input type="text" />
          <textarea placeholder='Escreva sua nota...'></textarea>
          <button>Criar Nota</button>
        </form>
        <NoteList/>
    </div>
  );
}

export default App;
