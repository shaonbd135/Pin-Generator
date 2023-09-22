
//code for generate new pin

var generatePin = document.getElementById('generate-pin');

generatePin.addEventListener('click', function(){
    var generatePinDisplay = document.getElementById('generate-pin-display');

    generatePinDisplay.value = "";

    var generateNewPin = generateRandom4DigitNumber();

    generatePinDisplay.value = generateNewPin ;

    
})

//function for Generate 4 digit pin
function generateRandom4DigitNumber() {
    const min = 1000; // Smallest 4-digit number
    const max = 9999; // Largest 4-digit number
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Reusable function to handle button clicks

function handleButtonClick(buttonId) {
    var button = document.getElementById(buttonId);
    
    button.addEventListener('click', function () {
        var number = button.innerText;
        var submitDisplay = document.getElementById('submit-display');
               
        var submitDisplayNumber = submitDisplay.value;
        submitDisplay.value = submitDisplayNumber + number;
    });
}

// Attach the click event handler to all buttons

handleButtonClick('button1');
handleButtonClick('button2');
handleButtonClick('button3');
handleButtonClick('button4');
handleButtonClick('button5');
handleButtonClick('button6');
handleButtonClick('button7');
handleButtonClick('button8');
handleButtonClick('button9');
handleButtonClick('button0');

// Pin matching by click submit button


var submit = document.getElementById('submit');

submit.addEventListener('click', function(){

    document.getElementById('match').style.display ='none';
    document.getElementById('not-match').style.display ='none';

    var generatePinDisplay = document.getElementById('generate-pin-display').value ;
    var generatePinDisplayValue = parseFloat(generatePinDisplay);

    var submitDisplay = document.getElementById('submit-display').value;

    var submitDisplayValue = parseFloat(submitDisplay);

    if (generatePinDisplayValue == submitDisplayValue){

        document.getElementById('match').style.display = "block";

        var left = document.getElementById('left').innerText = "3 try left" ;

    }
    if (generatePinDisplayValue != submitDisplayValue){

        document.getElementById('not-match').style.display = "block";

        var left = document.getElementById('left');

        var lefttry = left.innerText;

        if(lefttry== "3 try left"){

            left.innerText="2 try left";
        }

        else if(lefttry== "2 try left"){

            left.innerText="1 try left";
        }

        else if(lefttry== "1 try left"){

            left.innerText="Limit Reached ! Please Contact With Customer Service";
            document.getElementById('submit').style.display ='none';

        }
    }
})

// clear submit disply

var buttonC = document.getElementById('buttonC');

buttonC.addEventListener('click',function(){

    var submitDisplay = document.getElementById('submit-display');

    submitDisplay.value = "";



})


var decreaseNumber = document.getElementById('decrease-number');

decreaseNumber.addEventListener('click',function(){  
    var currentContentCheck = document.getElementById('submit-display');
    var currentContent = currentContentCheck.value ;

    if (currentContent.length > 0) { 
        var modifiedContent = currentContent.slice(0, -1);
        currentContentCheck.value = modifiedContent;
    }
})

















