console.log("Abrir archivo .txt");

const selectedFile = document.getElementById('selectedFile')
const cardContent = document.getElementById('cardContent')

selectedFile.addEventListener('change', onSelectedFileChanged)

function onSelectedFileChanged() {
    const fileContent = document.createElement('p')
    const filteredFileContent = document.createElement('textarea')

    const fileReader = new FileReader();
    const regex =  /([a-zA-Z]+|[0-9]+)/gm;

    let originalFileString;
    let filtredArray;

    let filtredString;

    fileReader.readAsText(selectedFile.files[0])
    console.log('File readed: ', selectedFile.files[0].name)

    fileReader.onload = () => {
        originalFileString = fileReader.result
        
        filtredArray = originalFileString.match(regex)
        filtredString = `Coicidencias encontradas: ${filtredArray.length} ` + filtredArray.toString()

        console.log(filtredArray)
        console.log(filtredString)
        
        fileContent.textContent = originalFileString
        filteredFileContent.textContent = filtredString

        cardContent.appendChild(fileContent)
        cardContent.appendChild(filteredFileContent)
    }
}