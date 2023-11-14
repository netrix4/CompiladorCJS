console.log("Reconocer palabras reservadas y operadores");

// import * as diccionario from "../resources/DiccionarioCadenas.js";
import {diccionario} from "../resources/DiccionarioCadenas.js";

const selectedFile = document.getElementById('selectedFile')
const cardContent = document.getElementById('cardContent')

selectedFile.addEventListener('change', onSelectedFileChanged)

function onSelectedFileChanged() {
    const fileContent = document.createElement('p')
    const filteredFileContent = document.createElement('textarea')
    const downloadButton = document.createElement('button')
    downloadButton.addEventListener('click', onDownload)
    
    const fileReader = new FileReader();
    const findWordsRegex = /[0-9]|(\w)+|[\|&!]|((>=)|(<=)|(==))|[><]|[=*/%+\-]|[\(\){}\[\]]|[;]/gm

    let originalFileString;
    let everyWordInFile;
    let analizedStrings;
    let filtredString;

    fileReader.readAsText(selectedFile.files[0])
    console.log('File readed: ', selectedFile.files[0].name)

    fileReader.onload = () => {
        originalFileString = fileReader.result
        let banderaNoEncontrado = true; 

        everyWordInFile = originalFileString.match(findWordsRegex)
        analizedStrings = [];

        everyWordInFile.forEach((itemWordInFile) => {
            diccionario.forEach((ItemDiccionario) => {
                ItemDiccionario.lista.forEach((objPalabra) => {
                    if (itemWordInFile.includes(objPalabra.lexema)) {
                        analizedStrings.push([itemWordInFile, objPalabra.categoria]);
                        banderaNoEncontrado = false
                    }
                });
            });
            if (banderaNoEncontrado) {
                analizedStrings.push([itemWordInFile, 'ID']);
            }
            banderaNoEncontrado = true
        });
    
        filtredString = `Coicidencias encontradas: ${analizedStrings.length}\n`;
        // console.log(analizedStrings)
        analizedStrings.forEach((palabraAnalizada) => {
            const temp = `${palabraAnalizada[0]} - ${palabraAnalizada[1]}`;
            filtredString = filtredString.concat(temp, '\n')
        });

        originalFileString = 'Texto original: \n' + originalFileString
        console.log(everyWordInFile);
        fileContent.textContent = originalFileString
        filteredFileContent.textContent = filtredString
        downloadButton.textContent = 'Descargar'

        cardContent.appendChild(fileContent)
        cardContent.appendChild(filteredFileContent)
        cardContent.appendChild(downloadButton)

    }
    function onDownload() {
        console.log('Archivo de salida listo para descargar');
        const archivoBlob = new Blob([filtredString], { type: 'text/plain' });

        const archivoURL = URL.createObjectURL(archivoBlob);
        
        const enlaceDescarga = document.createElement('a');
        enlaceDescarga.href = archivoURL;
        enlaceDescarga.download = 'output.txt';
        enlaceDescarga.click();
        URL.revokeObjectURL(archivoURL);
    }
}