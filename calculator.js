document.getElementById('num').value = ""; //this is to remove extra zero before first no.
function display(val) {
    document.getElementById("num").value += val; //this is not evaluating it is adding values like string concatenation
    document.getElementById("input").innerHTML = document.getElementById("num").value;
}

function solve() {
    var x = document.getElementById("num").value;
    var y = eval(x); // this is very imp
    document.getElementById("result").innerHTML = " =   " + y;
}

function clr() {
    document.getElementById("num").value = "";
    document.getElementById("input").innerHTML = "";
    document.getElementById("result").innerHTML = "";

}