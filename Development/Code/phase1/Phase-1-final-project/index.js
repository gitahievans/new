const btn = document.querySelector("button")

const wordSearched = document.querySelector(".word ")
const meaning = document.querySelector(".meaning p")
const synonym = document.querySelector(".synonym p")

function searchWord(){
document.addEventListener("DOMContentLoaded", () => { 

    btn.addEventListener(("click"), (e) => {
    let word = document.querySelector("#to-search").value

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => response.json())
        .then(function(wordData){ 
            wordSearched.textContent = wordData[0].word  
            
            meaning.textContent = wordData[0].meanings[0].definitions[0].definition 
           
            synonym.textContent = wordData[0].meanings[0].definitions[0].example
        })
})
})
}
searchWord()

// const result = document.querySelector(".word")
// const meaning = document.querySelector(".meaning")
// const synonym = document.querySelector(".synonym")

// const button = document.querySelector("button")
// button.addEventListener(("click"), (e) => {
//     let input = document.querySelector("#to-search")

// })