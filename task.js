var secret = 1729;
var msg = "Random value is ";
min = Math.ceil(10000 / secret);
max = Math.floor(99999999 / secret);
ans = (Math.floor(Math.random() * (max - min)) + min) * secret;
document.getElementById("task").innerHTML = msg + ans;
