var names = [];

for (var i = 0; i < 5; i++) {
    names[i] = prompt("Please enter name #" + (i + 1));
}

var userName = prompt("Please enter your name");

var match;
for (var i = 0; i < names.length; i++) {
    if (userName == names[i]) {
        match = true;
        alert(userName + ", you have successfully logged in!");
    }
}

if (!match) {
    alert("Error!");
}

