///* - створити функцію яка виводить масив*/
//  let cars =['mazda', 'nissan', 'toyota', 'honda']
//  function printCars(car){
//      console.log(car);
//     for (let car of cars) {
//     console.log(car)
// }
//     return cars
// }
// printCars(cars);
///* - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.*/
// function createArray(size){
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.round(Math.random()*(10)))
//     }
//     return array;
// }
// let array1 = createArray(10)
// createArray(array1)
///* - створити функцію яка приймає три числа та виводить та повертає найменьше.*/
//
//  function returnMin(a,b,c){
// let min
//      if (a <= b && a <= c) min = a
//      if (b <= a && b <= c) min = b
//      if (c <= b && c <= a) min = c
//
//      console.log(min);
//      return(min)
//  }
//  let array1 = returnMin(45,7,65)
// console.log(array1)

///* - створити функцію яка приймає три числа та виводить та повертає найбільше.*/

// function returnMax(a,b,c){
//     let max
//
//     if (a => b && a >= c) max = a;
//     if (b => a && b >= c) max = b;
//     if (c => b && c >= a) max =c;
//     console.log(max);
//     return(max)
// }
// let array2 = returnMax(45,7,65)
// console.log(array2)
///* - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше*/
// function returnMinPrintMax() {
//     let min = arguments[0];
//     let max = arguments[0];
//     for(let item of arguments) {
//         if (item>max) max = item;
//         if (item < min) min = item;
//     }
//     console.log(max);
//     return min;
// }
// console.log(returnMinPrintMax(78,44,66))

///* - створити функцію яка виводить масив
// - створити функцію яка повертає найбільше число з масиву*/
// function returnMax(array) {
//     let max = array[0];
//     for(let item of array) {
//         if (item > max) max = item;
//     }
//         return max;
// }
// console.log(returnMax([78,44,66,645]));
// /* - створити функцію яка повертає найменьше число з масиву*/
// function returnMin(array) {
//     let min = array[0];
//     for(let item of array) {
//         if (item < min) min = item;
//     }
//     return min;
// }
// console.log(returnMin([254,44,66,645]));
///* - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.*/
// function sumReturn(array) {
//     let sum = 0;
//     for (let item of array) {
//         sum += item;
//     }
//     return sum;
// }
// console.log(sumReturn([2,6,4,7,8,12,9]));
// /* - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.*/
// function average(array) {
//     let sum = 0;
//     for (let item of array) {
//         sum += item;
//     }
//     return sum/array.length;
// }
// console.log(average([2,6,4,7,8,12,9]));
//  /*- Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві*/
// let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];
// function countObj(arrayObj){
//     let count = 0;
//     for (let item of arrayObj) {
//         if(typeof item === 'object'){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countObj(users));

// /*- Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них*/
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// function countObj(arrayObj){
//     let count = 0;
//     for (let item of arrayObj) {
//         if(typeof item === 'object'){
//             for (let keys in item) {
//                 count++;
//             }
//         }
//     }
//     return count;
// }
// console.log(countObj(users));
// /*- створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]*/
//
// function sumArr(array1, array2){
//     let result = [];
//     for (let i = 0; i < array1.length; i++) {
//         result.push(array1[i] + array2[i]);
//     }
//     return result;
// }
// console.log(sumArr( [1,2,3,4],[2,3,4,5]));
/* - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"*/

///* - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]*/

// function newFunck(array){
//     let zero =[];
//     let number = [];
//     for (let item of array) {
//         if (item === 0) {
//             zero.push(0)
//         } else {
//             number.push(item)}
//     }
//     return number.concat (zero);
// }
//
// console.log(newFunck([1,0,6,0,3]));
// console.log(newFunck([0,1,2,3,4]));
// console.log(newFunck([0,0,1,0]));


///* Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"*/
// function addDiv(){
//     let msg = document.createElement('div');
//     msg.textContent = 'Hello owu';
//     document.body.appendChild(msg);
// }
// addDiv ();

// /*- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи*/

// function addDiv(msg, typeTag){
//     let tag = document.createElement(typeTag);
//    tag.innerHTML = msg;
//     document.body.appendChild(tag);
// }
// addDiv ('Hello owu','div');

///* - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці*/
// let cars = [
//     {title : 'Mersedes', model : '25lk85-52', year : '2015', power : 1.6, color : 'black', driver : {name : 'Oleg', age : 45, sex : 'man', experience : 25 }},
//     {title : 'BMW', model : '25lk85-52', year : '2015', power : 2.6, color : 'black', driver : {name : 'Oleg', age : 45, sex : 'man', experience : 25 }},
//     {title : 'Volkswagen', model : 'Toureg', year : '2012', power : 2.5, color : 'red', driver : {name : 'Olga', age : 30, sex : 'woman', experience : 5 }},
// ];
// const addListCars = (arrayCars, idTag) => {
//     const block = document.getElementById(idTag);
//     const ul = document.createElement('ul');
//     for (let i = 0; i < arrayCars.length; i++) {
//         const car = arrayCars[i];
//         const li = document.createElement('li');
//         li.innerHTML = `${i} - ${car.title}`;
//         ul.appendChild(li);
//     }
//     block.appendChild(ul)
// }
// addListCars(cars, 'list');
// /*- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемeнту в який потрібно додати список цих автомобілів.*/
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// const addListCars = (arrayCars, idTag) => {
//     const block = document.getElementById(idTag);
//
//     for (let i = 0; i < arrayCars.length; i++) {
//         const car = arrayCars[i];
//         const div = document.createElement('div');
//         const title = document.createElement('h2');
//         const model = document.createElement('h3');
//         const year = document.createElement('h4');
//         const power = document.createElement('h4');
//         const color = document.createElement('h4');
//         const driver = document.createElement('div');
//
//         for (const key in car.driver) {
//             const h4 = document.createElement('h4');
//             h4.innerText = car.driver[key];
//             driver.appendChild(h4)
//         }
//
//         title.innerHTML = `title : ${car.title}`;
//         model.innerHTML = `model : ${car.model}`;
//         year.innerHTML = `year : ${car.year}`;
//         power.innerHTML = `power : ${car.power}`;
//         color.innerHTML = `color : ${car.color}`;
//
//         div.appendChild(title);
//         div.appendChild(model);
//         div.appendChild(year);
//         div.appendChild(power);
//         div.appendChild(color);
//         div.appendChild(driver);
//
//         block.appendChild(div)
//     }
//
// }
// addListCars(cars, 'list');

// /*(на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:*/
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'},];
//
// function split(userArray,cityArray){
//     let users = JSON.parse(JSON.stringify(userArray));
//     let cities = JSON.parse(JSON.stringify(cityArray));
//
//     for (let city of cities) {
//         for (let user of users) {
//             if(city.user_id === user.id){
//                 user.adress = city;
//             }
//         }
//     }
//     return users;
// }
//
// console.log(split(usersWithId,citiesWithId));


// /* ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html*/
//
// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
//
// 			];
// function printRules(title,body) {
// 	let wrap = document.createElement('div');
// 	wrap.id = 'wrap';
// 	for (let i = 0; i < rules.length; i++) {
// 		let rule = rules[i];
// 		let div = document.createElement('div')
// 		let h3 = document.createElement('h3')
// 		let p = document.createElement('p')
//
// 		div.className = `rules rule${i}`;
// 		h3.innerText = rule.title;
// 		p.innerText = rule.body;
//
// 		div.appendChild(h3);
// 		div.appendChild(p);
//
// 		wrap.appendChild(div);
// 	}
// 	document.body.appendChild(wrap);
// }
// printRules('Первое правило Бойцовского клуба.','Никому не рассказывать о Бойцовском клубе.')