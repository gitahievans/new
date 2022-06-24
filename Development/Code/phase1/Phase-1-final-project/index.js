const btn = document.querySelector("button")

const wordSearched = document.querySelector(".word p")
const meaning = document.querySelector(".meaning p")
const example = document.querySelector(".example p")

function searchWord(){
document.addEventListener("DOMContentLoaded", () => { 

    btn.addEventListener(("click"), (e) => {
    let word = document.querySelector("#to-search").value

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => response.json())
        .then(function(wordData){ 
            wordSearched.textContent = wordData[0].word  
            
            meaning.textContent = wordData[0].meanings[0].definitions[0].definition 
           
            example.textContent = wordData[0].meanings[0].definitions[0].example
        })
})
})
}
searchWord()
