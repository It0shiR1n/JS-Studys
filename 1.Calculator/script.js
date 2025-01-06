let expression = ""
resultLabel = document.getElementById('result-expression')

function clean(){
    resultLabel.innerHTML = "";

}

function insert(num){
    var numero = resultLabel.innerHTML;
    resultLabel.innerHTML = numero + num;

}

function operate(){
    expression = resultLabel.innerHTML 

    if(expression){
        resultLabel.innerHTML = eval(expression)

    }else {
        resultLabel.innerHTML = "Nothing..."

    }

}
