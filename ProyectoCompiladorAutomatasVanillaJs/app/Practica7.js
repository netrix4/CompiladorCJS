console.log("Editor/Compilador Online");

// import * as diccionario from "../resources/DiccionarioCadenas.js";
import {diccionario} from "../resources/DiccionarioCadenas.js";

const filteredFileContent = document.getElementById('inputText')

const selectedFile = document.getElementById('selectedFile')
selectedFile.addEventListener('change', onSelectedFileChanged)
const downloadButton = document.getElementById('download')
downloadButton.addEventListener('click', onDownload)

function onSelectedFileChanged() {
    const fileReader = new FileReader();
    
    fileReader.readAsText(selectedFile.files[0])
    console.log('File readed: ', selectedFile.files[0].name)
    fileReader.onload = () => {
        const originalFileString = fileReader.result
        filteredFileContent.value = originalFileString
    }
}
function compileInputText() {
    const findCommentsRegex = /(\/\/.+)|(\/\*[\s\S]+?\*\/)/gm    // Encontrar comentarios
    const stringWithoutComments = filteredFileContent.value.replace(findCommentsRegex, '').toString()
    // console.log(typeof stringWithoutComments, stringWithoutComments);
    
    const findWordsRegex = /[0-9]|(\w)+|[\|&!]|((>=)|(<=)|(==))|[><]|[=*/%+\-]|[,\(\){}\[\]]|[;]/gm
    const everyWordInFile = stringWithoutComments.match(findWordsRegex)
    // console.log(everyWordInFile);


    const analizedStrings = [];
    let banderaNoEncontrado = true; 

    everyWordInFile.forEach((itemWordInFile) => {
        diccionario.forEach((ItemDiccionario) => {
            ItemDiccionario.lista.forEach((objPalabra) => {
                // if (itemWordInFile.includes(objPalabra.lexema)) {
                if (itemWordInFile === objPalabra.lexema) {
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

    let filtredString = `Coicidencias encontradas: ${analizedStrings.length}\n`;
    analizedStrings.forEach((palabraAnalizada) => {
        const temp = `${palabraAnalizada[0]} - ${palabraAnalizada[1]}`;
        filtredString = filtredString.concat(temp, '\n')
    });
    return filtredString;
}

function onDownload() {
    const compiledOutputText = compileInputText();

    console.log('Archivo de salida listo para descargar');
    const archivoBlob = new Blob([compiledOutputText], { type: 'text/plain' });

    const archivoURL = URL.createObjectURL(archivoBlob);
    
    const enlaceDescarga = document.createElement('a');
    enlaceDescarga.href = archivoURL;
    if (selectedFile.files[0]) {
        enlaceDescarga.download = `output_${selectedFile.files[0].name}`;
        
    } else {
        enlaceDescarga.download = `outputFromBlank.txt`;        
    }
    enlaceDescarga.click();
    URL.revokeObjectURL(archivoURL);
}