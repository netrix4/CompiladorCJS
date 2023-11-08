console.log("Editor/Compilador Online");

// import * as diccionario from "../resources/DiccionarioCadenas.js";
import {diccionario} from "../resources/DiccionarioCadenas.js";

const selectedFile = document.getElementById('selectedFile')
const cardContent = document.getElementById('cardContent')

selectedFile.addEventListener('change', onSelectedFileChanged)
const filteredFileContent = document.createElement('textarea')
filteredFileContent.setAttribute('id', 'taFilteredFileContent')
const downloadButton = document.createElement('button')
downloadButton.addEventListener('click', onDownload)

downloadButton.textContent = 'Descargar'
cardContent.appendChild(filteredFileContent)
cardContent.appendChild(downloadButton)

let fileReader;
const findWordsRegex = /[0-9]|(\w)+|[\|&!]|((>=)|(<=)|(==))|[><]|[=*/%+\-]|[\(\){}\[\]]|[;]/gm

let everyWordInFile;
let analizedStrings;
let filtredString;

function onSelectedFileChanged() {
    fileReader = new FileReader();
    let originalFileString;
    
    fileReader.readAsText(selectedFile.files[0])
    console.log('File readed: ', selectedFile.files[0].name)
    fileReader.onload = () => {
        originalFileString = fileReader.result
        filteredFileContent.textContent = originalFileString
    }
}
function compileInputText() {
    const temp = document.getElementById('taFilteredFileContent').value
    console.log(temp.value);
    let banderaNoEncontrado = true; 

    everyWordInFile = temp.match(findWordsRegex)
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
    analizedStrings.forEach((palabraAnalizada) => {
        const temp = `${palabraAnalizada[0]} - ${palabraAnalizada[1]}`;
        filtredString = filtredString.concat(temp, '\n')
    });
        
}

function onDownload() {
    compileInputText();

    console.log('Archivo de salida listo para descargar');
    const archivoBlob = new Blob([filtredString], { type: 'text/plain' });

    const archivoURL = URL.createObjectURL(archivoBlob);
    
    const enlaceDescarga = document.createElement('a');
    enlaceDescarga.href = archivoURL;
    enlaceDescarga.download = 'output.txt';
    enlaceDescarga.click();
    URL.revokeObjectURL(archivoURL);
}