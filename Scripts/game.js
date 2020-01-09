
function generateRandomNumb(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
for (var i = 1;i<26;i++){
    document.getElementById(String(i)).innerHTML = generateRandomNumb(1,11);
}

var P1Sum = 0
var P2Sum = 0

