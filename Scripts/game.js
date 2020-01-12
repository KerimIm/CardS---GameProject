var plays = 1;
var P1Sum = 0;
var P2Sum = 0;
var arr = [];

for (var i = 0;i<25;i++){  // generisanje 25 random vrijednosti od 1 - 10 i vrijednosti 11 i 12 koje predstavljaju smajlija ili ljutka
    var x = document.getElementById(String(i)).innerHTML = generateRandomNumb(1,11);
    arr.push(x);
 }
 
function generateRandomNumb(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function winner(x) {
    if (x >= 50) {
        return true;
    }
    else {
        return false;
    }
}

function igracNaPotezu(num){
    if (plays === 1){
        document.getElementById("p1").style.color="green";
        document.getElementById("p2").style.color="red";
    }
    else {
        document.getElementById("p2").style.color="green";
        document.getElementById("p1").style.color="red";
    }
}


igracNaPotezu(plays);

function klikAndSum(id) { // na klik dodjeljuje vrijednosti sumi koje se nalaze na odredjenom dugmetu i ispisuje iste
    if (P1Sum === 0 || P2Sum === 0) {
        document.getElementById("sum1").innerHTML = P1Sum;
        document.getElementById("sum2").innerHTML = P2Sum;
    }

    var num = (arr[id]);
    if (plays === 1) {
        P1Sum += num;
        plays *= -1;
        igracNaPotezu(plays);
        if (winner(P1Sum)) {
            document.getElementById("sum1").innerHTML = P1Sum;
            alert("Pobjednik je igrac 1!!!");
        }
        return document.getElementById("sum1").innerHTML = P1Sum;
    }
    if (plays === -1) {
        P2Sum += num;
        plays *= -1;
        igracNaPotezu(plays);
        if (winner(P2Sum)) {
            document.getElementById("sum2").innerHTML = P2Sum;
            alert("Pobjednik je igrac 2!!!");
        }
        return document.getElementById("sum2").innerHTML = P2Sum; 
    }
}








