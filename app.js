document.addEventListener('DOMContentLoaded' , () => {

    let button = document.getElementById('button');
    let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let code = document.querySelector('.code')
    
    button.addEventListener('click', generateCode);
    function generateCode() {
        let sixNumbers = '';
        for (let i = 0; i < 6; i++) {
            sixNumbers += number[getRandomCode()]
            code.innerHTML = sixNumbers.split('').join(' ')
        }
        console.log(sixNumbers)
    }
    function getRandomCode(){
        return Math.floor(Math.random() * number.length)
    }
})