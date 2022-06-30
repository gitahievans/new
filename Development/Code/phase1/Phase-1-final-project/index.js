document.addEventListener("DOMContentLoaded", () => {
   
    const btn = document.querySelector("button#search")
    const wordSearched = document.querySelector(".word p")
    const meaning = document.querySelector(".meaning p")
    const example = document.querySelector(".example p")
    let voice = document.querySelector(".voice button")
    let wordDetails = document.querySelector(".details p")
    let input = document.querySelector("#to-search")


    async function fetchData(word){
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then(response => response.json())
            return response[0]
        }
        

    btn.addEventListener("click", addDictionaryInfo)

    async function addDictionaryInfo(){
        const data = await fetchData(input.value)
        wordSearched.textContent = data.word
        meaning.textContent = data.meanings[0].definitions[0].definition
        example.textContent = data.meanings[0].definitions[0].example
        wordDetails.textContent = `WORD TYPE: ${data.meanings[0].partOfSpeech} SYNOYMS: ${data.meanings[0].synonyms}`
        
    }

   
    voice.addEventListener("click", pronounce)

    async function pronounce(){
        const data = await fetchData(input.value)
        
        voice = new Audio(data.phonetics[0].audio)
        voice.play()
    }

})
