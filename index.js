// creating a calculater

// get the data from the input field 
const display =document.getElementById('display');


// create the functions to make operater work


// appendtodisplay to display the input
function appendToDisplay(input){
   display.value += input;
}

// function to clear the display
function clearDisplay(){
    display.value = '';

}

// function to calculate the value
function calculate(){
    // use try cathe method for catch any typr of error
    // try{
    //     display.value = eval(display.value);
    // }
    // catch{
    //     display.value = 'error';

    // }

    display.value=eval(display.value);
}



















