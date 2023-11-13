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
        filteredFileContent.value = fileReader.result
    }
}
function compileInputText() {
    const findNumbersItselfs = /\b[0-9]+\b/gm
    const findCommentsRegex = /(\/\/.+)|(\/\*[\s\S]+?\*\/)/gm       // Encontrar comentarios
    const findWordsRegex = /(\.|,|\;|\:|=|(\{|\}|\[|\]|\(|\))|(\+|-|\*|\/|%)|(!|>|<|&|\|)|("[a-zA-Z ,!]+")|[a-zA-Z_]+([0-9]+)?|[0-9]+)/gm  // EDW
    // const findWordsRegex = /(\w)+|[\|&!]+|[><]|[=*/%+\-]|[:\.,\(\){}\[\]]|[;]|[0-9]+/gm

    const stringWithoutComments = filteredFileContent.value.replace(findCommentsRegex, '').toString()
    const everyWordInFile = stringWithoutComments.match(findWordsRegex)

    const analizedStrings = [];
    const analizedGroupsStrings = [];
    let banderaNoEncontrado = true; 

    everyWordInFile.forEach((itemWordInFile) => {
        diccionario.forEach((ItemDiccionario) => {
            ItemDiccionario.lista.forEach((objPalabra) => {
                if (itemWordInFile === objPalabra.lexema) {
                    analizedStrings.push(itemWordInFile);
                    analizedGroupsStrings.push(objPalabra.categoria);
                    banderaNoEncontrado = false
                }
            });
        });
        if (banderaNoEncontrado) {
            if (itemWordInFile.match(findNumbersItselfs)) {
                // analizedStrings.push([itemWordInFile, 'NUM']);
                analizedStrings.push(itemWordInFile);
                analizedGroupsStrings.push('NUM');
                banderaNoEncontrado = false
            }
            else{
                // analizedStrings.push([itemWordInFile, 'ID']);
                analizedStrings.push(itemWordInFile);
                analizedGroupsStrings.push('ID');
            }
        }
        banderaNoEncontrado = true
    });

    console.log(`Coicidencias encontradas: ${analizedStrings.length}\n`)
    
    const reservadasCount = analizedGroupsStrings.filter((item) => item === 'PR').length
    const opLogicosCount = analizedGroupsStrings.filter((item) => item === 'OL').length
    const opRelacionalCount = analizedGroupsStrings.filter((item) => item === 'OR').length
    const opMatematicosCount = analizedGroupsStrings.filter((item) => item === 'OM').length
    const opAgrupacionCount = analizedGroupsStrings.filter((item) => item === 'OA').length
    const opEspaciamientoCount = analizedGroupsStrings.filter((item) => item === 'OE').length
    const semiColonCount = analizedGroupsStrings.filter((item) => item === 'SC').length
    const numerosCount = analizedGroupsStrings.filter((item) => item === 'NUM').length
    
    let filtredString = '';
    let contador = 0;

    while (contador <= analizedStrings.length) {
        const temp = `${analizedStrings[contador]} - ${analizedGroupsStrings[contador]}`;
        filtredString = filtredString.concat(temp, '\n')
        contador++
    }

    const IDcount = analizedStrings.length - (numerosCount+reservadasCount+opLogicosCount+opRelacionalCount
        +opMatematicosCount+opAgrupacionCount+opEspaciamientoCount+semiColonCount)

    const totalCount = numerosCount+reservadasCount+opLogicosCount+ opRelacionalCount+opMatematicosCount+
                        opAgrupacionCount+opEspaciamientoCount+semiColonCount+IDcount

    const everyCount = [['Palabras Reservadas', 'Operadores Lógicos', 'Operadores Relacionales', 'Operadores Matematicos', 
                        'Operadores de Agrupación', 'Operadores de Espaciamientos', 'Punto y Comas', 'Numeros', 'Palabras No Reservadas', 
                        'Total de incidencias'],
                        [reservadasCount, opLogicosCount, opRelacionalCount, opMatematicosCount, opAgrupacionCount, opEspaciamientoCount, 
                        semiColonCount, numerosCount, IDcount, totalCount]]
    return {filtredString, everyCount}
}

function buildOutputStringOnPage(counts) {
    let contador = 0;
    let cardContent = document.getElementById('cardContent')
    let resultsLabel = document.createElement('label')

    while (contador < counts[1].length) {
        resultsLabel = document.createElement('label')
        resultsLabel.textContent = `${counts[0][contador]} : ${counts[1][contador].toString()}`
        cardContent.appendChild(resultsLabel)
        contador++
    }
}

function onDownload() {
    const compiledOutput = compileInputText();
    buildOutputStringOnPage(compiledOutput.everyCount)
    
    const archivoBlob = new Blob([compiledOutput.filtredString], { type: 'text/plain' });
    console.log('Archivo de salida listo para descargar');
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