var userChoice = "";    // empty var... value would depend on index from userOpt array
var userOpt = document.querySelectorAll(".userOpt li");  // array of list items that represent user choices
var compOpt = document.querySelectorAll(".compOpt li");  // array of list items that represent computer "choices"
var res = document.getElementById("result");   // html element where the result will be displayed

for (let i = 0; i < userOpt.length; i++) {      // we loop through user choices...
    userOpt[i].addEventListener("click", ()=>{  // ...and add an event to everyone of them
        
        if (i == 0){                                        // depending on index...
            userChoice = "kamen"                            // ...we set a different value... 
            userOpt[0].style.backgroundColor = "#c9b4e0";   // ...and set of different styles
            userOpt[0].style.borderWidth = "11px";
            userOpt[1].style.backgroundColor = "initial";
            userOpt[1].style.borderWidth = "1px";
            userOpt[2].style.backgroundColor = "initial";
            userOpt[2].style.borderWidth = "1px";
        } else if (i == 1){
            userChoice = "papir"
            userOpt[0].style.backgroundColor = "initial";
            userOpt[0].style.borderWidth = "1px";
            userOpt[1].style.backgroundColor = "#c9b4e0";
            userOpt[1].style.borderWidth = "11px";
            userOpt[2].style.backgroundColor = "initial";
            userOpt[2].style.borderWidth = "1px";
        } else if (i == 2){
            userChoice = "makaze"
            userOpt[0].style.backgroundColor = "initial";
            userOpt[0].style.borderWidth = "1px";
            userOpt[1].style.backgroundColor = "initial";
            userOpt[1].style.borderWidth = "1px";
            userOpt[2].style.backgroundColor = "#c9b4e0";
            userOpt[2].style.borderWidth = "11px";
        }
    });
}

function rezultat(){                // function for creating computer choice and relevant display styles
    var compChoice = "";                // empty var... value would depend on random number
    var randomIndex = Math.random();
    if(randomIndex < 0.34){                     // for every random number option...
        compChoice = "kamen";                   // ...we set a different value...
        compOpt[0].style.borderWidth = "11px";  // ...and set of different styles
        compOpt[0].style.backgroundColor = "#a3ccc5";
        compOpt[1].style.borderWidth = "1px";
        compOpt[1].style.backgroundColor = "initial";
        compOpt[2].style.borderWidth = "1px";
        compOpt[2].style.backgroundColor = "initial";     
    } else if(randomIndex < 0.67){
        compChoice = "papir";
        compOpt[0].style.borderWidth = "1px";
        compOpt[0].style.backgroundColor = "initial";
        compOpt[1].style.borderWidth = "11px";
        compOpt[1].style.backgroundColor = "#a3ccc5";
        compOpt[2].style.borderWidth = "1px";
        compOpt[2].style.backgroundColor = "initial";
    } else {
        compChoice = "makaze";
        compOpt[0].style.borderWidth = "1px";
        compOpt[0].style.backgroundColor = "initial";
        compOpt[1].style.borderWidth = "1px";
        compOpt[1].style.backgroundColor = "initial";
        compOpt[2].style.borderWidth = "11px";
        compOpt[2].style.backgroundColor = "#a3ccc5";
    }
    
    console.log("user choice: " + userChoice);  // we check user... 
    console.log("comp choice: " + compChoice);  //...and computer choice in console

    switch (compChoice) {   // we make different result scenarios depending on comparison between user and computer choices
        case "kamen":           // inside switch cases of switch statement that works with computer choices...
            switch (userChoice) {   //...we nest another switch statement that works with user choices
                case "kamen":
                    console.log("draw");
                    res.innerHTML = "draw";
                    break;
                case "papir":
                    console.log("user wins");
                    res.innerHTML = "user wins";
                    break;
                case "makaze":
                    console.log("computer wins");
                    res.innerHTML = "computer wins";
                    break;
                case "":
                    console.log("user nije odabrao");
                    res.innerHTML = "you must choose item to play";
                    break;
            }
            break;
        case "papir":
            switch (userChoice) {
                case "kamen":
                    console.log("computer wins");
                    res.innerHTML = "computer wins";
                    break;
                case "papir":
                    console.log("draw");
                    res.innerHTML = "draw";
                    break;
                case "makaze":
                    console.log("user wins");
                    res.innerHTML = "user wins";
                    break;
                case "":
                console.log("user nije odabrao");
                res.innerHTML = "you must choose item to play";
                break;
            }
            break;
        case "makaze":
            switch (userChoice) {
                case "kamen":
                    console.log("user wins");
                    res.innerHTML = "user wins";
                    break;
                case "papir":
                    console.log("computer wins");
                    res.innerHTML = "computer wins";
                    break;
                case "makaze":
                    console.log("draw");
                    res.innerHTML = "draw";
                    break;
                case "":
                console.log("user nije odabrao");
                res.innerHTML = "you must choose item to play";
                break;
            }
            break;
    }    
}





