var plays = 1;
var P1Sum = 0;
var P2Sum = 0;
var arr = [];
var krajIgre = false;

function generateRandomNumb(min,max) { //generate random val from 1 to 10
    return Math.floor(Math.random() * (max - min)) + min;
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

function generateArray(arr){
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
    return arr;
}
generateArray(arr);
shuffleArray(arr);
for (var i = 0;i<25;i++){ // adding random values to buttons
    document.getElementById(String(i)).innerHTML = arr[i];
}



function switchElements(arr,id){ //switching between elements if value passed is 11(smile) or 12(angry) it switches that value with some other from the array
    console.log(arr[id]);
    var j = generateRandomNumb(0,25);
    while (arr[j] === 11 || arr[j] === 12) {
        j = generateRandomNumb(0,26)
    }
    console.log(arr[j]);
    temp = arr[id];
    arr[id] = arr[j];
    arr[j] = temp;
    document.getElementById(String(id)).innerHTML = arr[id];
    document.getElementById(String(j)).innerHTML = arr[j];
}// it appears in some cases that function isn't working 

function whoIsPlaying(num){ //function for marking the current player
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

function reRun(){
    P1Sum = 0;
    P2Sum = 0;
    document.getElementById("sum1").innerHTML = P1Sum;
    document.getElementById("sum2").innerHTML = P2Sum;
    generateArray(arr);
    shuffleArray(arr);
    for (var i = 0;i<25;i++){ // adding random values to buttons
        document.getElementById(String(i)).innerHTML = arr[i];
    }
    klikAndSum(id);
}

function winner(x,y) { //function which decides who won
    if (x >= 50) {
        alert("Winner is player 1 and he has: " + P1Sum + " points" );
        var conf = confirm("Do you want a rematch?!");
        if (conf){
        plays *= 1;
        whoIsPlaying(plays);
        reRun();
        }
        else {
            window.location.reload();
        }
    }
    else if (y >= 50) {
        alert("Winner is player 2 and he has: " + P2Sum + " points" );
        var conf = confirm("Do you want a rematch?!");
        if (conf){
            plays *= 1;
            whoIsPlaying(plays);
            reRun();
        }
        else {
        window.location.reload();
        }
    }
}

whoIsPlaying(plays);
function klikAndSum(id) { // adds value to sum on click and displays the value
    var num = (arr[id]);
    if (plays === 1) { 
        if (num === 11){
            P1Sum *= 2;
            plays *= -1;
            switchElements(arr,id);
            whoIsPlaying(plays);
            winner(P1Sum,P2Sum);
            return document.getElementById("sum1").innerHTML = P1Sum;
        }
        else if (num === 12){
            plays *= -1;
            P1Sum = 0;
            switchElements(arr,id);
            whoIsPlaying(plays);
            winner(P1Sum,P2Sum);
            return document.getElementById("sum1").innerHTML = P1Sum;
        }
        else {
            P1Sum += num;
            plays *= -1;
            whoIsPlaying(plays);
            winner(P1Sum,P2Sum);
            return document.getElementById("sum1").innerHTML = P1Sum;   
        }
    }
    if (plays === -1) {
        if (num === 11){
            P2Sum *= 2;
            plays *= -1;
            switchElements(arr,id);
            whoIsPlaying(plays);
            winner(P1Sum,P2Sum);
            return document.getElementById("sum2").innerHTML = P2Sum;
        }
        else if (num === 12){
            P2Sum = 0;
            plays *= -1;
            switchElements(arr,id);
            whoIsPlaying(plays);
            winner(P1Sum,P2Sum);
            return document.getElementById("sum2").innerHTML = P2Sum;
        }
        else {
            P2Sum += num;
            plays *= -1;
            whoIsPlaying(plays);
            winner(P1Sum,P2Sum);
            return document.getElementById("sum2").innerHTML = P2Sum;
        }
    }
}

/* if(winner(P1Sum,P2Sum)){
    
} */




