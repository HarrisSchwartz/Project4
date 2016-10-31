/**
 *   @author Schwartz, Harris (hfschwartz21@gmail.com)
 *   @version 0.0.1
 *   @summary QUIZ code || created: 10.24.2016
 *   @todo
 */ //lines 1-6 are a jsdoc multiline comment

"use strict"; //Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a "strict" operating context. This strict context prevents certain actions from being taken and throws more exceptions.
const PROMPT = require('readline-sync'); //allows the code to read user input and assign it to variables

let continueResponse; //Declares a global variable called continueResponse which is on its own line because it is boolean
let currentMonth, currentGrade, currentClassroom, upperTuition; //Declares the global variables currentMonth, currentGrade, currentClassroom, and upperTuition which are all numeric variables
const MAX_GRADE = 8,
    MAX_MONTH = 9,
    MAX_CLASSROOM = 3,
    KDG_TUITION = 80; //13-16 initialize four global constants and assign them values

function main() { //defines the main dispatch method and the order the methods will be called in
    process.stdout.write('\x1Bc'); //Clears the screen
    setContinueResponse(); //Calls the continueResponse method which sets the value of continueResponse
    while (continueResponse === 1) { //Creates a while loop that runs everything inside of it as long as the continueResponse = 1
        setCurrentMonth(); //Calls the currentMonth
        setCurrentGrade(); //Calls the currentGrade method which sets the value of that variable
        setCurrentClassroom(); //Calls the currentClassroom method which sets the value of that variable
        processPaymentCoupons(); //Calls the processPaymentCoupons method which calculates the cost based on an algorithm
        setContinueResponse(); //Calls the continueResponse method which sets the value of continueResponse again
        for (let i = 0; i < MAX_CLASSROOM; i++) { //Creates a for loop that will run the code a number of times until
            printGoodbye();//calls the print goodBye method which prints a goodbye message on the screen
        } //closes the for loop
    } //closes the while loop
}//closes the main method

main(); //Calls the main method

function setContinueResponse() { //begins the method to set the variable continueResponse
    if (continueResponse != null) { //tests if continueResponse is null and if it is runs what is inside of the statement
        continueResponse = -1; //sets continueResponse to -1
        while (continueResponse !== 0 && continueResponse !== 1) { //tests if continueResponse = 0 or 1 and as long as they do not it runs the code on the next line
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `)); //while the above line is true this will prompt the user to enter a value to say if they want to continue
        } //closes while loop
    } else { //if the if statement above is not true (so continue response does = null) it runs the code on line 42
        continueResponse = 1; //sets continue response to 1
    } // closes else statement
} //ends the setContinueResponse method

function setCurrentMonth() { //begins the method to set the variable currentMonth
    if (currentMonth != null && currentMonth <= MAX_MONTH) { //tests if continueResponse is null and if it is runs what is inside of the statement
        currentMonth++; //adds one to the current value of continueResponse
    } else { //if currentMonth does not equal null and its less than or equal to the constant MAX_MONTH then it runs what is inside the statement
        currentMonth = 1; //sets currentMonth to 1
    } //closes else statement
} //ends the setCurrentMonth method

function setCurrentGrade() { //begins the method to set the variable currentGrade
    if (typeof currentGrade !=='undefined' && currentGrade <= MAX_GRADE) { //if currentGrade is not undefined and it is less than the value of the constant MAX_GRADE, then the code inside the if statement is run
        currentGrade++; //adds one to the value of the variable currentGrade
    } else { //if currentGrade is undefined or it is more than the value of the constant MAX_GRADE then the code in the else statement runs
        currentGrade = 0; //sets the value of the variable currentGrade to 0
    } //closes else statement
} //ends the setCurrentMonth method

function setCurrentClassroom() { //begins the method to set the variable currentClassroom
    if (typeof currentClassroom !=='undefined' && currentClassroom <= MAX_CLASSROOM) { //if currentClassroom is not undefined and it is less than the value of the constant MAX_CLASSROOM, then the code inside the if statement is run
        currentClassroom++; //adds one to the value of the variable currentClassroom
    } else { //if currentClassroom is undefined or it is more than the value of the constant MAX_CLASSROOM then the code in the else statement runs
        currentClassroom = 1; //sets variable currentClassroom equal to 1
    }//closes else statement
}

function setUpperTuition() { //begins the method to set the variable upperTuition
    const BASE_TUITION = 60; //initializes a local constant BASE_TUITION with a value of 60
    upperTuition = BASE_TUITION * currentGrade; //sets the upper tuition by multiplying the BASE_TUITION constant by the currentGrade variable
} //ends the setCurrentMonth method

function processPaymentCoupons() { //begins the method to determine the value of the variable paymentCoupons
    while (currentGrade <= MAX_GRADE) { //while the value of the variable currentGrade is less than or equal to the value of the constant MAX_GRADE it runs the code inside of the loop
        while (currentClassroom <= MAX_CLASSROOM) {  //while the value of the variable currentClassroom is less than or equal to the value of the constant MAX_CLASSROOM it runs the code inside of the loop
            while (currentMonth <= MAX_MONTH) {  //while the value of the variable currentMonth is less than or equal to the value of the constant MAX_MONTH it runs the code inside of the loop
                if (currentGrade == 0) { //tests if current grade = 0 and if it is then runs what's inside of if statement
                    console.log(`\n\tThe tuition for month: ${currentMonth}, for classroom: ${currentClassroom}, of grade: ${currentGrade} is: \$${KDG_TUITION}.`); //this will display the tuition for the given month for the given classroom of the given grade
                } else { //if current grade is not equal to 0 it runs the code inside the else statement
                    setUpperTuition(); //calls setUpperTuition method
                    console.log(`\n\tThe tuition for month: ${currentMonth}, for classroom: ${currentClassroom}, of grade: ${currentGrade} is: \$${upperTuition}.`); //this will display the tuition for the given month for the given classroom of the given grade
                } //closes else statement
                setCurrentMonth(); //calls setCurrentMonth method
            } //closes third while loop
            setCurrentClassroom(); //calls setCurrentClassroom method
            setCurrentMonth(); //calls the setCurrentMonth method
        } //closes second while loop
        setCurrentGrade(); //calls the setCurrentGrade method
        setCurrentClassroom(); //calls the setCurrentClassroom method
    } //closes first while loop
} //ends the setCurrentMonth method

function printGoodbye() { //begins the method to print the goodbye message
    console.log(`\tGoodbye.`); //displays the word "goodbye" on the screen
} //ends the printGoodbye method

//http://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript
