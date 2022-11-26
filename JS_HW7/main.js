// - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так,
// щоб при кліку на кнопку зникав елемент с id = "text".

// const btn = document.getElementById("myBtn");
// const text = document.getElementById("text");

// btn.onclick = ev => {
//    text.hidden
//       ? text.hidden = false
      // : text.hidden = true          // 1-ий спосіб
// };

// const btn = document.getElementById("myBtn");
// const text = document.getElementById("text");
// text.style.display = 'block'

// btn.onclick = ev => {
//   text.style.display === 'block'
//       ? text.style.display = 'none'
//       : text.style.display = 'block'      // 2-ий спосіб
// }

// const btn = document.getElementById("myBtn");
// const text = document.getElementById("text");
// text.style.display = "block"
// btn.onclick = ev => {
//    if (text.style.display === 'block') {
//       text.style.display = 'none'
//    } else {
//       text.style.display = 'block'        // 3-ій спосіб
//    }
// }


// - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.

// const btn = document.getElementById("myBtn");

// myBtn.style.display = "block";

// btn.onclick = ev => {
//       myBtn.style.display = 'none'
// }


// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//   При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача

// function getObject() {
//       const input = document.getElementsByTagName("input");
//       for (const age of input) {
//             if (age.value <= 18 && age.value > 0) {
//                   alert("Вам ще не виповнилось 18 років ");
//             }
//             if (age.value <= 0 || age.value >= 110) {
//                   alert("Ви ввели некоректний вік !!!")
//             }
//             else {
//                   alert("Вітаю. Вам вже виповнилось 18 років )))")
//             }
//       }
// }
      
// - Создайте меню, которое раскрывается/сворачивается при клике

// const a1 = document.getElementById("a1");

// const subMenu = document.getElementById("subMenu");

// let flag = false;

// a1.onclick = event => {
//       if (flag) {
//             subMenu.style.display = 'block';
//             flag = false;
//       } else {
//            subMenu.style.display = 'none';
//             flag = true;
//       }
// }

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//   Вывести список комментариев в документ, каждый в своем блоке.
//   Добавьте каждому комментарию по кнопке для сворачивания его body.

// let commentArray = [
//       { title: 'Іван', body: 'Все круто +5' },
//       { title: 'Андрій', body: 'Ви молодці !!! +5' },
//       { title: 'Надя', body: 'Я в захваті +5' },
//       { title: 'Сергій', body: 'Могли б і краще +4' },
//       { title: 'Петро', body:'Супер !!! +5' },
// ]

// const content = document.getElementById("content");
// commentArray.forEach(item => {
//      const div = document.createElement("div");
//      const h2 = document.createElement("h2");
//       const p = document.createElement("p");
//       const button = document.createElement("button");
//       button.innerText = 'Сховати'
//       h2.innerText = item.title;
//       p.innerText = item.body;
//       button.onclick = () => {
//             p.hidden
//             ? p.hidden = false
//             : p.hidden = true
//       }
//       div.appendChild(h2);
//       div.appendChild(p);
//       div.appendChild(button);

//       content.appendChild(div);
// })

// - Створити 2 форми  по 2 інпути в кожній.
// Cтворити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//   Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
//   Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// const btn1 = document.getElementById("MyBtn1");

// btn1.onclick = event => {
//       const MyInptName1 = document.getElementById("MyInptName1");
//       const name1 = MyInptName1.value;
//       const MyInptAge1 = document.getElementById("MyInptAge1");
//       const age1 = MyInptAge1.value;
//       const user1 = {name1, age1}
//       console.log(user1);
// }

// const btn2 = document.getElementById("MyBtn2");
// btn2.onclick = event => {
//       const MyInptName2 = document.getElementById("MyInptName2");
//       const name2 = MyInptName2.value;
//       const MyInptAge2 = document.getElementById("MyInptAge2");
//       const age2 = MyInptAge2.value;
//       const user2 = {name2, age2}
//       console.log(user2);
// }

// - Створити функцію, яка генерує таблицю.
//   Перший аргумент визначає кількість строк.
//   Другий параметр визначає кліькіть ячеєк в кожній строці.
//   Третій параметр визначає елемент в який потрібно таблицю додати.

// const content = document.getElementById("content");
// function createTable(rows, cols, tag) {
//       const table = document.createElement("table");
//       for (let i = 0; i < rows; i++) {
//             const tr = document.createElement("tr");
//             for (let j = 0; j < cols; j++) {
//                   const td = document.createElement("td");
//                   td.innerHTML = i.toString() + j.toString();
//                   tr.appendChild(td);
//                   table.appendChild(tr);
//             }
//             tag.appendChild(table);
//       }
// }

// createTable(5, 5, content);

// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.

// let imgArray = [
//       {
//             id: 1,
//             img_url: "Nike_1.jpg"
//       },
//       {
//             id: 2,
//             img_url: "Nike_2.jpg"
//       },
//       {
//             id: 3,
//             img_url: "Nike_3.jpg"
//       },
//       {
//             id: 4,
//             img_url: "Nike_4.jpg"
//       },
//       {
//             id: 5,
//             img_url: "Nike_5.jpg"
//       },

// ];
// const content = document.getElementById("content");
// const img = document.createElement("img");
// const btn1 = document.createElement("button");
// const btn2 = document.createElement("button");

// btn1.innerText = "Left";
// btn2.innerText = "Right";
// let index = 0;
// img.width = 300;


// img.src = imgArray[index].img_url;


// content.appendChild(img);
// content.appendChild(btn1);
// content.appendChild(btn2);

// btn1.onclick = () => {
//       index - 1 < 0
//             ? index = imgArray.length - 1
//             : index = index - 1
//       img.src = imgArray[index].img_url
// }
// btn2.onclick = () => {
//       index + 1 > imgArray.length - 1
//             ? index = 0
//             : index = index + 1
//       img.src = imgArray[index].img_url
// }
// ______________________________________________________________________________________________________________________________________________________
//                                                                 РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________

// - Сворити масив не цензурних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку


// const swearWordsArrays = ["fuck", "shit", "son of bitch", "arsehole", "bullshit"];

// const btn3 = document.getElementById("MyBtn3");

// btn3.onclick = () => {
//       const myComents1 = document.getElementById("MyComents1");
//       const coment = myComents1.value;
//             if (swearWordsArrays.includes(coment)) {
//                   alert("Warning !!!")
//             }
//             else {
//                   alert("Thank you for your comment)))")
//             }
//       }            // Ще потрібно допрацювати !!!!
// ______________________________________________________!!!

// - Сворити масив не цензурних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку



// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить
// збоку меню - зміст по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті

// const arrayH2 = document.getElementsByTagName('h2');
// const content = document.getElementById('content');
// const wrap = document.getElementById('wrap');
// const ul = document.createElement('ul');
// for (let i = 0; i < arrayH2.length; i++) {
//       const li = document.createElement('li');
//       const a = document.createElement('a');
//       let yakir = 'yakir' + i;
//       a.href = '#' + yakir;
//       arrayH2[i].setAttribute('id', yakir);
//       a.innerHTML = arrayH2[i].innerText;
//       li.appendChild(a);
//       ul.appendChild(li);    
// }
// content.appendChild(ul);
// content.style = "width : 30%; float : left";
// wrap.style = "width : 70%; float : left";

// -- Взяти масив юзерів
// const usersWithAddress = [
//    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];



// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ

// const content = document.getElementById('content');
// const userDiv = document.createElement('div');
// userDiv.className = 'user';
// userDiv.appendChild(renderContent(usersWithAddress));

// const input1 = document.createElement('input');
// const input2 = document.createElement('input');
// const input3 = document.createElement('input');

// const label1 = document.createElement('label'); 
// const label2 = document.createElement('label'); 
// const label3 = document.createElement('label'); 

// const button = document.createElement('button');

// label1.innerText = 'зі статусом false'
// label2.innerText = 'старші 29-и років включно'
// label3.innerText = 'місто Київ'

// button.innerText = 'Filter On'

// input1.type = 'checkbox';
// input2.type = 'checkbox';
// input3.type = 'checkbox';

// content.appendChild(userDiv);

// content.appendChild(label1);
// content.appendChild(input1);
// content.appendChild(label2);
// content.appendChild(input2);
// content.appendChild(label3);
// content.appendChild(input3);
 
// content.appendChild(button);

// button.onclick = ev => {
//       let myArray = JSON.parse(JSON.stringify(usersWithAddress))

//       if (input1.checked) myArray = myArray.filter(value => !value.status);
//       if (input2.checked) myArray = myArray.filter(value => value.age >= 29);
//       if (input3.checked) myArray = myArray.filter(value => value.address.city === 'Kyiv');

//       userDiv.innerHTML = '';
//       userDiv.appendChild(renderContent(myArray));
// }

// function renderContent(array) {
//       const main = document.createElement('div');
//       array.forEach( item => {
//             const div = document.createElement('div');
//             div.innerHTML = JSON.stringify(item);
//             main.appendChild(div);
//       })
//       return main;
// }


