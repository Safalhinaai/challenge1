
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");


a=prompt("enter first number");
b =prompt("enter second number");
c =prompt("enter Third number");

if (a == b == c){
    alert("number is equal")
}else {
    alert("large number is : " + Math.max(a,b,c))
}



