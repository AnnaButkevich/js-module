// Треба реалізувати свій розпорядок дня.
//     Колбеками, промісами та асинк авейт.
//
//     В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
//     Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.
//
//     Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
//     Якщо ж все ок, то ви маєте прожити свій звичайний день.
//     Кожна подія має бути з рандомною (не по зростанню) затримкою.


function newDay(day, taskWhenReady) {
    console.log('Доброе утро!');
    console.log('Сегодня...');

    taskWhenReady(() => {

        if (day = 'saturday' || 'sunday') {
            taskWhenReady('Балдей', null);
            return;
        }
        taskWhenReady(null, 'Подъем, уже 7:00');
    }, 2000);
}


 function brushTeeth(cb) {
   setTimeout(() => {
     console.log('Зубы чистые')
     cb(null, 'Да здравствует ментоловая свежесть!!!!');
   }, 1000)
 }

 function breakfest(cb) {
     setTimeout(() => {
         console.log('Завтрак')
         cb(null, 'Ням ням')
     }, 5000)
 }

function exercise(cb) {
    setTimeout(() => {
        console.log('Зарядеп')
        cb(null, 'В здоровом теле - здоровый дух!')
    }, 1000)
}
function dressing(cb) {
    setTimeout(() => {
        console.log('Одеваемся')
        cb(null, 'К подвигам готова!')
    }, 3000)
}

function goTo(cb) {
    setTimeout(() => {
        console.log('Поездка')
        cb(null, 'К месту назначения прибыли')
    }, 2000)
}

function dinner(cb) {
    setTimeout(() => {
        console.log('Обед')
        cb(null, 'Ням ням')
    }, 5000)
}

function homework(cb) {
    setTimeout(() => {
        console.log('Домашка')
        cb(null, 'Ура!я это сделала')
    }, 1000)
}

function dream(cb) {
    setTimeout(() => {
        console.log('Сон')
        cb(null, 'Поря спать!')
    }, 500)
}

newDay('sunday', (err, day) => {
  if (err) {
    console.log('Спи,выходной:))');
        return;
  }
  console.log(`Подъем!Сегодня ${day}`)

    brushTeeth((err, data) => {
        if (err) {
            console.log('Увы.Нет воды');
            return;
        }
        console.log(data);

            breakfest((err, data) => {
                if (err) {
                console.log('Холодильник пуст')
                return
            }
             console.log("Приятного аппетита");

                dressing((err, data) => {
                if (err) {
                    console.log('опять все в стирке')
                    return
                }
                console.log("Оделась");

                    goTo((err, data) => {
                    if (err) {
                        console.log('Нет бензина')
                        return
                    }
                    console.log("Приехали");

                        dinner((err, data) => {
                            if (err) {
                                console.log('Нет еды')
                                return
                            }
                            console.log(data);

                            homework((err, data) => {
                                if (err) {
                                    console.log('Думалка не работает')
                                    return
                                }
                                console.log(data)

                                dream((err, data) => {
                                    if (err) {
                                        console.log('А посуду помыть')
                                        return
                                    }
                                    console.log(data)
                                })

                            })
                        })
                    })
                })
            })
        })



 });



// Реалізувати друкарську машинку.
//     У вас є текст "Hello World".
//     Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//     КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
//     Цим самим ви маєте симулювати написання даного тексту юзером.
//     Приклад: "Hello"
// Затримки:
//     H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)

