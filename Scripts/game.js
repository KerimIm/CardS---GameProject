
function generateRandomNumb(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
var arr = []
for (var i = 0;i<25;i++){  // generisanje 25 random vrijednosti od 1 - 10 i vrijednosti 11 i 12 koje predstavljaju smajlija ili ljutka
   var x = document.getElementById(String(i)).innerHTML = generateRandomNumb(1,11);
   arr.push(x);
}
var plays = 1;
var P1Sum = 0;
var P2Sum = 0;

function igracNaPotezu(num){
    if (plays === 1){
        alert("Igrac 1 je na potezu");
    }
    else {
        alert("Igrac 2 je na potezu");
    }
}

function klikAndSum(id) { // na klik dodjeljuje vrijednosti sumi koje se nalaze na odredjenom dugmetu i ispisuje iste
    if (P1Sum === 0 || P2Sum === 0) {
        document.getElementById("sum1").innerHTML = P1Sum;
        document.getElementById("sum2").innerHTML = P2Sum;
    }
    var num = (arr[id]);
    igracNaPotezu(plays);
    if (plays === 1) {
        P1Sum += num;
        document.getElementById("sum1").innerHTML = P1Sum;

    }
    if (plays === -1) {
        P2Sum += num;
        document.getElementById("sum2").innerHTML = P2Sum;
    }
    if (P1Sum >= 50) {
        return alert("Igrac 1 je pobjednik");
    }
    if (P2Sum >= 50) {
        return alert("Igrac 2 je pobjednik");
    }
    plays *= -1;
}







