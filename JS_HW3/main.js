// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName
// або document.getElementsByTagName :
   
//  a) отримує текст з параграфа з id "content"

// const content = document.getElementById("content");
// console.log(content);

//     b) отримує текст з блоку з id "rules"

// const rules = document.getElementById("rules");
// console.log(rules);

//     c) замініть текст параграфа з id 'content' на будь-який інший

// const content = document.getElementById("content");
// content.innerText = 'Привіт. Мене звати Сергій і я замінив цей текст)))';
// console.log(content);

//     d) замініть текст параграфа з id 'rules' на будь-який інший

// const rules = document.getElementById("rules");
// rules.innerText = 'І тут я замінив текст';
// console.log(rules);

//     e) змініть кожному елементу колір фону на червоний

//  const content = document.getElementById("content");
// content.style.background = 'red';
// console.log(content);

//     f) змініть кожному елементу колір тексту на синій

// const rules = document.getElementById("rules");
// rules.style.background = 'silver';
// rules.style.marginTop = '50px';
// console.log(rules);

//     g) отримати весь список класів елемента з id=rules і вивести їх в console.log

// const rules = document.getElementById("rules");
// console.log(rules.classList);

//     h) отримати всі елементи з класом fc_rules

// const elements = document.getElementsByClassName('fc_rules');
// console.log(elements);

//     i) поміняти колір тексту у всіх елементів fc_rules на червоний

// const elementsColor = document.getElementsByClassName('fc_rules');
// for (let elementCol of elementsColor) {
//    elementCol.style.color = 'red';
// }
// console.log(elementsColor);

// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок
// за допомоги document.createElement. Вставити цей блок на сторінку

 //   name: 'vasya',
//   age: 31,
//   status: false,
//   address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
// }, {
//   name: 'petya',
//   age: 30,
//   status: true,
//   address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
// }, {
//   name: 'kolya',
//   age: 29,
//   status: true,
//   address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
// }, {
//   name: 'olya',
//   age: 28,
//   status: false,
//   address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
// }, {
//   name: 'max',
//   age: 30,
//   status: true,
//   address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
// }, {
//   name: 'anya',
//   age: 31,
//   status: false,
//   address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
// }, {
//   name: 'oleg',
//   age: 28,
//   status: false,
//   address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
// }, {
//   name: 'andrey',
//   age: 29,
//   status: true,
//   address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
// }, {
//   name: 'masha',
//   age: 30,
//   status: true,
//   address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
// }, {
//   name: 'olya',
//   age: 31,
//   status: false,
//   address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
// }, {
//   name: 'max',
//   age: 31,
//   status: true,
//   address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
//    }];

//    for (const user of users) {
//       let item = document.createElement('div');
//       item.innerText = `${user.name} ${user.age} ${user.status} ${user.address}`;
//       document.body.appendChild(item);
//    }

// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок
// за допомоги document.createElement.
//    Блок з адресою зробити окремим блоком, з блоками для кожної властивості

// let users = [{
//   name: 'vasya',
//   age: 31,
//   status: false,
//   address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
// }, {
//   name: 'petya',
//   age: 30,
//   status: true,
//   address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
// }, {
//   name: 'kolya',
//   age: 29,
//   status: true,
//   address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
// }, {
//   name: 'olya',
//   age: 28,
//   status: false,
//   address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
// }, {
//   name: 'max',
//   age: 30,
//   status: true,
//   address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
// }, {
//   name: 'anya',
//   age: 31,
//   status: false,
//   address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
// }, {
//   name: 'oleg',
//   age: 28,
//   status: false,
//   address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
// }, {
//   name: 'andrey',
//   age: 29,
//   status: true,
//   address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
// }, {
//   name: 'masha',
//   age: 30,
//   status: true,
//   address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
// }, {
//   name: 'olya',
//   age: 31,
//   status: false,
//   address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
// }, {
//   name: 'max',
//   age: 31,
//   status: true,
//   address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
// }];

// for (const user of users) {

//    let container = document.createElement('div');
//    container.classList.add('user');

//    let user_name = document.createElement('div');
//    user_name.innerText = `Name: ${user.name}`;
//    user_name.style.background = 'blue';
//    container.appendChild(user_name);
   
//     let user_age = document.createElement('div');
//    user_age.innerText = `Age: ${user.age}`;
//    user_age.style.background = 'blue';
//    container.appendChild(user_age);

//      let user_status = document.createElement('div');
//    user_status.innerText = `Status: ${user.status}`;
//    user_status.style.background = 'blue';
//    container.appendChild(user_status);

//    let user_address = document.createElement('div');
//    user_address.classList.add('address');
//    user_address.style.background = 'yellow';
//    user_address.style.marginBottom = '20px'
   
//    let user_city = document.createElement('div');
//    user_city.innerText = `City: ${user.address.city}`;
//    user_address.appendChild(user_city);
//    container.appendChild(user_address);

//    let user_country = document.createElement('div');
//    user_country.innerText = `Country: ${user.address.country}`;
//    user_address.appendChild(user_country);
//    container.appendChild(user_address);

//    let user_street = document.createElement('div');
//    user_street.innerText = `Street: ${user.address.street}`;
//    user_address.appendChild(user_street);
//    container.appendChild(user_address);

//    let user_houseNumber = document.createElement('div');
//    user_houseNumber.innerText = `HouseNumber: ${user.address.houseNumber}`;
//    user_address.appendChild(user_houseNumber);
//    container.appendChild(user_address);

//       document.body.appendChild(container);
//    }

//
// let user1 = {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
// };
// for (key in user1) {
//     console.log('key: user1', key);
// }
// console.log(Object.keys(user1));
// let user2 = {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
// }
// for (key in user2) {
//     console.log('key: user2', key);
// }
// console.log(Object.keys(user2));
// let user3 = {
// name: 'masha',
//   age: 30,
//   status: true,
//   address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
// }
// for (key in user3) {
//     console.log('key: user3', key);
// }
// console.log(Object.keys(user3));
  



// ______________________________________________________________________________________________________________________________________________________
//                                                                 РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________

// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)

// const changeName = document.getElementById('main_header');
// console.log(changeName);

// changeName.innerText = 'mon-year';
// changeName.style.color = 'red';


//     b) робить ширини у елементу ul 400px

// const ulWidth = document.getElementsByTagName('ul');
// console.log(ulWidth);
// for (const ul of ulWidth) {
//    ul.style.width = '400px';
   
// }

//     c) робить ширини у всіх елементів з класом linkList шириною 50%

// const tag = document.getElementsByClassName('linkList');
// for (const t of tag) {
//    t.style.width = '50%'
   
// }
   //  d) отримує текст який зберігається в елементі з класом listElement2

// const texts = document.getElementsByClassName('listElement2');
// for (const text of texts) {
//    console.log(text);
//    text.style.color = 'red';
// }

//     e) отримує всі елементи li та змінює ім колір фону на сірий

// const liColors = document.getElementsByTagName('li');
// for (const liColor of liColors) {
//    liColor.style.background = 'grey';
// }

//     f) отримує всі елементи 'a' та додає їм клас anchor

// const elements = document.getElementsByTagName('a');

// console.log(elements);
// for (const element of elements) {
//    element.classList.add('anchor');
// }

//     g) отримує всі елементи 'a' та у випадку,
//       якщо текстовий контент елементу дорівнює link3,
//       змінює йому розмір тексту на 40 пікселів

// const elements = document.getElementsByTagName('a');

//   console.log(elements);
// for (const element of elements) {
//    if (element.text === 'link3') {
//       element.style.fontSize = '40px';
//    }
    
// };

// for (const element of elements) {
// console.log(element);
// }
//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// const elements = document.getElementsByTagName('a');
// console.log(elements);
// for (const element of elements) {
//    element.classList.add('element_XXX');
   
// }
//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//     l) отримати елементи p та змінити їм padding на 20px
//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

// 2) Є масив котрий характеризує правила.
//    Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//    Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html

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
// 				}
// ];
         
// const wrap = document.createElement('div');
// wrap.id = 'wrap';

// for (let i = 0; i < rules.length; i++) {
//    const rule = rules[i];
//    const div = document.createElement('div');
//    const h2 = document.createElement('h2');
//    const p = document.createElement('p');

//    div.className = `rules rule${i+1}`;
//    h2.innerText = rule.title;
//    p.innerText = rule.body;
//    div.appendChild(h2);
//    div.appendChild(p);
//    wrap.appendChild(div);

// }
// document.body.appendChild(wrap);

// ===========================================================================

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];

// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//
// ]
// let usersWithCities = [];

// for (const user of usersWithId) {
//    for (const city of citiesWithId) {
//       if (user.id === city.user_id) {
//          user.address = city;
//          usersWithCities.push(user, city)
//       }
//    } 
// }
// console.log(usersWithCities);