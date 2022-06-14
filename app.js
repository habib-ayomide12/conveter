const inputBar = document.getElementById('Centimeters_inches')
let convertBtn = document.getElementById('convert')
let output = document.getElementById('outputInches')


alert('input the centimeters to convert to inches')


function valuNum() {
   let ans = inputBar.value*0.39370
   output.textContent = ans
}

convertBtn.addEventListener('click', valuNum)