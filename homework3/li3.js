// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу
// let dog = {breed : 'labrador', nickname : 'jack', color: 'black', weight : 30, role : 'hunting'};
// let person = {name : 'Maria', surname : 'Sharapova', age : 35, profession : 'tenis player', status : true};
// let car = {model : 'mersedes', origin: '2020', fuel : 'diesel', segment : 'famoly car', size : 'large'};
// let flat = {size : "65", rooms : 2, bathroom : 1, address : 'Sumskaya str.', floor : 5};
// let book  = {name : "Murder on the Orient Express", author : ' Agatha Christie', genre : 'crime', origin : '1934', pages : 250};

// -- Створити масив та вивести його в консоль:
//     - з 5 собак
// - 3 5 людей
// - з 5 автомобілів
let dogs = [ 'labrador', 'mastiff', 'hasky', 'chow chow', 'shiba inu'];
let group = [ 'Alex', 'Petya', 'Kolya', 'Sonya', 'Lena'];
let cars = [ 'bmw', 'honda', 'mersedes', 'renault', 'opel'];


// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка
let house = {
    floor: 5,
    address : { town: 'kharkov', street : 'pravdy', number : 5},
    status : 'municipal',
    tenants : ['Ivanov', 'Petrov', 'Sidorov'],
    flats : 20
}
let driver = {
    license : true,
    category : ['a', 'b', 'c'],
    experience : 15,
    car : {model : 'opel', period : 10},
    extrimedrive : false,
}
let toy = {
    types : ['doll','car','ball','constructor'],
    constructor : {
        brand : 'LEGO',
        seria : 'duplo',
        model : '54588'
    }
    interest : 'music',
    agerange : 3,
    price : '10$'
}
let table = {
    category : ['dinning', 'desk', 'nightstands'],
    product : {brand : 'ikea', model :'lerhamn', price : '70$'}
    material : 'wood',
    color : 'white',
    size : 'medium'
}
let bag = {
    brand : ['chanel', 'hermes','ysl','furla','dior'],
    model : {brand : 'hermes', name : 'Birkin', color: 'black'},
    material : 'leather',
    type : 'handbag',
    print : false
}

// Дан массив:
//     let users = [
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
// // - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// // - статус Андрія
// console.log (users[7].status);
// // - статус Максима
// console.log (users[4].status);
// // - ім'я передостаннього об'єкту
// console.log (users[9].name);
// // - ім'я третього об'єкта
// console.log(users[3].name);
// // - вік Олега
// console.log(users[6].age);
// // - вік Олі
// console.log(users[3].age);
// // - вік + ім'я 5го об'єкта
// console.log(users[5].name+ " "+ users[5].age);
// // - вік + сатус Анни
// console.log(users[5].age , users[5].status);
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

//
// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// let element = document.getElementById("content");
// console.log(element);
// // - отримує текст з блоку з id "rules"
// console.log(document.getElementById("rules"));
// // - замініть текст параграфа з id 'content' на будь-який інший
// let contents = document.getElementById('content');
// contents.innerText = 'Сложнее всего начать действовать, все остальное зависит только от упорства.';
// // - замініть текст параграфа з id 'rules' на будь-який інший
// let rule = document.getElementById('rules');
// rule.innerText = 'Логика может привести Вас от пункта А к пункту Б, а воображение — куда угодно.';
// - змініть кожному елементу колір фону на червоний
// let elementsArray = document.body.children;
// for (let elementsArrayElement of elementsArray) {
//     elementsArrayElement.style.background = 'red'
// }
// - змініть кожному елементу колір тексту на синій
// let elementsArray = document.body.children;
// for (let elementsArrayElement of elementsArray) {
//     elementsArrayElement.style.color = 'blue'
// }
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// let elem = document.querySelector("#rules");
// console.log(elem.classList);
// - отримати всі елементи з класом fc_rules
let elem = document.getElementsByClassName('fc_rules')
console.log(elem.classList)
// - поміняти колір тексту у всіх елементів fc_rules на червоний
let ruleElements = document.getElementsByClassName("fc_rules");
for (let ruleElement of ruleElements) {
    ruleElement.style.color = 'red';
}