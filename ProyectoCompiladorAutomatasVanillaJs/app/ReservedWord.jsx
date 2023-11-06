'use client'

//En este codigo se trabajo en equipo junto con Mario bb, se creo un lector de codigo que identificara si una palabra es reservada en c o nop 
//y generada un txt tuneado con las palabras si son reservadas o no.

import React, { useState } from 'react';

const Lector = () => {
  const [contenido, setContenido] = useState('');
  const [coincidencias, setCoincidencias] = useState([]);
  const [archivoGenerado, setArchivoGenerado] = useState('');

  const palabras = {
    1: "auto",
    2: "break",
    3: "case",
    4: "char",
    5: "const",
    6: "continue",
    7: "default",
    8: "do",
    9: "double",
    10: "else",
    11: "enum",
    12: "extern",
    13: "float",
    14: "for",
    15: "goto",
    16: "if",
    17: "int",
    18: "long",
    19: "register",
    20: "return",
    21: "short",
    22: "signed",
    23: "sizeof",
    24: "static",
    25: "struct",
    26: "switch",
    27: "typedef",
    28: "union",
    29: "unsigned",
    30: "void",
    31: "volatile",
    32: "while"
};

  const leerArchivo = (e) => {
    const archivo = e.target.files[0];
    if (archivo === null || archivo === undefined) {
      return;
    }

    const lector = new FileReader();
  
    lector.onload = function (e) {
      const contenido = e.target.result;
      setContenido(contenido);

      //en las siguientes lineas dividiremos la cadena de contenido
      //la separaremos con la expresion /s+/ que quita espacios o cualqier salto de lina o tab
      //las palabras se separarn con split, nos dara una array que contendra las palabras del archivo txt ingresado
      //esto los haremos para poder comparar las palabras separadas con nuestro objeto de palabras

      const palabrasEnArchivo = contenido.split(/\s+/);
      const coincidencias = [];

      //utilizamos Object.values(palabras) para obtener los valores de las propiedades del objeto palabras con este pudimos acceder a las palabras del lenguaje del lenguaje de progrmacion c
      //despues utilizamos includes para ver si la palabra actual del archivo que se obtuvo en el bucle forEach estaba incluida en la lista de palabras clave
      //con esto sabremos si la palabra del archivo actual es una palabra clave y luego cree un objeto con esta informacion para agregarlo al array coincidencias

      palabrasEnArchivo.forEach((palabra) => {
        const esPalabraClave = Object.values(palabras).includes(palabra);
        coincidencias.push({ palabra, esPalabraClave });
      });
  
      setCoincidencias(coincidencias);
    };
  
    lector.readAsText(archivo);
  };
  
  //aqui creamos una funcion para generar el archivo de descargar donde se insertara el el txt si es palabra clave o nel perro
  //contruimos despues un array que tendra el contenido de archivo ya tuneado con si es o no es y lo convertiremos en un objeto Blob
  //  QUe es blob? R= El constructor Blob() retorna un nuevo objeto Blob . El contenido del blob consiste en la concatenación de los valores obtenidos en el parrametro array.

  const generarArchivoTxt = () => {
    const lineas = [];

    coincidencias.forEach((item) => {
      if (item.esPalabraClave) {
        lineas.push(`La palabra "${item.palabra}" es una palabra clave.`);
      } else {
        lineas.push(`La palabra "${item.palabra}" no es una palabra clave.`);
      }
    });

    const textoArchivo = lineas.join('\n');

    const archivoBlob = new Blob([textoArchivo], { type: 'text/plain' });

    const archivoURL = URL.createObjectURL(archivoBlob);
    //despues creamos una url para Blob y se crea tambien  un enlace de descarga que contiene un nombre de archivo

    // se creo el elemento a para que el usuario si desea descargar el archivo lo haga, ya que en la pagina ya imprime el resultado de si la palabra es clave o no
    //se nos hizo conveniente crear esto para no llenarnos de archivos de de pruebas.
    
    const enlaceDescarga = document.createElement('a');
    enlaceDescarga.href = archivoURL;
    enlaceDescarga.download = 'resultado.txt';
    enlaceDescarga.click();
    //Con esta linea liberamos la memoria para evitar errores, ya que con cada carga de archivo se necesita el url para la descarga
    URL.revokeObjectURL(archivoURL);
  };

  const limpiar = () => {
    setContenido('');
    setCoincidencias([]);
  };

  return (
    <div className="flex flex-col m-11">
      <div className="bg-slate-200 p-4 md:p-10 rounded-2xl shadow-slate-500 shadow-2xl m-4 md:m-11">
        <h1 className="text-2xl md:text-4xl text-slate-900 font-serif text-center">
          En este apartado podrás examinar un archivo txt y observar si su contenido cuenta con palabras reservadas del lenguaje C.
        </h1>
      </div>
      <div>
        <div className="mt-4 md:mt-8">
          <input type="file" id="file-input" onChange={leerArchivo} className="border p-1 rounded-md w-full" />
        </div>

        <div id="contenido-archivo" className="mt-4 md:mt-8">
          {contenido}
        </div>
        <div className="mt-4 md:mt-8">
           <p>Se encontraron {coincidencias.length} coincidencias.</p>
           <ul>
              {coincidencias.map((item, index) => {
                let mensaje = `La palabra "${item.palabra}`;
                if (item.esPalabraClave) {
                    mensaje += `" es una palabra clave.`;
                } else {
                    mensaje += `" no es una palabra clave.`;
                }
                return (
                <li key={index}>
                  {mensaje}
                 </li>
               );
            })}
            </ul>

        </div>

        <div className="mt-4 md:mt-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <button onClick={generarArchivoTxt} className="bg-slate-900 text-white px-2 py-1 rounded-md mt-2 md:mt-0 md:ml-2 font-serif w-full md:w-[11%]">
            Generar Archivo de Texto
          </button>
          <button onClick={limpiar} className="bg-slate-900 text-white px-2 py-1 rounded-md mt-2 md:mt-0 md:ml-2 font-serif w-full md:w-[11%]">
            Limpiar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lector;