let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// console.log(numbers);

// ordem crescente
for (let index = 1; index < numbers.length; index +=1) {
    for (let secondindex = 0; secondindex < index; secondindex += 1){
        if (numbers[index] < numbers[secondindex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondindex];
            numbers[secondindex] = position;            
        }
    }
}
console.log(numbers);

//ordem decrescente
// for (let index = 1; index < numbers.length; index +=1) {
//     for (let secondindex = 0; secondindex < index; secondindex += 1){
//         if (numbers[index] > numbers[secondindex]) {
//             let position = numbers[index];
//             numbers[index] = numbers[secondindex];
//             numbers[secondindex] = position;
//         }
//     }
// }
// console.log(numbers);

let newNumbers = numbers;
for (index =0; index < numbers.length; index +=1){
    if (index +1 >= numbers.length){
        newNumbers[index] = numbers[index] *2;
    }else {
        newNumbers[index] = numbers[index] * numbers[index +1];
    }
}
console.log(newNumbers);


