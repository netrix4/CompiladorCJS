console.log("Abrir archivo .txt");

const selectedFile = document.getElementById('selectedFile')
const cardContent = document.getElementById('cardContent')

selectedFile.addEventListener('change', onSelectedFileChanged)

function onSelectedFileChanged() {
    const fileContent = document.createElement('p')
    const filteredFileContent = document.createElement('textarea')

    const fileReader = new FileReader();
    // const regex = new RegExp('[a-zA-Z0-9]\w*', 'gm');
    const findCommentsRegex = /(\/\/.+)|(\/\*[\s\S]+?\*\/)/gm    // Encontrar comentarios
    // const findEnterRegex = /(.\n)/gm                             // econtrar enters en el texto (este no sirve mucho)
    const isInvalidContentRegex = /[^01,.\n\t ]/gm;                 // ecnontrar caracteres no validos
    const findValidWordsRegex = /[01]+/gm                        // Encontrar palabras validas

    let originalFileString;
    let filtredArray;
    let stringWithoutComments;
    let filtredString;

    fileReader.readAsText(selectedFile.files[0])
    console.log('File readed: ', selectedFile.files[0].name)

    fileReader.onload = () => {
        originalFileString = fileReader.result

        stringWithoutComments = originalFileString.replace(findCommentsRegex, '')
        console.log(stringWithoutComments);
                
        if (isInvalidContentRegex.test(stringWithoutComments)) {
            console.log('Invalid',`${selectedFile.files[0].name}`,' file');
            alert('Texto invalido encontrado en el archivo de entrada')
        } else {
            filtredArray = stringWithoutComments.match(findValidWordsRegex)
            console.log(filtredArray);
            filtredString = `Coicidencias encontradas: ${filtredArray.length} ` + filtredArray.toString()

            fileContent.textContent = originalFileString
            filteredFileContent.textContent = filtredString

            cardContent.appendChild(fileContent)
            cardContent.appendChild(filteredFileContent)
        }
    }
}