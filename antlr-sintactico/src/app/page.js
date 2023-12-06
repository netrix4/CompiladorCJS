'use client';
import React, { useState } from 'react'

// Esta va ser la buena
import {analizadorSintactico} from "../module/generador.js";

const HomePage = () => {
  const [inputUser, setInputUser] = useState('');
  const [results, setResults] = useState('');

  const onTextInputChange = (event) =>{
    setInputUser(event.target.value);
    
  }

  const onCompileClick = () =>{
    const findCommentsRegex = /(\/\/.+)|(\/\*[\s\S]+?\*\/)/gm       // Encontrar comentarios
    const userInpuntWOComments = inputUser.replace(findCommentsRegex, '')

    const rowsExpressions = userInpuntWOComments.match(/([^\n])+/gm)
    const tempRes = []
    let resStr = 'Resultado(s):\n'

    console.log('Operaciones identificadas: ' + rowsExpressions.length, rowsExpressions)

    rowsExpressions.forEach(expression => {
      let expresionTempRes = analizadorSintactico(expression)
      tempRes.push(' ' + expresionTempRes[expresionTempRes.length-1].toString())
      
    });

    console.log('Resultados por operacion antes del hook', tempRes)
    
    resStr += tempRes;
    setResults(resStr)
  }

  return (
    <div className='card-element-wrapper'>
      <div className='card-element-header'>
        <h2>Analizador Sintáctico</h2>
      </div>
      <div className='card-element-content' id="cardContent">
        <p htmlFor="inputAutom">Ingresa tus operaciones aritméticas y haz click en el botón para conocer el resultado</p>
        <textarea id="inputText" value={inputUser} onChange={onTextInputChange}></textarea>
        <button id="compile" onClick={onCompileClick}>Compilar</button>
        <p >{results}</p>
      </div>
    </div>
  )
}

export default HomePage