//Grab the count-el heading and store it in a variable called countEl
let countEl = document.getElementById("count-el")

//Grab the save-el paragraph and store it in a variable called saveEl
let saveEL = document.getElementById("save-el")
let count = 0

//increment the count variable when the button is clicked
//change the count-el in HTML to reflect the new count
function increment() {
    count += 1
    countEl.innerText = count
}

//create a variable that contain both the count and the dash saperator 
//Make surevto not delete the existing content of the paragraph
function save() {
    let countStr = count + " - "
    saveEL.textContent += countStr
    countEl.textContent = 0
    count = 0
    console.log(count)
}