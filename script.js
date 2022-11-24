var input = document.getElementsByClassName('inputbtn');
var answer = document.getElementById('solve');
var result = document.getElementById("result");
var clr = document.getElementById("clr");

//function that display value 
const dis = (val) => result.value += val.target.value ;

//function that evaluates the digit and return result 
const solve = () =>	result.value = eval(result.value);

//function that clears the display 
const clear = () =>	result.value = "";

for (var i = 0; i < input.length; i++) {input[i].onclick = dis;}
clr.onclick = clear;
answer.onclick = solve;