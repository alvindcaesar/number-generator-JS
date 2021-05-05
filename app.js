document.addEventListener('DOMContentLoaded' , () => {

    let button = document.getElementById('button');
    let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let code = document.querySelector('.code');
    let history_board = document.querySelector('.code-history');
    let clear_button = document.getElementById('clear-button')
    
    clear_button.addEventListener('click', removeAllRecords);
    button.addEventListener('click', generateCode);

    function generateCode() {
        let sixNumbers = '';
        for (let i = 0; i < 6; i++) {
            sixNumbers += number[getRandomCode()]
            code.innerHTML = sixNumbers.split('').join(' ')
        }

        getRecord(sixNumbers)
        
    }
    function getRandomCode(){
        return Math.floor(Math.random() * number.length)
    }
    function getRecord(sixNumbers){
        let element = document.createElement('div')
        element.classList.add('code-record')
        element.innerHTML = `<p class="record">${sixNumbers}</p>
                 <button class="remove-button type="button" name="button">Delete code</button>`
        
        history_board.appendChild(element)
        let remove_button = element.querySelector('.remove-button');
        remove_button.addEventListener('click', removeRecord);

    }
    function removeRecord(e){
        let record = e.currentTarget.parentElement
        history_board.removeChild(record)
    }

   
    function removeAllRecords() {
        let records = document.querySelectorAll('.code-record');
        records.forEach( function (record) {
            history_board.removeChild(record)
        

        });
    }

})