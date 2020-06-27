function getNumber(num){
    console.log(num)
    var result = document.getElementById("result") ;
    result.value += num;
}

function clearResult(){
    var result = document.getElementById("result") ;
    result.value = ""
}
function getResult(){
    var result = document.getElementById("result") ;
    result.value = eval(result.value)
}

function back() {
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
}