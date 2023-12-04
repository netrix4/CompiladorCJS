'use client';
import React, { useState } from 'react'

// Esta va ser la buena
import {analizadorSintactico} from "../module/generador.js";
// import { Result } from 'postcss';

const HomePage = () => {
  const [inputUser, setInputUser] = useState('');
  const [results, setResults] = useState('');

  const onTextInputChange = (event) =>{
    setInputUser(event.target.value);
    
  }

  const onCompileClick = () =>{
    const rowsExpressions = inputUser.match(/([^\n])+/gm)
    const tempRes = []
    let resStr = 'Resultado(s):\n'

    console.log('Operaciones identificadas: ' + rowsExpressions .length, rowsExpressions)

    rowsExpressions.forEach(expression => {
      let expresionTempRes = analizadorSintactico(expression)
      tempRes.push(' ' + expresionTempRes[expresionTempRes.length-1].toString())
      
    });
    resStr += tempRes;

    console.log('Resultados por operaciona antes del hook', resStr)
    setResults(resStr)
    console.log(results)
  }

  return (
   
      <div className='card-element-wrapper'>
        <div className='card-element-header'>
            <h2>Analizador Sintáctico</h2>
        </div>
        <div className='card-element-content' id="cardContent">
          <p className='text-center' htmlFor="inputAutom">Ingresa tus operaciones aritméticas y haz click en el botón para ver el resultado en consola</p>
          {/* <input type="file" id="selectedFile" accept=".txt" /> */}
          <textarea id="inputText" value={inputUser} onChange={onTextInputChange}></textarea>
          <button id="compile" onClick={onCompileClick}>Compilar</button>
          <p>{results}
          </p>
        </div>
      </div>
 
  )
}

export default HomePage
