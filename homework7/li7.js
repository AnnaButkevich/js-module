// 1.Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// const text = document.getElementById('btndiv');
// const btn = document.getElementById('target');
//     text.style.display = 'block';
//     btn.onclick = ev => {
//         text.style.display === 'block'
//         ? text.style.display = 'none' :text.style.display = 'block'
//     }

//  2.   - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// btn.onclick = ev => {
//     btn.style.display = 'none'
//     }
//
// 3.- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// const btn = document.getElementById('target');
// btn.onclick =ev => {
//     const input = document.getElementById('age');
//     let value = input.value
//     if (value < 18){
//         alert('Sorry, you have not permission')
//     } else alert('Welcome')
// }


// 4.- Создайте меню, которое раскрывается/сворачивается при клике
// const level1 = document.getElementById('level1')
// const level2 = document.getElementById('level2')
// let flag = false;
// level1.onclick = ev => {
//     if (flag){
//         level2.style.display ='block'
//         flag = false
//     }else {
//         level2.style.display ='none'
//         flag = true
//     }
// }

// 5.- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
//
// let comment = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
// ]
// const box = document.getElementById('box');
// comment.forEach(item => {
//     let div = document.createElement('div');
//     let h4 = document.createElement('h4');
//     let p = document.createElement('p');
//     let button = document.createElement('button')
//
//     button.innerText = 'Hide';
//     h4.innerText = item.title;
//     p.innerText = item.body;
//
//     button.onclick = () => {
//         p.hidden
//             ? p.hidden = false : p.hidden = true
//     }
//
//     div.appendChild(h4);
//     div.appendChild(p);
//     div.appendChild(button);
//     box.appendChild(div);
// })


//
// 6.- створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб      уникнути  перезавантаження сторінки)
// // Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// const btn = document.getElementById('btn')
// const input1 = document.getElementById('input1')
// const input2 = document.getElementById('input2')
// const input3 = document.getElementById('input3')
// const input4 = document.getElementById('input4')
//
// btn.onclick =ev => {
//     console.log(document.forms.form1.input1.value);
//     console.log(document.forms.form1.input2.value);
//     console.log(document.forms.form2.input3.value);
//     console.log(document.forms.form2.input4.value);
// }

// 7.- Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
// function createTable(rows, columns, selector) {
//     const selectedElement = document.querySelector(selector);
//     console.log(selectedElement);
//     const columnTemplate = '<td>Hello</td>';
//     const rowTemplate = '<tr>' + columnTemplate.repeat(columns) + '</tr>';
//     const tableTemplate = '<table>' + rowTemplate.repeat(rows);
//
//     selectedElement.innerHTML = tableTemplate;
// }
//
// createTable(3, 3, '.test-table');
//
// 8.- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// const btn = document.getElementById('btn2');
//
// btn.onclick = () => {
//     let rows = document.forms.myForm2.row.value;
//     let columns = document.forms.myForm2.cols.value;
//     let text = document.forms.myForm2.data.value;
//     createTable(rows, columns, text, 'generated-table')
// }
//
//
// function createTable(rows, columns, text, elementId) {
//     let columnTemplate = '<td>' + text+ '</td>'
//     let rowTemplate = '<tr>'+ columnTemplate.repeat(columns) +'</tr>';
//     const tableTemplate = '<table>' + rowTemplate.repeat(rows) + '</table>';
//     document.getElementById(elementId).innerHTML = tableTemplate;
// }


// 9.- Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// let row = document.getElementsByClassName('row')
// let left = document.getElementById('left')
// left.onclick = function () {
//     row.style.marginLeft = '-400px';
//     row.style.transition ='300ms'
// }

//
// 10.- Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let btn = document.getElementById("test")
// btn.onclick = () => {
//     let message = document.forms.form3.maty.value;
//     censor(message)
// }
// function censor(message) {
//     const maty = ['курва', 'писька'];
//     maty.forEach((mat) => {
//         if (message.includes(mat)) {
//             alert("Ругаться запрещено!");
//         }
//     })
// }

//11. - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let btn = document.getElementById("test")
// btn.onclick = () => {
//     let message = document.forms.form3.maty.value;
//
//     censor(message)
// }
// function censor(message) {
//     const maty = ['курва', 'писька', 'fuck'];
//     maty.forEach((mat) => {
//         if (message.includes(mat)) {
//             alert("Ругаться запрещено!");
//         }
//     })
// }