// /*-створити масив та вивести його в консоль:
//     - з 5 числових значень
//     - з 5 стічкових значень
//     - з 5 значень стрічкового, числового та булевого типу*/
//
let num = [1,2,3,4,5];
console.log(num);
let color = ['red', 'white', 'blue', 'green', 'orange'];
console.log(color);
let users = ['Anna','Ruben', 32,35, true];
console.log(users);

// /*- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль*/

let print=[];
print[0]= 1;
print[1]=12;
print[2]= 'hello';
print[3]=20;
print[4]=200;
print[5]=true;
print.push(44);
print.unshift(88);

console.log (print);

// /*- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині*/
//
// for (let i = 0; i <= 10; i++) {
//     document.write('<div>orange</div>')
// }
//
//
// /*За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині*/
//
// for (let i = 0; i <= 10; i++) {
//     document.write('<div>orange ' + i + '</div>')
// }
// //
// // За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i <= 20) {
//     document.write('<h1>Hello</h1>')
//     i++
// }
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let k = 0;
// while (k <= 20) {
//     document.write('<h1>Hello' + k + '</h1>');
//     k++
// }
//
// /* Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.*/
//
// let box = [15, 78, 77, 78, 5, 89, 23, 56, 12, 43];
// for (let i = 0; i < box.length; i++) {
//     console.log(box[i]);
// }
//
// /*Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.*/
//
// let group = ['white','black','red','orange','yellow','green','blue','violet','pink','gray'];
// for (let i = 0; i < group.length; i++) {
//     console.log(group[i]);
// }
//
// /*Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.*/
//
// let task =[12,'left','right', true, false, 9098, 'back', true, true, 22];
// for (let i = 0; i < task.length; i++) {
//     console.log(task[i]);
// }

/*Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи*/

// let empty = [12,'left','right', true, false, 9098, 'back', true, true, 22];
// for (let i = 0; i < empty.length; i++) {
//     if (typeof empty[i] === 'boolean'){
//         console.log(empty[i]);
//     }
// }
/*
- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи*/
let arr = [12,'left','right', true, false, 9098, 'back', true, true, 22];
for(let i=0; i<arr.length; i++){
    if (typeof arr[i] === 'number'){
        console.log(arr[i]);
    }
}
/*
- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи*/

for(let i=0; i<arr.length; i++){
      if (typeof arr[i] === "string"){
        console.log(arr[i]);
    }
}
/*
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.*/
// let dif =[];
//     dif[0]= 1
//     dif[1]='hello';
//     dif[2]=true;
//     dif[3]=20;
//     dif[4]='bye';
//     dif[5]=32;
//     dif[6]=false;
//     dif[7]=true;
//     dif[8]='hi';
//     dif[9]='1548525669';
// for (let i = 0; i < 10; i++) {
//     console.log(dif[i]);
// }
//
// // - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(let i=0; i<10; i++){
//     let step = i + 1;
//     console.log(step);
//     document.write(step);
// }
// // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(let i=0; i<100; i++) {
//     let step = i + 1;
//     console.log(step);
//     document.write(step);
// }
// // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//     for(let i=0; i<100; i=i+2) {
//         let step = i + 2;
//         console.log(step);
//         document.write(step);
//     }
// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for(let i=0; i<100; i++){
//     let step = i + 1;
//
//     if (step % 2 === 0) {
//         console.log(step);
//         document.write(step);
//     }
// }
// // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for(let i=0; i<100; i++){
//     let step = i + 1;
//
//     if (step % 2 !== 0) {
//         console.log(step);
//         document.write(step);
//     }
// }
//
