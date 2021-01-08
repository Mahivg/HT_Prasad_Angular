var headings = document.getElementById("headings");
// console.log(myElement);
// console.dir(myElement);
// myElement.textContent = "Test Changed";
var paragraph = document.getElementById("paragraph");
paragraph.appendChild(headings);

function printConsoleOnClick() {
    console.log("clicked on paragraph...");
}

var printInConsoleOnClick = function() {
    console.log("clicked on paragraph...");
}

var addition = function(num1, num2) {
    return num1 + num2;
}

var d = d => d* 2;

d = [1,2,3,4,5];

d = ["1","2"];

d = [1, "2", {name: "name"}];


var additionL = (num1, num2) =>  num1 + num2 ;
var additionL = (num1, num2) => { console.log(d); return num1 + num2 };
// Event Listeners
paragraph.addEventListener("mouseover", printInConsoleOnClick);


function extractFormValues() {
    var inputTxt = document.getElementById("inputTxt");

    var arrayOfH2 = document.getElementsByTagName('h2');

    document.querySelectorAll('.box');


    var name = inputTxt.value;

    var inputNum = document.getElementById("inputNum");
    var age = inputNum.value;

    inputNum.value = 28;

    var inputEmail = document.getElementById("inputEmail");
    var email = inputEmail.value;

    var inputPass = document.getElementById("inputPass");
    var password = inputPass.value;

    var user = {
        'name' : name,
        'age' : age,
        'email' : email,
        'password': password
    };
    alert("Value Submitted.."  + JSON.stringify(user));
}

