var nameUser = prompt("Please enter your name ");
console.log(nameUser);

var genderUser = prompt("Please what your gender ");

var ageUser = prompt("How old are you?");
console.log(ageUser);

var messageU = confirm("if you wants to skip the welcoming message klick cancel!");
if (messageU == true) {
    if (genderUser === "male") {
        alert("Welcome Mr " + nameUser);
    }
    else if (genderUser === "female") {
        alert("Welcome Ms " + nameUser);
    }
    else {
        alert("Welcome " + nameUser);
    }
}
else {
    alert("bay");
}

var Questionprompt1 = prompt("are you ok ?");
var Questionprompt2 = prompt("Can you use the web page ?");
var Questionprompt3 = prompt("do you have Problem when using computer ?");

const QuestionsFun = () => {
    let arr = [Questionprompt1, Questionprompt2, Questionprompt3];
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "yes" || arr[i] == "no") {
            console.log(arr[i]);
            arr2.push(arr[i]);
            console.log(arr2)
        }

        else {
            console.log("invalid")
            arr2.push("invalid")
            console.log(arr2)
        }
    }
}
QuestionsFun()



/*
const Q2Fun = () => {
    var Q1p = prompt("Can you use the web page ?");
    let arr = [];
    if (Q1p === "yes" || Q1p === "no") {
        arr.push(Q1p);
    }
    else {
        arr.push("invalid");
    }
    console.log(arr)
}

const Q3Fun = () => {
    var Q1p = prompt("do you have Problem when using computr ?");
    let arr = [];
    if (Q1p === "yes" || Q1p === "no") {
        arr.push(Q1p);
    }
    else {
        arr.push("invalid");
    }
    console.log(arr)
}

Q1Fun();
Q2Fun();
Q3Fun();



var p1 = prompt("can 1 ?");
var p2 = prompt("can 2 ?");
var p3 = prompt("can 3 ?");

const fun = () => {
    if (p1 == "yes" || p1 == "no") {
        console.log(p1);
    }
    else { console.log("invalid") }
    if (p2 == "yes" || p2 == "no") {
        console.log(p2);
    }
    else { console.log("invalid") }
    if (p3 == "yes" || p3 == "no") {
        console.log(p3);
    }
    else { console.log("invalid") }
}

const fun2 = (x, y, z) => {
    let arr = [];
    arr.push(x);
    arr.push(y);
    arr.push(z);
    console.log(arr)
}
fun2(p1, p2, p3);
fun();
*/