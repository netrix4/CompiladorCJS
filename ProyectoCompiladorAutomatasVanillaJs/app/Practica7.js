console.log("Editor/Compilador Online");

// import * as diccionario from "../resources/DiccionarioCadenas.js";
import {diccionario} from "../resources/DiccionarioCadenas.js";

const cardContent = document.getElementById('cardContent')

const selectedFile = document.getElementById('selectedFile')
selectedFile.addEventListener('change', onSelectedFileChanged)

const filteredFileContent = document.getElementById('inputText')
// filteredFileContent.setAttribute('id', 'taFilteredFileContent')

const downloadButton = document.getElementById('download')
downloadButton.addEventListener('click', onDownload)

downloadButton.textContent = 'Descargar'
// cardContent.appendChild(filteredFileContent)
// cardContent.appendChild(downloadButton)

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
        filteredFileContent.value = originalFileString
    }
}
function compileInputText() {
    const textAreaValue = document.getElementById('inputText').value
    let banderaNoEncontrado = true; 

    everyWordInFile = textAreaValue.match(findWordsRegex)
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
    enlaceDescarga.download = `output_${selectedFile.files[0].name}`;
    enlaceDescarga.click();
    URL.revokeObjectURL(archivoURL);
}