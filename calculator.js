var firstNumber = window.prompt('Input first number');

var operator = window.prompt(firstNumber + '\n Input operator \n eg. +, -, /, *');

var secondNumber = window.prompt(firstNumber + operator +'\n Input second number')


if (operator == '+'){
    alert(firstNumber + operator + secondNumber + '=' +
         (parseInt(firstNumber) + parseInt(secondNumber))
       )
}else if(operator == '-'){
    alert(firstNumber + operator + secondNumber + '=' +
         (parseInt(firstNumber) - parseInt(secondNumber))
        )
} else if(operator == '*'){
    alert(firstNumber + operator + secondNumber + '=' +
         (parseInt(firstNumber) * parseInt(secondNumber))
        )
} else if(operator == '/'){
    alert(firstNumber + operator + secondNumber + '=' +
         (parseInt(firstNumber) / parseInt(secondNumber))
        )
} else{
    alert('error')
}

