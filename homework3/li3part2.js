// // -1 создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
//
// let movie = {
//     title : 'Serenity',
//     actors : ['Matthew McConaughey', 'Anne Hathaway', 'Jason Clarke', 'Diane Lane', 'Djimon Hounsou', 'Jeremy Strong'],
//     type : 'drama',
// }
// let cat = {
//     nickname : 'Barsik',
//     color : 'black-white',
//     age : 3,
// }
// let cake = {
//     titelCake : 'Napoleon',
//     cream : true,
//     type : 'milfey'
// }
// let player = {
//     name : 'Novak',
//     surname : 'Djokovich',
//     range : '1st player',
// }
// let city ={
//     cityName : 'Bar',
//     population : '17650',
//     country : 'Montenegro',
// }
//
// // -2 создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let film = {
//     title : 'Serenity',
//     actors : ['Matthew McConaughey', 'Anne Hathaway', 'Jason Clarke', 'Diane Lane', 'Djimon Hounsou', 'Jeremy Strong'],
//     type : 'drama',
//     director : {name : 'Steven Knight' , filmography : ['Locke', 'Allied', 'Woman Walks Ahead']},
// }
// let cake1 = {
//     name : 'Napoleon',
//     ingredients : ['butter', 'flour', 'sugar', 'egg'],
//     cream : { type : 'pastry cream', ingredients : ['milk','sugar', 'egg', 'cornstarch', 'butter']},
//     time : '2 hour',
// }
// let book = {
//     title: 'Harry Potter',
//     author: {name: 'J. K. Rowling', notableWorks: ['Harry Potter series', 'Cormoran Strike series']},
//     genre: ['fantasy', 'drama', 'young adult fiction', 'mystery', 'thriller', ' Bildungsroman'],
//     series: ['Philosophers Stone', 'Chamber of Secrets', 'Prisoner of Azkaban', 'Goblet of Fire', 'Order of the Phoenix', 'Half-Blood Prince', 'Deathly Hallows'],
// }
// let table = {
//     category : ['dinning', 'desk', 'nightstands'],
//     product : {brand : 'ikea', model :'lerhamn', price : '70$'},
//     material : 'wood',
//     color : 'white',
//     size : 'medium',
// }
// let bag = {
//     brand : ['chanel', 'hermes','ysl','furla','dior'],
//     model : {brand : 'hermes', name : 'Birkin', color: 'black'},
//     material : 'leather',
//     type : 'handbag',
//     print : false,
// }

// -3 При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for (key in movie){
//     console.log(key);
// }
// for (key in cat){
//     console.log(key);
// }
// for (key in cake){
//     console.log(key);
// }
// for (key in player){
//     console.log(key);
// }
// for (key in city){
//     console.log(key);
// }
// for (key in film){
//     console.log(key);
// }
// for (key in cake1){
//     console.log(key);
// }
// for (key in book){
//     console.log(key);
// }
// for (key in table){
//     console.log(key);
// }
// for (key in bag){
//     console.log(key);
// }
// - 4 При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// console.log(Object.keys(movie));
// console.log(Object.keys(cat));
// console.log(Object.keys(cake));
// console.log(Object.keys(player));
// console.log(Object.keys(city));
// console.log(Object.keys(film));
// console.log(Object.keys(cake1));
// console.log(Object.keys(book));
// console.log(Object.keys(table));
// console.log(Object.keys(bag));

// -5 Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// let cities = [
//     {name : 'Kharkiv', population: '1 419 000', country : 'Ukraine', region : 'east Europe'},
//     {name : 'Barselona', population: '1 636 762', country : 'Spain', region : 'west Europe'},
//     {name : 'Melbourne', population: '4 936 00 ', country : 'Australia', region : 'Australia'},
//     {name : 'Tokyo', population: '14 002 973[', country : 'Japan', region : 'Asia'},
//     {name : 'Mexico city', population: '8 918 653', country : 'Mexico', region : 'north America'},
// ]
// // -6 Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let cars = [
//     {title : 'Mersedes', model : '25lk85-52', year : '2015', power : 1.6, color : 'black', driver : {name : 'Oleg', age : 45, sex : 'man', experience : 25 }},
//     {title : 'BMW', model : '25lk85-52', year : '2015', power : 2.6, color : 'black', driver : {name : 'Oleg', age : 45, sex : 'man', experience : 25 }},
//     {title : 'volkswagen', model : 'Toureg', year : '2012', power : 2.5, color : 'red', driver : {name : 'Olga', age : 30, sex : 'woman', experience : 5 }},
// ]

// -7 проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i = 0;
// while (i<cities.length){
//     console.log(cities[i])
//     i++
// }
// let k=0
// while (k<cars.length){
//     let car = cars[k];
//     console.log(car);
//     k++
// }
// -8 проитерировать каждый массив из задания 5,6,7 при помощи for .
// for (let j = 0; j < cities.length; j++) {
//     console.log(cities[j]);
// }
// for (let k = 0; k < cars.length; k++){
//     let car = cars[k];
//     console.log(car);
// }

// -9 проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for (let city of cities) {
//     console.log(city);
// }
// for (let car of cars) {
//     console.log(car);
// }
// -10 взять объекты из задания 1 и превратить каждый в json.
// -11 взять json из задания 11 и превратить их обратно в объекты.
// let myJSON = JSON.stringify(movie);
// console.log('myJSON');
// console.log(myJSON);
// let m = JSON.parse(myJSON);
// console.log(m);
//
// let myJSONq = JSON.stringify(cat);
// console.log('myJSONq');
// console.log(myJSONq);
// let q = JSON.parse(myJSONq);
// console.log(q);
//
// let myJSONw = JSON.stringify(cake);
// console.log('myJSONw');
// console.log(myJSONw);
// let w = JSON.parse(myJSONw);
// console.log(w);
//
// let myJSONe = JSON.stringify(player);
// console.log('myJSONe');
// console.log(myJSONe);
// let e = JSON.parse(myJSONe);
// console.log(e);
//
// let myJSONr = JSON.stringify(city);
// console.log('myJSONr');
// console.log(myJSONr);
// let r = JSON.parse(myJSONr);
// console.log(r);

// -12 взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// for (let i = 0; i < cities.length; i++) {
//     const city = cities[i];
//     console.log(JSON.stringify(city));
// }
// -13 взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// -14 взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let newArray = []
// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i];
//     newArray.push(JSON.stringify(car));
// }
// console.log(newArray)
// -15 Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
//  let users =[
//      {name : 'Olga', age :33, skills : ['java', 'piton'], status : true},
//      {name : 'Viktor', age :23, skills : ['js', 'angular', 'react'], status : false},
//      {name : 'Lena', age :20, skills : ['english', 'serbian'], status : false},
//      {name : 'Kolya', age :35, skills : ['guitar', 'piano'], status : true},
//      {name : 'Alex', age :30, skills : ['java', 'piton', 'english'], status : true},
//  ]
// for (let user of users) {
//     console.log(user);
//     for (let skill of user.skills) {
//         console.log(skill);
//     }
// }
// -16 Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// let newArray =[]
// for (let user of users) {
//     console.log(user);
//     for (let skill of user.skills) {
//         newArray.push(skill);
//     }
// }
// console.log(newArray);
// -17 За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
// for (const user of users) {
//     console.log(user);
//     for (let name1 of user.name) {
//         console.log(name1);
//     }
// }
// -18 З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
//

// let addressMain =[];
// for (const user of users) {
//             addressMain.push(user.address);
//     }
// console.log(addressMain)

// -19 За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     const div = document.createElement('div');
//     let address = '';
//     for (let address1 in user.address) {
//     address = address + ' ' + user.address[address1];
//     }
//     div.innerText = `${user.name} ${user.age} ${user.status} ${address}`;
//     document.body.appendChild(div)
// }

// -20 За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     const div = document.createElement('div');
//     const h2 =document.createElement('h2')
//     const p1 =document.createElement('p')
//     const p2 =document.createElement('p')
//     const p3 =document.createElement('p')
//     let address = '';
//     for (const address1 in user.address) {
//         address = address + ' ' + user.address[address1];
//     }
//
//     h2.innerText = user.name;
//     p1.innerText = user.age;
//     p2.innerText = user.status;
//     p3.innerText = address;
//
//     div.appendChild(h2);
//     div.appendChild(p1);
//     div.appendChild(p2);
//     div.appendChild(p3);
//     document.body.appendChild(div);
// }
// -21 За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     const div = document.createElement('div');
//     const name =document.createElement('h2')
//     const age =document.createElement('p')
//     const status =document.createElement('p')
//     const address =document.createElement('div')
//
//     for (const addr in user.address) {
//         const temp = document.createElement('div')
//         temp.innerHTML = user.address[addr];
//         address.appendChild(temp)
//     }
//
//     name.innerText = user.name;
//     age.innerText = user.age;
//     status.innerText = user.status;
//
//
//     div.appendChild(name);
//     div.appendChild(age);
//     div.appendChild(status);
//     div.appendChild(address);
//     document.body.appendChild(div);
// }

// -22 Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [
// {user_id: 3, country: 'USA', city: 'Portland'},
// {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
// {user_id: 2, country: 'Poland', city: 'Krakow'},
// {user_id: 4, country: 'USA', city: 'Miami'},];
// // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// //     Записати цей об'єкт в новий масив
// // Частковий приклад реультату:
// //     let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
// for (const user of usersWithId) {
//     for (const city of citiesWithId) {
//         if(user.id === city.user_id){
//             user.address = city;
//         }
//     }
// }
// console.log(usersWithId)

// -23 створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// -24 змінити цей текст використовуючи селектори id, class,  tag
// let elementById = document.getElementById('content');
// let innerText = elementById.innerText;
// elementById.innerText = 'fight club';
// console.log(innerText);
//
// let elementByClass = document.getElementsByClassName('rules');
// for (let element of elementByClass) {
//     element.innerText = 'rules'
//     console.log(element)
// }

// let elementByTag = document.getElementsByTagName('p');
// for (let element of elementByTag) {
//     element.innerText = 'something'
//     console.log(element)
// }
///*-25 змінити висоту та ширину блоку використовуючи селектори id, class,  tag*/
// let elementById = document.getElementById('content');
// elementById.style.width = '300px';
// elementById.style.height = '100px';
// console.log(elementById);
//
//
// let elementByClass = document.getElementsByClassName('rules');
// for (let element1 of elementByClass) {
//     element1.style.width = '500px'
//     element1.style.height = '150px'
//     console.log(element1)
// }
// let elementByTag = document.getElementsByTagName('h2');
// for (let element2 of elementByTag) {
//     element2.style.width = '800px'
//     element2.style.height = '50px'
//     console.log(element2);
// }
///* -26 за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені*/
// let table = document.createElement('table');
// let td = document.createElement("td");
// let td1 = document.createElement("td");
// let td2 = document.createElement("td");
// let tr = document.createElement("tr");
// tr.appendChild(td);
// tr.appendChild(td1);
// tr.appendChild(td2);
// table.appendChild(tr);
//
// document.body.appendChild(table)
// /*-27 за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені*/
// let table = document.createElement('table');
//
// for (let i = 0; i < 10; i++) {
//     let tr = document.createElement("tr");
//         for (let i = 0; i < 3; i++) {
//             let td = document.createElement("td");
//             tr.appendChild(td)
//         }
//
//     table.appendChild(tr);
// }
// document.body.appendChild(table);

// /*-28 за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені*/
// let table = document.createElement('table');
//
// for (let i = 0; i < 10; i++) {
//     let tr = document.createElement("tr");
//         for (let i = 0; i < 5; i++) {
//             let td = document.createElement("td");
//             tr.appendChild(td)
//         }
//
//     table.appendChild(tr);
// }
// document.body.appendChild(table);
// /* -29 за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt*/
// let table = document.createElement('table');
// let n = +prompt('How tr?');
// let m = +prompt('How td?');
// for (let i = 0; i < n; i++) {
//     let tr = document.createElement("tr");
//         for (let i = 0; i < m; i++) {
//             let td = document.createElement("td");
//             tr.appendChild(td)
//         }
//     table.appendChild(tr);
// }
// document.body.appendChild(table);
// /*--30 Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
// -31 знайти всі елементі, які мають class
// document.getElementsByClassName()
// -32 знайти всі параграфи ,та змінити текст на hello oktenweb!*/
// let elementByTag = document.getElementsByTagName('p')
// for (let element of elementByTag) {
//     element.innerText = 'hello oktenweb!';
// }
// //     -33 знайти всі div та змінити ім колір на червоний*/
// let divka = document.getElementsByTagName('div');
// for (let element of divka) {
//     element.style.background = 'red';
// }
/*- є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
    створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
    Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.*/
// let list = document.getElementsByTagName('h2');
// let content = document.getElementById('content');
// let ul = document.createElement('ul');
//     for (let h2 of list) {
//     let li = document.createElement('li');
//     li.innerText = h2.innerText;
//     ul.appendChild(li);
// }
// content.appendChild(ul);


/*-Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
    Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html*/

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];
let wrap = document.createElement('div');
wrap.id = 'wrap';
for (let i = 0; i < rules.length; i++) {
    let rule = rules[i];
    let div = document.createElement('div')
    let h3 = document.createElement('h3')
    let p = document.createElement('p')

div.className = `rules rule${i}`;
h3.innerText = rule.title;
p.innerText = rule.body;

div.appendChild(h3);
div.appendChild(p);

wrap.appendChild(div);
}
document.body.appendChild(wrap);