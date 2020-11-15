///* - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.*/
// let numbers = [5,5512,45,2,884,45,75,47,9600,22,357,780,3,45,6,753,12,658,33,77];
// numbers.sort();
// console.log(numbers);
// /*-- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.*/
// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }
// numbers.sort(compareNumeric);
// console.log(numbers);
// -- при помощи filter получить числа кратные 3
//
// let filter = numbers.filter(function (number) {
//     if (number % 3 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// });
// console.log(filter);
// // -- при помощи filter получить числа кратные 10
// let filter1 = numbers.filter(function (number) {
//     if (number % 10 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// });
// console.log(filter1);
//
// // -- перебрать (проитерировать) массив при помощи foreach()
// numbers.forEach((value, index) => {
// console.log(value, index)})

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let map = numbers.map((value) => {
//     return value * 3;
// });
// console.log(map)

//
// /*- создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.
// -- отсортировать его по алфавиту  в нисходящем порядке.
// -- отфильтровать слова длиной менее 4х символов
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце*/

// let words = ['device', 'development', 'wife', 'advice', 'wood', 'agency', 'setting', 'tradition', 'engine', 'truth', 'country', 'pie', 'river', 'love', 'reception', 'problem', 'reality'];
// let sortW = words.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   }
//   return 1;
// });
// console.log(sortW);
//
// let sortB = words.sort((a, b) => {
//     if (a > b) {
//         return -1;
//     }
//     return 1;
// });
// console.log(sortB);
//
// let filter1 = words.filter(word => word.length < 4);
//
// console.log(filter1);
//
// let map = words.map((value) => {
//     return `${value} !`;
// });
// console.log(map)

//
// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :

//    let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
//
// /*- відсортувати його за  віком (зростання , а потім окремо спадання)
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором*/


// let age = users.sort((a, b) => {
//   return a.age - b.age
// });
// console.log(age);
//
// let age1 = users.sort((a, b) => {
//     return b.age - a.age
// });
// console.log(age1);
//
// let name =  users.sort((a, b) => {
//   if (a.name.length < b.name. length) {
//     return -1;
//   }
//   return 1;
// });
// console.log(name);
//
// let name1 =  users.sort((a, b) => {
//     if (a.name.length > b.name. length) {
//         return -1;
//     }
//     return 1;
// });
// console.log(name1);
//  let myArray = JSON.parse(JSON.stringify(users))
//
// let newUsers = myArray.map((user,index) => {
//   user.id = index;
//     return user;
// });
//  newUsers.sort((a,b) => a.id - b.id);
// console.log(newUsers)


// -- наисать функцию калькулятора с 2мя числами и колбеком
//
//
// function calculate(a,b,callback){
//     return callback(a,b);
// }
// let sum = calculate(1,3,(a,b) =>{
//     return a+b;
// })
// console.log(sum);


// -- наисать функцию калькулятора с 3мя числами и колбеком
//
// function calculate(a,b,c, callback){
//     return callback(a,b,c);
// }
// let result = calculate(1,3,4,function (a,b,c){
//     return a+b*c;
// })
// console.log(result);


