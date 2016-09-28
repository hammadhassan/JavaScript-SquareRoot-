var num = prompt ("Enter Number");
var operater = prompt ("Enter Operater");
var $ = Math.sqrt(num);
if (operater === "$") {
    document.getElementById("root").innerHTML=($);
}   else {
    alert("Wrong Operater");
}