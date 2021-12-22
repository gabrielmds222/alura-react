import React from 'react';
import CardNote from './CardNote';

const NoteList = () => {
    return (
        <ul>
            {Array.of("Trabalho", "Estudos", "Trabalho").map((categoria) => {
                return (
                    <li>
                        <div>{categoria}</div>
                        <CardNote/>
                    </li>
                );
            })}
        </ul>
    );
};

export default NoteList;