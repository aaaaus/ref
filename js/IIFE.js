//IIFE (Immediately Invoked Function Expression)

//are immediately invoked when defined
//good way of protecting scope of your function and variables within it

// Normal function
function addTogether() {
 var x = 20;
 var y = 20;
 var answer = x + y;
 console.log(answer);
 }

addTogether();

// IIFE

(function() {
 var x = 20;
 var y = 20;
 var answer = x + y;
 console.log(answer);
 })();

//neat

//IIFE with arguments

const myAccount = { owner: "Austin", balance: 3000 };

//add 1000 to account:
(function(account) {
  account.balance += 1000;
})(myAccount);

myAccount;
//{ owner: "Austin", balance: 4000 }
