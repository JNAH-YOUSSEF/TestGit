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




function Hide() {
      let h1 = document.querySelector('#h1') 
      h1.classList.toggle('hide')
}