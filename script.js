let span = document.getElementById('span')
let count = 0

function Add() {
    count += 1 
    span.innerHTML = count
}


function Reset() {
    count = 0 
    span.innerHTML = 0 
}



let input = document.getElementById('text')

input.addEventListener('change', (e) => {
    
    e.target.nextElementSibling.innerHTML = e.target.value
})
