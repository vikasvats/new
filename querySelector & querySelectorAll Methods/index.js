// Write the code as shown in the video below:

// Write answer to the questions asked below:

const basket = document.querySelector("#basket-heading")

basket.style.color = 'brown'

const fruits = document.querySelectorAll('.fruit')

for (let i = 0; i < fruits.length; i++){
    if (i % 2 !== 0) {
        fruits[i].style.backgroundColor = "brown"
        fruits[i].style.color = 'white'
    }
}