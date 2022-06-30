const btn = document.querySelector("button#search")
const wordSearched = document.querySelector(".word p")
const meaning = document.querySelector(".meaning p")
const example = document.querySelector(".example p")
let voice = document.querySelector(".voice button")

// async function fetchData(word){
//     btn.addEventListener(("click"), (e) => {
//         let word = document.querySelector("#to-search").value
//         fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
//         .then(response => response.json())
//         .then(wordData =>  
//             addToNode(wordData))
//             document.getElementById("to-search").value = ' '
//             })
//         }
//   fetchData()
  

// function addToNode(wordData){
//     wordSearched.textContent = wordData[0].word
//     let def = wordData[0].meanings[0].definitions[0].definition
//     meaning.textContent = `${def}`
//     example.textContent = wordData[0].meanings[0].definitions[0].example
// }

let input = document.querySelector("#to-search")

fetchData("love")
async function fetchData(word){
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => response.json())
        return response[0]
    }

btn.addEventListener("click", addDictionaryInfo)


async function addDictionaryInfo(){
    const data = await fetchData(input.value)
    console.log(data);

    wordSearched.textContent = data.word
    meaning.textContent = data.meanings[0].definitions[0].definition
    example.textContent = data.meanings[0].definitions[0].example
}

voice.addEventListener("click", pronounce)

async function pronounce(){
    const data = await fetchData(input.value)
    
    voice = new Audio(data.phonetics[0].audio)
    voice.play()
}






// function addToNode(wordData){
//     wordSearched.textContent = wordData[0].word
//     let def = wordData[0].meanings[0].definitions[0].definition
//     meaning.textContent = `${def}`
//     example.textContent = wordData[0].meanings[0].definitions[0].example
// }


















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
