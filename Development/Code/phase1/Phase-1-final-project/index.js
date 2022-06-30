const btn = document.querySelector("button#search")
const wordSearched = document.querySelector(".word p")
const meaning = document.querySelector(".meaning p")
const example = document.querySelector(".example p")
const wordProperties = document.querySelector("div.word p")
// const input = document.querySelector(".search-container input") 


// function searchWord(){
// document.addEventListener("DOMContentLoaded", () => { 

//     btn.addEventListener(("click"), (e) => {
//     let word = document.querySelector("#to-search").value

//     fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
//         .then(response => response.json())
//         .then(function(wordData){ 
            
//             wordSearched.textContent = wordData[0].word  
//             let def = wordData[0].meanings[0].definitions[0].definition
            
//             meaning.textContent = `${def}`

//             example.textContent = wordData[0].meanings[0].definitions[0].example

            
//         })
//     })
// })
// // }

// searchWord()


function fetchData(word){
    btn.addEventListener(("click"), (e) => {
        let word = document.querySelector("#to-search").value
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => response.json())
        .then(wordData =>  
            addToNode(wordData))
            document.getElementById("to-search").value = ' '
            })
        }

    fetchData()

function addToNode(wordData){
    wordSearched.textContent = wordData[0].word
    let def = wordData[0].meanings[0].definitions[0].definition
    meaning.textContent = `${def}`
    example.textContent = wordData[0].meanings[0].definitions[0].example
}





















// wordProperties.addEventListener("mouseover", e => {
//                 alert("you're moving")
//                 wordProperties.style.backgroundColor = "grey";
//             })



    // wordSearched.addEventListener("click", e => {
    //     console.log("the mouse is over me")
    // })
    // wordSearched.addEventListener("mouseover", e => {
    //     console.log("the mouse is not over me")
    // })
