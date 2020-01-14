var plays = 1;
var P1Sum = 0;
var P2Sum = 0;
var arr = [];
var krajIgre = false;

for (var i = 0; i < 17; i++){ //generete 17 numbers between 1-10
    var x = generateRandomNumb(1,11);
    arr.push(x);
}

for (var j = 0; j < 8; j++){
    if (j < 4){
        arr.push(11);
    }
    else {
        arr.push(12);
    }
}
//algoritham for shuffeling elements in array found on link below
function shuffleArray(arr) { // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
shuffleArray(arr);

function switchElements(arr,id){ //switching between elements if value passed is 11(smile) or 12(angry) it switches that value with some other from the array
    var j = generateRandomNumb(0,26);
    while (arr[j] === 11 || arr[j] === 12) {
        j = generateRandomNumb(0,26)
    }
    temp = arr[id];
    document.getElementById(String(id)).innerHTML = arr[j];
    document.getElementById(String(j)).innerHTML = temp;
    
}
function generateRandomNumb(min,max) { //generate random val from 1 to 10
    return Math.floor(Math.random() * (max - min)) + min;
}


for (var i = 0;i<25;i++){ // adding random values to buttons
    document.getElementById(String(i)).innerHTML = arr[i];
}

function winner(x) { //function which decides who won
    if (x >= 50) {
        return true;
    }
    else {
        return false;
    }
}

function igracNaPotezu(num){ //function for marking the current player
    if (plays === 1){
        document.getElementById("p1").style.color="green";
        document.getElementById("p2").style.color="black";
    }
    else {
        document.getElementById("p2").style.color="green";
        document.getElementById("p1").style.color="black";
    }
}

function highlight(id){ //changes button color to white when clicked and reverts it back to previous color
    var cntnt = document.getElementById(id);
    var origin = cntnt.style.color;
    cntnt.style.color = "white";
    window.setTimeout(function() { cntnt.style.color = origin; }, 1000);
}
if (P1Sum === 0 || P2Sum === 0) {
    document.getElementById("sum1").innerHTML = P1Sum;
    document.getElementById("sum2").innerHTML = P2Sum;
}
igracNaPotezu(plays);
function klikAndSum(id) { // adds value to sum on click and displays the value
    

    var num = (arr[id]);
    if (plays === 1) { 
        if (num === 11){
            plays *= -1;
            igracNaPotezu(plays);
            switchElements(arr,id);
            return document.getElementById("sum1").innerHTML = P1Sum * P1Sum;
        }
        else if (num === 12){
            plays *= -1;
            P1Sum = 0;
            igracNaPotezu(plays);
            switchElements(arr,id);
            return document.getElementById("sum1").innerHTML = P1Sum;
        }
        else {
            P1Sum += num;
            plays *= -1;
            igracNaPotezu(plays);
            return document.getElementById("sum1").innerHTML = P1Sum;   
        }
    }
    if (plays === -1) {
        if (num === 11){
            plays *= -1;
            igracNaPotezu(plays);
            switchElements(arr,id);
            return document.getElementById("sum2").innerHTML = P2Sum * P2Sum;
        }
        else if (num === 12){
            P2Sum = 0;
            plays *= -1;
            igracNaPotezu(plays);
            switchElements(arr,id);
            return document.getElementById("sum2").innerHTML = P2Sum;
        }
        else {
            P2Sum += num;
            plays *= -1;
            igracNaPotezu(plays);
            return document.getElementById("sum2").innerHTML = P2Sum;
        
        }
    }
}






