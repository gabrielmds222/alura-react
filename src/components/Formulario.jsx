import React from 'react';

const Formulario = () => {
    return (
        <form>
          <label> Título </label>
          <input type="text" />
          <textarea placeholder='Escreva sua nota...'></textarea>
          <button>Criar Nota</button>
        </form>
    );
};

export default Formulario;