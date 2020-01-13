
var plays = 1;
var P1Sum = 0;
var P2Sum = 0;
var arr = [];
var krajIgre = false;

for (var i = 0;i<25;i++){  // generisanje 25 random vrijednosti od 1 - 10 i vrijednosti 11 i 12 koje predstavljaju smajlija ili ljutka
    var x = document.getElementById(String(i)).innerHTML = generateRandomNumb(1,11);
    arr.push(x);
 }
 
function generateRandomNumb(min,max) { //generisanje random vrijednosti
    return Math.floor(Math.random() * (max - min)) + min;
}

function winner(x) { //funkcija koja provjerava da li je jedan od igraca dosegao zbir od 50 bodova
    if (x >= 50) {
        return true;
    }
    else {
        return false;
    }
}

function igracNaPotezu(num){ //funkcija koja mjenja tj. oznacava pobjednika
    if (plays === 1){
        document.getElementById("p1").style.color="green";
        document.getElementById("p2").style.color="black";
    }
    else {
        document.getElementById("p2").style.color="green";
        document.getElementById("p1").style.color="black";
    }
}

function highlight(id){ //funkcija koja mjenja boju broja u buttonu u bijelo i vraca nakon 1s na isto kako je bilo
    var cntnt = document.getElementById(id);
    var origin = cntnt.style.color;
    cntnt.style.color = "white";
    window.setTimeout(function() { cntnt.style.color = origin; }, 1000);
}

function sumAndSwitch(plays,num){
    var sum = 0

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
            krajIgre = true;
            if (krajIgre){
                var answ = confirm("Zelite li rematch?!");
                if (answ){
                    window.location.reload();
                }
            }
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
            krajIgre = true;
            if (krajIgre){
                var answ = confirm("Zelite li rematch?!");
                if (answ) {
                    window.location.reload();
                }
            }
        }
        return document.getElementById("sum2").innerHTML = P2Sum; 
    }
}






