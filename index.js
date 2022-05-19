let servicesRequested = []
let totalCost = 0
let taskArr = ["Wash Car", "Mow Lawn", "Pull Weeds"]
let tasks = {
"Wash Car": 10,
"Mow Lawn": 20,
"Pull Weeds": 30
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

    //Create p element and assign id
    const item = document.createElement("p")
    item.setAttribute("id", `item${i}`)

    //Name of selected item, add id
    const name = document.createElement("span")
    name.textContent =` ${servicesRequested[i]}`
    name.setAttribute("id", `Element${i}`)

    //remove button
    const remove = document.createElement("button")
    remove.innerHTML = `<button onclick="remove(this)" >Remove</button>`


    const price = document.createElement("span")
    price.textContent = `$${tasks[servicesRequested[i]]}`
    price.classList.add("floatright", "bigfont")
    item.classList.add("bigfont")

    //Add elements to newly made p element 
    item.append(name)
    item.append(remove)
    item.append(price)
    selectionContainer.append(item)
}
}

//Removes current row from elements selected. 
// indexToRemove returns -1 despite containing text in servicesRequested array. 
function remove(elem){
    console.log(elem.parentNode.parentNode.textContent)
    //Get relative container parent element 
    let parentEl = elem.parentNode.parentNode
    console.log(parentEl.firstChild.textContent)
    console.log(servicesRequested)
    //Extract text of first element in row (name of service)
    let text = parentEl.firstChild.textContent;
    // Get index of servicesRequested array where text is found
    let indexToRemove = servicesRequested.indexOf(text)
    
    //Logs -1 instead of correct index. Why? 
    console.log(indexToRemove)

    //Update array - remove element at index found above
    servicesRequested  = servicesRequested.splice(indexToRemove,1);
    
    //Re-render elements 
    render();
    renderTotal();
  }


//Renders total sum based on elements 
function renderTotal() {
    totalContainer.innerHTML = ""
    let counter = 0
    for (let i=0;i<servicesRequested.length;i++){
        counter += tasks[servicesRequested[i]]
    }
    const total = document.createElement("span")
    total.textContent = `$${counter}`
    totalContainer.append(total)
}

//Call render once to start
render()


//Buttons listeners to add service to array and display

//Wash car button
washBtn.addEventListener("click", function() {
    //only add if it is not currently present (no duplicates)
    if (servicesRequested.includes("Wash Car")) {
        console.log("Found item in array, can't add it")
    } else {
        servicesRequested.push(taskArr[0])
    }
    console.log(servicesRequested)
    render()
    renderTotal()
    }
)
//Mow lawn button
mowBtn.addEventListener("click", function() {
    if (servicesRequested.includes("Mow Lawn")) {
        console.log("Found item in array, can't add it")
    } else {
        servicesRequested.push(taskArr[1])
    }
    console.log(servicesRequested)
    render()
    renderTotal()
    })

    //Pull Weeds button
weedsBtn.addEventListener("click", function() {
    if (servicesRequested.includes("Pull Weeds")) {
        console.log("Found item in array, can't add it")
    } else {
        servicesRequested.push(taskArr[2])
    }
    console.log(servicesRequested)
    render()
    renderTotal()
    })
