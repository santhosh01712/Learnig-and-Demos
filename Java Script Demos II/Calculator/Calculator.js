document.getElementById('calculate').addEventListener('click',function(){
    let operandOne = document.getElementById('operandOne').value;
    let operandTwo = document.getElementById('operandTwo').value;
    let operator = document.getElementsByName('operator');
    let selectedOperator;
    let errorMsg = document.getElementById('errorMessage');
    if(operandTwo == "" || operandOne == ""){
        errorMsg.innerHTML = "Input all values";
        errorMsg.style.color = "red" ;
    }
    if(isNaN(operandOne) || isNaN(operandTwo)){
        errorMsg.innerHTML = "Operands can only be digits";
        errorMsg.style.color = "red" ;
    }
    for(i=0;i<operator.length;i++){
        if(operator[i].checked){
            selectedOperator =  operator[i].value;
        }
    }
    var result;
    operandTwo = parseFloat(operandTwo);
    operandOne = parseFloat(operandOne);
    if(selectedOperator == "+"){
        result = operandTwo + operandOne;
        printResult();
    }
    else if(selectedOperator == '-'){
        result = operandOne - operandTwo;
        printResult();
    }
    else if(selectedOperator == "*"){
        result = operandOne * operandTwo;
        printResult();
    }
    else{
        if(operandTwo === 0){
            errorMsg.innerHTML = "Cannot divide by 0";
            errorMsg.style.color = "red" ;
        }
        else{
            result = operandOne / operandTwo;
            printResult();
        }
    }
    function printResult(){
        result = result.toFixed(3)
        if(result < -100000 || result > 100000){
            errorMsg.innerHTML = "Result out of bounds";
            errorMsg.style.color = "red" ;
        }
        else{
            errorMsg.innerHTML = operandOne+" "+selectedOperator+" "+operandTwo+" = "+result;
            errorMsg.style.color = "green" ;
        }
    }

})