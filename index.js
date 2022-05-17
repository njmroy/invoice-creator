let servicesRequested = []
let totalCost = 0
let taskArr = ["wash car", "mow lawn", "pull weeds"]
let tasks = {
"wash car": 10,
"mow lawn": 20,
"pull weeds": 30
}
// Get buttons 
const washBtn = document.getElementById("washBtn")
const mowBtn = document.getElementById("mowBtn")
const weedsBtn = document.getElementById("weedsBtn")
const selectionContainer = document.getElementById("selection-container")
const totalContainer = document.getElementById("total-value")

//Updates view of items selected
function render() {
selectionContainer.innerHTML= ""
for (let i=0; i<servicesRequested.length; i++) {
    const item = document.createElement("p")
    item.textContent = ` ${servicesRequested[i]}, $${tasks[servicesRequested[i]]}`
    selectionContainer.append(item)

}
}

function renderTotal() {
totalContainer.innerHTML = ""
let counter = 0
for (let i=0;i<servicesRequested.length;i++){
    counter += tasks[servicesRequested[i]]
}
const total = document.createElement("p")
total.textContent = `$${counter}`
totalContainer.append(total)

}
//Call render once to start
render()

//Buttons listeners to add service to array and display
washBtn.addEventListener("click", function() {
    //only add if it is not currently present (no duplicates)
    if (servicesRequested.includes("wash car")) {
        console.log("Found item in array, can't add it")
    } else {
        servicesRequested.push(taskArr[0])
    }
    console.log(servicesRequested)
    render()
    renderTotal()
    }
)

mowBtn.addEventListener("click", function() {
    if (servicesRequested.includes("mow lawn")) {
        console.log("Found item in array, can't add it")
    } else {
        servicesRequested.push(taskArr[1])
    }
    console.log(servicesRequested)
    render()
    renderTotal()
    })

weedsBtn.addEventListener("click", function() {
    if (servicesRequested.includes("pull weeds")) {
        console.log("Found item in array, can't add it")
    } else {
        servicesRequested.push(taskArr[2])
    }
    console.log(servicesRequested)
    render()
    renderTotal()
    })



//Render data function 
