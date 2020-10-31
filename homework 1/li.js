//  //Присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write//

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

// // переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write//
//

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
//
// //Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write//
//
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
//
// //при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write//
//
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
//
// // //Взять переменные из задания 4 и сконкатенировать их в одной переменной person.///
//
//  let person = mySurname + " " + myName + " " + myPatronymic;
//  console.log(person);
//
// // //Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.//
//
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
//
// //при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.//

let age = +prompt('How old are you?');
let weight = +prompt( 'What is your weight?');
let height = +prompt('What is your height?');

console.log(age);
console.log(weight);
console.log(height);
//
//  /*при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера*/

let number1 = parseInt(prompt('number1'));
let number2 = parseInt(prompt('number2')) ;
let number3 = parseInt(prompt('number3'));
let number4 = parseInt(prompt('number4'));

let result = number1 + number2 + number3 + number4;
console.log(result)
//
// // при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
let a = parseFloat(prompt(123.123));
let b = parseFloat(prompt(456.456));
let c =parseFloat(prompt(789.789));

let result1 = a + b + c
console.log(result1)

// при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера
let num1 = Math.round(prompt('num1'));
let num2 = Math.round(prompt('num2'));
let num3 = Math.round(prompt('num3'));

let result2 = num1 + num2 + num3;
console.log(result2)

// - при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.

// let pow1 = parseInt(prompt('pow1'));
// let pow2 = parseInt(prompt('pow2'));
// let pow = Math.pow(pow1,pow2);
// console.log(pow);

// - При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;
// let a = 100;
// console.log(typeof(a));
// let b = '100'
// console.log(typeof(b));
// let c = true;
// console.log(typeof (c));
// let d = undefined;
// console.log(typeof(d));

// - Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//     В одинаковых выражениях в задании не использовать два одинаковых оператора.
//     Каждое выражение вложить в свою переменную
// 5 < 6 -> true
// 5 > 6 -> false
// 5 == 6 -> false
// 5 === 6 -> false
// 10 == 10 -> true
// 10 === 10 -> true
// 10 > 10 -> false
// 10 != 10 -> false
// 10 !== 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true
//
// Дополнительно:
//     - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
// console.log(132 > 100 && 45 < 12 ); false
// console.log(34 > 33 && 23 < 90 ); true
// console.log(99 > 100 && 45 > 12 ); false
// console.log(132 > 100 || 45 < 12 ); true
// console.log(111 > 11 || 45 < 111 ); true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); true
// console.log(!!'-1'); true
// console.log(!!-1); true
// console.log(!!'0'); false
// console.log(!!'null'); false
// console.log(!!'undefined'); false
// console.log(!!(3/'owu')); false
// console.log((111 > 11 || 45 < 111) ||  !!'0'); true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); false
//
//
// CLASS
//
// 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
// При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.
//
// let str = 'Привет';
// console.log(typeof (str));
// let num = 123;
// console.log(typeof (num));
// let flag = true;
// console.log(typeof (flag));
// let txt = 'true;'
// console.log(typeof (txt));

// 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.
// let a1 = 5 + 3;
// let a2 = 5 - 3;
// let a3 = 5 * 3;
// let a4 = 5 / 3;
// let a5 = 5 % 3;
// console.log(a1,a2,a3,a4,a5);
//
//
// // 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//   let a6 = 5 % 3;
//   let a7 = 3 % 5;
//   let a8 = 5 + '3';
//   let a9 = '5' - 3;
//   let a10 = 75 + 'кг';
// console.log(a6,a7,a8,a9,a10);
// 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
// шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.
// let height = 23;
// let width =10;
// let s = height * width;
// console.log(s);
//
// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.

// let heightC = 10;
// let dC = 4;
// const PI = 3.1415;
// let v = heightC * (dC/2) *PI;
// console.log(v);
//
// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
// let n = 3;
// let m = 4;
// let k = Math.sqrt((Math.pow(3,2))+ (Math.pow(4,2)));
// console.log(k);
// //
// // 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
// let str ='Hello world';
// document.write(str);
// alert(str);
// console.log(str);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
// let name = 'Anna';
// let surname = 'Butkevich';
// let age = 32;
// let hobby = 'drawing';
// alert(name + '\n' + surname + '\n' + age + '\n' + hobby +'\n' );

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write
/*
let str1 ='Кто';
let str2 ='ты';
let str3 ='такой?';
let concatenation = str1 + ' ' + str2 + ' ' + str3;
document.write(concatenation);*/


 // 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//      let str = "20";
//  let a = 5;
//  document.write(str + a + "<br/>");
//  document.write(str - a + "<br/>");
//  document.write(str * "2" + "<br/>");
//  document.write(str / 2 + "<br/>");
//
//
//  /*11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?*/
//     let a = parseInt("3.14");
//     let b = parseInt("-7.875");
//     let c = parseInt("435");
//     let d = parseInt("Вася");
// console.log(a,b,c,d);

 // 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
 // let str = prompt("Enter something", "ho-ho")
 // console.log(str);
 //
 // 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
 // 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
 // Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
// let name = prompt('name');
// let surname = prompt('surname');
// let age = +prompt('age');
// alert('Доброго вечера Иван Иванов, мои поздравления что вам 32');


//
//
//  =====================
//  ======ДОП============
//  =====================
//
//
//
//
//  1. Три різних числа вводяться через prompt().
//      За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
let a = prompt('number1');
let b = prompt('number2');
let c = prompt('number3');

if (a > b && a > c){
  if (b > c) {
   console.log(c,b,a);
  } else {
   console.log(b,c,a);
  }
} else if (b > a && b > c) {
  if (a > c) {
   console.log(c,a,b);
  } else {
   console.log(a,c,b);
  }
} else if (c > a && c > b) {
  if (a > b){
   console.log(b,a,c);
  } else {
    console.log(a,b,c);
  }
}

//
//  2.
//  Все параматры получаем с клавиатуры!!!!
//      Имитируем поведение пешехода на перекстке.
//      Если светофор зеленый - вывести "иди".
//      Если светофор желтый - вывести "подожди".
//      Если светофор красный - вывести "стой".
//      Если светофор в аварийном режиме вывести "делай что хочешь"!
let color = prompt('color');

if (color == 'green') {
 console.log('go');
} else if (color == 'yellow') {
 console.log('wait');
} else if (color == 'red') {
 console.log('stop');
} else if ('emergency') {
 console.log('do what you want');
}

//
//      3
//  Все параметры получаем с клавиатуры!!!!(prompt , confirm)
//  Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//      Улучшаем предыдущее задание.
//      Если светофор зеленый и машин нет - вывести "иди".
//      Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
//  Если светофор желтый и машины есть - вывести "жди".
//      Если светофор желтый и машин нет - вывести "все рано жди".
//      Если светофор красный и машин нет- вывести "стой все рано".
//      Если светофор красный - и машины есть вывести "стой и жди".
//      Если светофор в аварийном режиме вывести "делай что хочешь"!
//
//
let color = prompt('color');
let isRoadClear = confirm('status');
if (color == 'green' && isRoadClear) {
 console.log('go');
} else if (color == 'green' && !isRoadClear) {
 console.log('подожди пока нарушители проедут');
} else if (color == 'yellow' && isRoadClear) {
  console.log('wait');
 } else if (color == 'yellow' && !isRoadClear) {
 console.log('все рано жди');
} else if (color == 'red' && isRoadClear) {
 console.log('стой все рано');
} else if (color == 'red' && !isRoadClear) {
 console.log('стой и жди');
} else if (color == 'emergency') {
 console.log('do what you want');
}
