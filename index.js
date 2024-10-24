//Part Uno
/* For loop  Psuedo Code
1 - 100
num%3 == 0 && num%5 == 0
Fizz Buzz
num%3 == 0
fizz
num%5 == 0
buzz
else */
for (let num = 1; num <= 100; num++) {
    if (num % 3 == 0 && num % 5 == 0) {
        console.log("Fizz Buzz");
    } else if (num % 3 == 0) {
        console.log("Fizz");
    } else if (num % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
}
