const btn = document.querySelector("button#search")

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
            let def = wordData[0].meanings[0].definitions[0].definition
            
            meaning.textContent = `${def}`

            example.textContent = wordData[0].meanings[0].definitions[0].example

        })
       
       })
})
}

searchWord()







// let def2 = wordData[0].meanings[0].definitions[1].definition
// let def3 = wordData[0].meanings[0].definitions[2].definition
// if (def3 === true){ 
//     meaning.textContent = `1:${def1} 2:${def2} 3:${def3}`
//    }
//    else if(def2 === true){
//     meaning.textContent = `1:${def1} 2:${def2}`
//    }
//    else
//    {
//     meaning.textContent = `${def1}`
//    }
