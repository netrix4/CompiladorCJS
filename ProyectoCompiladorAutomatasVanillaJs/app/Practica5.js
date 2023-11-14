console.log("Reconocer palabras reservadas");

import * as _diccCadenas from "../resources/DiccionarioCadenas.js";

const selectedFile = document.getElementById('selectedFile')
const cardContent = document.getElementById('cardContent')

selectedFile.addEventListener('change', onSelectedFileChanged)

function onSelectedFileChanged() {
    const fileContent = document.createElement('p')
    const filteredFileContent = document.createElement('textarea')
    const downloadButton = document.createElement('button')
    downloadButton.addEventListener('click', onDownload)
    
    const fileReader = new FileReader();
    const findWordsRegex = /\s+/gm

    let originalFileString;
    let everyWordInFile;
    let analizedStrings;
    let filtredString;

    fileReader.readAsText(selectedFile.files[0])
    console.log('File readed: ', selectedFile.files[0].name)

    fileReader.onload = () => {
        originalFileString = fileReader.result

        everyWordInFile = originalFileString.split(findWordsRegex)
        analizedStrings = [];

        everyWordInFile.forEach((item) => {
            const isReservedWord = Object.values(_diccCadenas.diccionario[6]).includes(item);
            analizedStrings.push({ item, isReservedWord });
        });

        filtredString = 'Coicidencias encontradas: ';

        analizedStrings.forEach((item) => {
            const temp = item.isReservedWord? ' - PR\n': ' - ID\n';
            filtredString = filtredString.concat(item.item, temp)
        });

        originalFileString = 'Texto original: \n' + originalFileString

        fileContent.textContent = originalFileString
        filteredFileContent.textContent = filtredString
        downloadButton.textContent = 'Descargar'

        cardContent.appendChild(fileContent)
        cardContent.appendChild(filteredFileContent)
        cardContent.appendChild(downloadButton)

    }
    function onDownload() {
        console.log(filtredString);
        const archivoBlob = new Blob([filtredString], { type: 'text/plain' });

        const archivoURL = URL.createObjectURL(archivoBlob);
        
        const enlaceDescarga = document.createElement('a');
        enlaceDescarga.href = archivoURL;
        enlaceDescarga.download = 'output.txt';
        enlaceDescarga.click();
        URL.revokeObjectURL(archivoURL);
    }
}