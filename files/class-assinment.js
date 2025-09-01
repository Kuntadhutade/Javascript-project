// 1. Use JavaScript to display pop up boxes (alert box, an alert box with line breaks, confirm box, prompt box)

function showAlert() {
    alert("Hello! Kunta.");
}

function showAlertLineBreak() {
    alert("Hello!\good morning kunta.\nNice to meet you!");
}

function showConfirm() {
    let result = confirm("Do you want to continue?");
    if(result){
        alert("OK");
    } else {
        alert("Cancel");
    }
}

function showPrompt() {
    let name = prompt("Enter your name:");
    alert("Welcome, " + name + "!");
}



// 2. Use JavaScript to call a function with an argument that returns a value.

function square(number){
    return number * number;
}

let result = square(5);

// document.write("squre of 5 is : " + result);
console.log(result);
// alert("result is ,"+ result)








// 3. Create a web page to demonstrate Java Script Exception handling. 

try {
    let a = prompt("Enter a number:");
    if(isNaN(a)) {
        throw "Not a Number";
    }
    alert("You entered: " + a);
}
catch(err) {
    alert("Error: " + err);
}
finally {
    alert("Finally block executed!");
}





// 4. Write a JavaScript to accept your name and display it.

let a = prompt("enter your name");
console.log(a);

// document.write("Welcome, " + a + "!");
        


// 5. Write a JavaScript code to accept 10 numbers and check how many are +ive,  -ive, and zero.

let positiveNo = 0;
let negativeNo = 0;
let zero = 0;

for(let i = 1; i <= 10; i++){
    let number = parseInt(prompt("Enter number " + i));

    if(number > 0){
        positiveNo++;
    }
    else if(number < 0){
        negativeNo++;
    }
    else{
        zero++;
    }
}
console.log("Positive N0: " + positiveNo);
console.log("Negative No: " + negativeNo);
console.log("Zeros: " + zero);

 document.write("Positive Numbers: " + positiveNo + "<br>");
document.write("Negative Numbers: " + negativeNo + "<br>");
document.write("Zeros: " + zero);




// 6. Write a Program in JavaScript to find the factorial of a number between 1 to 10


let num = parseInt(prompt("Enter a number between 1 to 10"));

let factorial =1;

if(num>=1 && num <=10){
    for(let i = 1; i<=num;i++){
        factorial *= i;
    }
    console.log(`factorial of ${num} is: ${factorial}`);
} else{
    console.log("not a number");
}


// 7. Write a Program in  JavaScript to find the reverse of a digit.


        var number = parseInt(prompt("Enter a number:"));
        var reverse = 0;

        while(num != 0){
            let digit = num % 10;
            reverse = reverse * 10 + digit;
            num = parseInt(num / 10);
        }

        document.write("Reverse Number is: " + reverse);
        // console.log("reverse no is: "+reverse);
    




        