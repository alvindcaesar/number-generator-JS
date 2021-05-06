document.addEventListener('DOMContentLoaded' , () => {

    let button = document.getElementById('button');
    let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let code = document.querySelector('.code');
    let history_board = document.querySelector('.code-history');
    let clear_button = document.getElementById('clear-button');
    let restore_records = [];
    let restore_deleted_records = document.getElementById('restore-button');
    let timer_display = document.querySelector('.timer');
    let timer = 0;
    
    clear_button.addEventListener('click', removeAllRecords);
    button.addEventListener('click', generateCode);
    restore_deleted_records.addEventListener('click', restoreRecords);

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
        startTimer()
        storeDeletedRecord(record)
    }

    function removeAllRecords() {
        let records = document.querySelectorAll('.code-record');
        records.forEach( function (record) {
            history_board.removeChild(record)
        
        storeDeletedRecord(record)
        
        });
        restore_deleted_records.style.display = 'inline';
        startTimer();
        timer = 10;
    }

    function storeDeletedRecord(record){
        restore_records.push(record)
    }

    function restoreRecords() {
        restore_records.forEach( function(record) {
            history_board.appendChild(record)

        });
        restore_deleted_records.style.display = "none";
        timer_display.style.display = "inline";
        timer = 0;
        restore_records = [];
    }

    function startTimer(){
        restore_deleted_records.style.display = "inline";
        timer_display.style.display = "inline";

        let runTimer = setInterval(function () {
            if (timer > 0){
                timer -= 1
                timer_display.innerHTML = `${timer} seconds to restore`
            } else{
                clearInterval(runTimer)
                restore_deleted_records.style.display = "none";
                timer_display.style.display = "none";
                timer = 10;
                restore_records = [];
            }
        }, 1000);
    }
})