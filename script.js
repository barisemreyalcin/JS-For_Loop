let numbers = [6,8,14,10,20];

// 1. Print the square of each numbers of the array.
for(let number of numbers) {
    console.log(number*number);
}
// 2. Which elements are the multiple of 5?
for(let i=0; i<numbers.length; i++) {
    if (numbers[i] % 5 == 0) {
    console.log(numbers[i] + " is multiple of 5." )
    }
}
// 3. Print the sum of even numbers in the array.
let sumEven = 0;
for(let index in numbers) {
    if (numbers[index] % 2 == 0) {
        sumEven += numbers[index];
    }
}
console.log("Sum of the even numbers:", + sumEven);



let products = ["iphone x", "samsung s3", "iphone 12", "samsung s20"];

// 4. Convert all the products to uppercase.
for(let product of products) {
    console.log(product.toUpperCase());
}
// 5. Print how many elements contain "samsung" word.
let piece = 0;

for (let product of products) {
    if(product.includes("samsung")) {
        piece++;
    }
}
console.log(piece + " elements contain 'samsung' word.")


let students = [
    {"name": "Baris", "lastname": "Bey", "scores": [60,70,90]},
    {"name": "Emre", "lastname": "Bey", "scores": [70,70,70]},
    {"name": "Yalcin", "lastname": "Bey", "scores": [10,20,95]},
]

// 6. Calculate average scores of each students and specify success status.
for(let student of students){
    let totalScore = 0;
    let avg = 0;
    let no = 0;
    for(let score of student.scores) {
        totalScore += score;
        no ++;
    }
    avg = totalScore/no;
    
    console.log(`${student.name} ${student.lastname}'s average score is ${avg}.`)
    
    if(avg>=50) {
        console.log ("Success: Passed");
    }else{
        console.log("Success: Failed");
    }
    for(student of students){}
}