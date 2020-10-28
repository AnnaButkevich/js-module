//Присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write//

let answer = 'hello';
let university = 'OWU';
let domain = 'com';
let language = 'ua';
let number = 1;
let count = 10;
let amount = -999;
let capacity = 123;
let p = 3.14;
let height = 2.7;
let age = 16;
let isUser = true;
let isAdmin = false;

alert (answer);
console.log (answer);
document.write (answer);

alert (university);
console.log (university);
document.write (university);

alert (domain);
console.log (domain);
document.write (domain);

alert (language);
console.log (language);
document.write (language);

alert (number);
console.log (number);
document.write (number);

alert (count);
console.log (count);
document.write (count);

alert (amount);
console.log (amount);
document.write (amount);

alert (capacity);
console.log (capacity);
document.write (capacity);

alert (p);
console.log (p);
document.write (p);

alert (height);
console.log (height);
document.write (height);

alert (age);
console.log (age);
document.write (age);

alert (isUser);
console.log (isUser);
document.write (isUser);

alert (isAdmin);
console.log (isAdmin);
document.write (isAdmin);

// переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write//


let answer = 'hello';
answer = 'how are you?'
console.log (answer);
alert (answer);
document.write (answer);

let university = 'OWU';
university = 'MIT';
console.log (university);
alert (university);
document.write (university);

let domain = 'com';
domain = 'me';
console.log (domain);
alert (domain);
document.write (domain);

let language = 'ua';
language = 'en';
console.log (language);
alert (language);
document.write (language);

let number = 1;
number = 3;
console.log (number);
alert (number);
document.write (number);

let count = 10;
count = 100;
console.log (count);
alert (count);
document.write (count);

let amount = -999;
amount = 15;
console.log (amount);
alert (amount);
document.write (amount);

let capacity = 123;
capacity = 220;
console.log (capacity);
alert (capacity);
document.write (capacity);

let p = 3.14;
p = 3.14159;
console.log (p);
alert (p);
document.write (p);

let height = 2.7;
height = 5.5;
console.log (height);
alert (height);
document.write (height);

let age = 16;
age = 35;
console.log (age);
alert (age);
document.write (age);

let isUser = true;
isUser = false;
console.log (isUser);
alert (isUser);
document.write (isUser);

let isAdmin = false;
isAdmin = true;
console.log (isAdmin);
alert (isAdmin);
document.write (isAdmin);

//Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write//

const pi = 3.14159;
console.log (pi);
alert (pi);
document.write (pi);

const white = "#ffffff";
console.log (white);
alert (white);
document.write (white);

const black = "#000000";
console.log (black);
alert (black);
document.write (black);

const greeting = 'Welcome!';
console.log (greeting);
alert (greeting);
document.write (greeting);

const password = 'universe';
console.log (password);
alert (password);
document.write (password);

const name = 'Alex';
console.log (name);
alert (name);
document.write (name);

//при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write//

 let mySurname = prompt('What is my surname?');
 console.log(mySurname);
 alert(mySurname);
 document.write(mySurname);

 let myName = prompt('What is my name?');
 console.log(myName);
 alert(myName);
 document.write(myName);

 let myPatronymic = prompt('What is my patronymic?')
 console.log(myPatronymic);
 alert(myPatronymic);
 document.write(myPatronymic);

// //Взять переменные из задания 4 и сконкатенировать их в одной переменной person.///

 let person = mySurname + " " + myName + " " + myPatronymic;
 console.log(person);

// //Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.//

 let husbandSurname = prompt('What is your surname?');
 console.log(husbandSurname);
 alert(husbandSurname);
 document.write(husbandSurname);

 let husbandName = prompt('What is your name?');
 console.log(husbandName);
 alert(husbandName);
 document.write(husbandName);

 let husbandPatronymic = prompt('What is your patronymic?')
 console.log(husbandPatronymic);
 alert(husbandPatronymic);
 document.write(husbandPatronymic);

 let husband = husbandSurname + " " + husbandName + " " + husbandPatronymic;
 console.log(husband);



 let sonSurname = prompt('What is your surname?');
 console.log(sonSurname);
 alert(sonSurname);
 document.write(sonSurname);

 let sonName = prompt('What is your name?');
 console.log(sonName);
 alert(sonName);
 document.write(sonName);

 let sonPatronymic = prompt('What is your patronymic?')
 console.log(sonPatronymic);
 alert(sonPatronymic);
 document.write(sonPatronymic);

 let son = sonName + " " + sonName + " " + sonPatronymic;
 console.log(son);

//при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.//

let age = +prompt('How old are you?');
let weight = +prompt( 'What is your weight?');
let height = +prompt('What is your height?');

console.log(age);
console.log(weight);
console.log(height);