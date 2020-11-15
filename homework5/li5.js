// ==============================================
//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},]
// }
// // ==============================================


// function Tag(titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag || 'No Title';
//     this.action = action || 'No action';
//     this.attrs = attrs || [];
// }

// let title = '<a>';
// let action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.';
// let attributes = [
//     {titleOfAttr: 'accesskey',actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//     {titleOfAttr: 'coords',actionOfAttr: 'Устанавливает координаты активной области.' },
//     ];
//
// let a = new Tag (title, action, attributes)
// console.log(a);
//
// let title = '<div>';
// let action = 'Является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого';
// let attributes = [
//     {titleOfAttr: 'align',actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
//     {titleOfAttr: 'title',actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.' },
// ];
//
// let div = new Tag (title, action, attributes)
// console.log(div);
//
// let title = '<h1>';
// let action = 'представляет собой наиболее важный заголовок первого уровня';
// let attributes = [
//     {titleOfAttr: 'align',actionOfAttr: 'Определяет выравнивание заголовка.'},
//  ];
//
// let h1 = new Tag (title, action, attributes)
// console.log(h1);
//
// let title = '<span>';
// let action = 'Тег <span> предназначен для определения строчных элементов документа.';
// let attributes = [
//     {titleOfAttr: 'class',actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
//     {titleOfAttr: 'dir',actionOfAttr: 'Задает направление и отображение текста — слева направо или справа налево.' },
// ];
//
// let span = new Tag (title, action, attributes)
// console.log(span);
//
// let title = '<input>';
// let action = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. ';
// let attributes = [
//     {titleOfAttr: 'accept',actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
//     {titleOfAttr: 'alt',actionOfAttr: 'Альтернативный текст для кнопки с изображением.' },
// ];
//
// let input = new Tag (title, action, attributes)
// console.log(input);
//
//
// let title = '<option>';
// let action = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. ';
// let attributes = [
//     {titleOfAttr: 'disabled',actionOfAttr: 'Заблокировать для доступа элемент списка.'},
//     {titleOfAttr: 'label',actionOfAttr: 'Указание метки пункта списка.' },
// ];
//
// let option = new Tag (title, action, attributes)
// console.log(option);
//
// let title = '<select>';
// let action = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.';
// let attributes = [
//     {titleOfAttr: 'accesskey',actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
//     {titleOfAttr: 'autofocus',actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.' },
// ];
//
// let select = new Tag (title, action, attributes)
// console.log(select);
// _____________________________________________
// -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }
// ================================================
// class Tag {
//     constructor(titleOfTag, action, attrs) {
//         this.titleOfTag = titleOfTag || 'No Title';
//         this.action = action || 'No action';
//         this.attrs = attrs || [];
//     }
// }
// let title = '<a>';
// let action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.';
// let attributes = [
//     {titleOfAttr: 'accesskey',actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//     {titleOfAttr: 'coords',actionOfAttr: 'Устанавливает координаты активной области.' },
//     ];
//
// let a = new Tag (title, action, attributes)
// console.log(a);

// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
// let car = {
//         model: 'Toureg',
//         producedOf: 'Volkswagen',
//         year: '2018',
//         maxSpeed: 200,
//         volume: 3.5,
//
//         drive: function() {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//         };
//         info: function() {
//         if(this.driver){
//             console.log(`${this.model}, ${this.producedOf}, ${this.year}, ${this.maxSpeed}, ${this.volume}, ${this.driver.name}`)
//         } else
//             console.log(`${this.model}, ${this.producedOf}, ${this.year}, ${this.maxSpeed}, ${this.volume}`)}
//         increaseMaxSpeed: function(newSpeed) {
//         this.maxSpeed += newSpeed;
//             console.log(this.maxSpeed);
//         },
//         changeYear: function(newValue) {
//             this.year = newValue;
//             console.log(this.year);
//         },
//         addDriver: function (driver){
//             this.driving = driver;
//             console.log(this.driving);
//         }
//     };
// let driver = {name: 'Semen', year: 50};
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(50);
// car.changeYear(2020);
// car.addDriver(driver)

// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// function Car(model, producedOf, year, maxSpeed, volume){
//     this.model = model || 'Toureg';
//     this.producedOf = producedOf || 'Volkswagen';
//     this.year = year || '2018';
//     this.maxSpeed = maxSpeed || 200;
//     this.volume = volume || 3.5;
//
//     this.drive = function() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     this.info = function() {
//         if(this.driver){
//             console.log(`${this.model}, ${this.producedOf}, ${this.year}, ${this.maxSpeed}, ${this.volume}, ${this.driver.name}`);
//         } else
//             console.log(`${this.model}, ${this.producedOf}, ${this.year}, ${this.maxSpeed}, ${this.volume}`);
//     }
//     this.increaseMaxSpeed = function(newSpeed) {
//         this.maxSpeed += newSpeed;
//         console.log(this.maxSpeed);
//     }
//     this.changeYear = function(newValue) {
//         this.year = newValue;
//         console.log(this.year);
//     }
//     this.addDriver = function (driver){
//         this.driving = driver;
//         console.log(this.driving);
//     }
// }
// let driver = {name: 'Semen', year: 50};
// let car = new Car('x5', 'bmw', 2018, 240, 3.5 );
// car.drive();
// car.info();
// car.increaseMaxSpeed(50);
// car.changeYear(2020);
// car.addDriver(driver)
//
// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//
// class Car {constructor (model, producedOf, year, maxSpeed, volume) {
//     this.model = model || 'Toureg';
//     this.producedOf = producedOf || 'Volkswagen';
//     this.year = year || '2018';
//     this.maxSpeed = maxSpeed || 200;
//     this.volume = volume || 3.5;
// }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     info() {
//         if(this.driver){
//             console.log(`${this.model}, ${this.producedOf}, ${this.year}, ${this.maxSpeed}, ${this.volume}, ${this.driver.name}`);
//         } else
//             console.log(`${this.model}, ${this.producedOf}, ${this.year}, ${this.maxSpeed}, ${this.volume}`);
//     }
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//         console.log(this.maxSpeed);
//     }
//     changeYear(newValue) {
//         this.year = newValue;
//         console.log(this.year);
//     }
//     addDriver(driver) {
//         this.driving = driver;
//         console.log(this.driving);
//     }
// }
// let driver = {name: 'Semen', year: 50};
// let car = new Car('x5', 'bmw', 2018, 240, 3.5 );
// car.drive();
// car.info();
// car.increaseMaxSpeed(50);
// car.changeYear(2020);
// car.addDriver(driver);
//
// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================


//
// class Cinderella {
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }
//
// class Prince {
//     constructor(name, age, bootsize) {
//         this.name = name;
//         this.age = age;
//         this.bootsize = bootsize;
//     }
//
//     findPrincess(arrayCinderellas) {
//         for (const girl of arrayCinderellas) {
//             if (girl.size === this.bootsize) {
//                 console.log(`${girl.name}  is cinderella`);
//                 break;
//             }
//         }
//     }
//
// }
// let Lena = new Cinderella('Lena', 22,36);
// let Olya = new Cinderella ('Olya', 25, 37);
// let Sveta = new Cinderella ('Sveta', 28, 39);
// let Mariya = new Cinderella ('Mariya', 22, 34);
// let Ira = new Cinderella ('Ira', 23, 35);
// let Tanya = new Cinderella ('Tanya', 20, 36);
// let Alina = new Cinderella ('Alina', 19, 38);
// let Mila = new Cinderella ('Mila', 30, 38);
// let Vera = new Cinderella ('Vera', 21, 35);
// let Nina = new Cinderella ('Nina', 18, 37);
//
// let arrayCinderellas = [Lena, Olya,Sveta, Mariya, Mila, Ira, Tanya, Alina, Vera, Nina]
//
// let prince = new Prince ('garry', 30,35)
// prince.findPrincess(arrayCinderellas);
// //
//
// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
// function Cinderella (name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
//
// function Prince(name, age, bootsize) {
//     this.name = name;
//     this.age = age;
//     this.bootsize = bootsize;
//     this.findPrincess = function (arrayCinderellas) {
//         for (const girl of arrayCinderellas) {
//             if (girl.size === this.bootsize) {
//                 console.log(`${girl.name}  is cinderella`);
//                 break
//             }
//         }
//     }
// }
//
// let Lena = new Cinderella('Lena', 22,36);
// let Olya = new Cinderella ('Olya', 25, 37);
// let Sveta = new Cinderella ('Sveta', 28, 39);
// let Mariya = new Cinderella ('Mariya', 22, 34);
// let Ira = new Cinderella ('Ira', 23, 35);
// let Tanya = new Cinderella ('Tanya', 20, 36);
// let Alina = new Cinderella ('Alina', 19, 38);
// let Mila = new Cinderella ('Mila', 30, 38);
// let Vera = new Cinderella ('Vera', 21, 35);
// let Nina = new Cinderella ('Nina', 18, 37);
//
// let arrayCinderellas = [Lena, Olya,Sveta, Mariya, Mila, Ira, Tanya, Alina, Vera, Nina]
//
// let prince = new Prince ('garry', 30,35)
// prince.findPrincess(arrayCinderellas)