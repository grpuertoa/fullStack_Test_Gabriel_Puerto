function missingNumber() {

    const numbers = document.getElementById("numbers");
    const missingNumberValue = document.getElementById("missingNumber");
    const clearButton = document.getElementById('clear');

    const numberChain = numbers.value.split(',').map(
        numbersArray => parseInt(numbersArray.trim(), 10)
    );

    const max = Math.max(...numberChain);
    const min = Math.min(...numberChain);
    let missingNumbers = [];


    for (let i= min; i <= max; i++){
        if(!numberChain.includes(i)){
            missingNumbers.push(i);
        }
    }

    if (missingNumbers.length > 0){
        missingNumberValue.textContent = missingNumbers;
    } else {
        missingNumberValue.textContent = "No hay números faltantes";
    }
    

    clearButton.addEventListener('click', function () {
        numbers.value = "";
        missingNumberValue.textContent = "";
    })

}
