var res = document.getElementById("result");
var userChoice = "";
var userOpt = document.querySelectorAll(".userOpt li");  // lista 
var compOpt = document.querySelectorAll(".compOpt li");

for (let i = 0; i < userOpt.length; i++) {      // lupujemo kroz niz user opcija
    userOpt[i].addEventListener("click", ()=>{  // dodeljujemo klik event istim
        
        if (i == 0){                            // za svako pojedinacnu user opciju dodeljujemo rezultat i stil 
            userChoice = "kamen"
            userOpt[0].style.backgroundColor = "#c9b4e0";
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

function rezultat(){
    var compChoice = "";
    var randomIndex = Math.random();
    if(randomIndex < 0.34){       // za svaku pojedinacnu comp opciju dodeljujemo rezultat i stil 
        compChoice = "kamen";
        compOpt[0].style.borderWidth = "11px";
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

    console.log("user choice: " + userChoice);
    console.log("comp choice: " + compChoice);
    
    switch (compChoice) {  // pravimo scenarija za rezultat u zavisnosti od poredjenja user odabira i computer random odabira
        case "kamen":
            switch (userChoice) {
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
                    res.innerHTML = "you must choose to play";
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
                res.innerHTML = "you must choose to play";
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
                res.innerHTML = "you must choose to play";
                break;
            }
            break;
    }    
}





