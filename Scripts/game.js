var plays = 1;
var P1Sum = 0;
var P2Sum = 0;
var arr = [];

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
            arr.push(11); // 11 represents :)
        }
        else {
            arr.push(12); // 12 represents :(
        }
    }
    return arr;
}
generateArray(arr);
shuffleArray(arr);
for (var i = 0;i<25;i++){ // adding random values to buttons
    if (arr[i] === 11){
        document.getElementById(String(i)).innerHTML = String.fromCodePoint(0x1F603);
    } 
    else if (arr[i] === 12) {
        document.getElementById(String(i)).innerHTML = String.fromCodePoint(0x1F47F);

    }
    else {
        document.getElementById(String(i)).innerHTML = arr[i];
    } 
}

function switchElements(arr,id){ //switching between elements if value passed is 11(smile) or 12(angry) it switches that value with some other from the array
    var j = generateRandomNumb(0,25);
    while (arr[j] === 11 || arr[j] === 12) {
        j = generateRandomNumb(0,26)
    }
    console.log(arr[j]);
    temp = arr[id];
    arr[id] = arr[j];
    arr[j] = temp;
    document.getElementById(String(id)).innerHTML = arr[id];
    if (arr[j] === 11){
    document.getElementById(String(j)).innerHTML = String.fromCodePoint(0x1F603);
    }
    else if (arr[j] === 12) {
        document.getElementById(String(j)).innerHTML = String.fromCodePoint(0x1F47F);
    }
}

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
    var cntnt = document.getElementById(String(id));
    var origin = cntnt.style.color;
    cntnt.style.color = "black";
    window.setTimeout(function() { cntnt.style.color = origin; }, 800);
    window.setTimeout(function(){ klikAndSum(id); }, 800);
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
        if (arr[i] === 11){
            document.getElementById(String(i)).innerHTML = String.fromCodePoint(0x1F603);
        } 
        else if (arr[i] === 12) {
            document.getElementById(String(i)).innerHTML = String.fromCodePoint(0x1F47F);
    
        }
        else {
            document.getElementById(String(i)).innerHTML = arr[i];
        } 
    }
    klikAndSum(id);
}

function switchNumbers(arr,id){ //switching between numbers 
    var j = generateRandomNumb(0,25);
    while (arr[j] === 11 || arr[j] === 12) {
        j = generateRandomNumb(0,25)
    }
    temp = arr[id];
    arr[id] = arr[j];
    arr[j] = temp;
    document.getElementById(String(id)).innerHTML = arr[id];
    document.getElementById(String(j)).innerHTML = temp;
}

function clickCounter(id){
    
}

function howLongItStays(arr,id){
    var i;
    var j;
    var row = 0;
    var col = 0;
    var sum = 0;
    if (id >= 0 && id <=4){
        i = 0;
        j = id;
        for(i;i<=4;i++){
            if (arr[i] !== 11 || arr[i] !== 12){
                row += arr[i];
            }
            for(j;j<=arr.length;j+=5){
                if (arr[j] !== 11 || arr[j] !== 12){
                    col += arr[j];
                }
            }
        }
        return sum = row + col - arr[id];
    }
    else if (id >= 5 && id <=9)
    {
        i = 5;
        j = id - 5;
        for (i;i<=9;i++){
            if (arr[i] !== 11 || arr[i] !== 12){
                row += arr[i];
            }
            for(j;j<=arr.length;j+=5){
                if (arr[j] !== 11 || arr[j] !== 12){
                    col += arr[j];
                }
            }
        }
        return sum = row + col - arr[id];
    }
    else if (id >= 10 && id <= 14){
        i = 10;
        j = id - 10;
        for (i;i<=14;i++){
            if (arr[i] !== 11 || arr[i] !== 12){
                row += arr[i];
            }
            for(j;j<=arr.length;j+=5){
                if (arr[j] !== 11 || arr[j] !== 12){
                    col += arr[j]
                }
            }
        }
        return sum = row + col - arr[id];
    }
    else if (id >= 15 && id <= 19)
    {
        i = 15;
        j = id - 15;
        for (i;i<=19;i++){
            if (arr[i] !== 11 || arr[i] !== 12){
                row += arr[i];
            }
            for(j;j<=arr.length;j+=5){
                if (arr[j] !== 11 || arr[j] !== 12){
                    col += arr[j];
                }
            }
        }
        return sum = row + col - arr[id];
    }
    else{
        i = 20;
        j = id - 20;
        for (i;i<=24;i++){
            if (arr[i] !== 11 || arr[i] !== 12){
                row += arr[i];
            }
            for(j;j<=arr.length;j+=5){
                if (arr[j] !== 11 || arr[j] !== 12){
                    col += arr[j];
                }
            }
        }
        return sum = row + col - arr[id];
    }
}

function winner(x,y) { //function which decides who won
    if (x >= 50) {
        var conf = confirm("Player 1 won. Do you want a rematch?!");
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
        var conf = confirm("Player 2 won. Do you want a rematch?!");
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
function displayScoreP1(plays,points){
    if (plays === 1){
        return document.getElementById("sum1").innerHTML = points;
    }
    else {
        return document.getElementById("sum2").innerHTML = points;
    }
}

whoIsPlaying(plays);
function klikAndSum(id) { // adds value to sum on click and displays the value
    var num = arr[id];
    if (plays === 1) { 
        if (num === 11){
            P1Sum *= 2;
            displayScoreP1(plays,P1Sum);
            switchElements(arr,id);
            plays *= -1;
            window.setTimeout(function(){ whoIsPlaying(plays); }, 500);
            window.setTimeout(function(){ winner(P1Sum,P2Sum); }, 500);   
        }
        else if (num === 12){
            P1Sum = 0;
            displayScoreP1(plays,P1Sum);
            switchElements(arr,id);
            plays *= -1;
            window.setTimeout(function(){ whoIsPlaying(plays); }, 500);
            window.setTimeout(function(){ winner(P1Sum,P2Sum); }, 500);  
        }
        else {
            P1Sum += num;
            displayScoreP1(plays,P1Sum);
            plays *= -1;
            window.setTimeout(function(){ whoIsPlaying(plays); }, 500);
            window.setTimeout(function(){ winner(P1Sum,P2Sum); }, 500);  
        }
    }

    else {
        if (num === 11){ 
            P2Sum *= 2;
            displayScoreP1(plays,P2Sum);
            plays *= -1;
            window.setTimeout(function(){ whoIsPlaying(plays); }, 500);
            window.setTimeout(function(){ winner(P1Sum,P2Sum); }, 500);  
            switchElements(arr,id);
            
        }
        else if (num === 12){
            P2Sum = 0;
            displayScoreP1(plays,P2Sum);
            plays *= -1;
            window.setTimeout(function(){ whoIsPlaying(plays); }, 500);
            window.setTimeout(function(){ winner(P1Sum,P2Sum); }, 500);  
            switchElements(arr,id);
            
        }
        else {
            P2Sum += num;
            displayScoreP1(plays,P2Sum);
            plays *= -1;
            window.setTimeout(function(){ whoIsPlaying(plays); }, 500);
            window.setTimeout(function(){ winner(P1Sum,P2Sum); }, 500);  
        }
    }
}