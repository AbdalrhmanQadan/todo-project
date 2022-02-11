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
