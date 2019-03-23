let ctImage = document.querySelector('img')
ctImage.addEventListener('click', counter, false)
let p = document.createElement('p')
let count = 0
function counter(event){
    event.preventDefault()
    count++
    p.textContent = count
    addValueToLocalStorage()
    getValueFromLocalStorage()
}

function addValueToLocalStorage(){
    localStorage.setItem('countkey', count)
}

function getValueFromLocalStorage(){
    let storedValue = localStorage.getItem('countkey')
    let h2 = document.createElement('h2')
    document.body.appendChild(h2)
    h2.textContent = storedValue
}
document.body.appendChild(p)