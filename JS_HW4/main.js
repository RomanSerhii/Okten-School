// 1) створити функцію яка приймає масив та виводить його

//  let array = [1,2,3,4,5];
// function takesAnArray(arr) {
//    console.log(arr);
//    // for (const arrElement of arr) {

//    //      console.log(arrElement);
//    //  }
//  }

// takesAnArray(array);



// 2) створити функцію яка заповнює масив рандомними числами та виводить його.
//    Для виведення використати попередню функцію.

// function randomArray(length, min, max) {
//    let array = [];
//    for (let i = 0; i < length; i++) {
//       array.push(Math.floor(Math.random() * (max - min) + min));
//    }
//    return array;
// }
// const array1 = randomArray(10, 10, 100);
// randomArray(15, 2);
// // takesAnArray(array1);


// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function returnMinNumberFromThree(num1, num2, num3) {

//  if (num1 <= num2 && num1 <= num3) {
//     console.log(num1);

//    }
//  else if (num2 <= num1 && num2 <= num3) {
//     console.log(num2);
//    }
//  else {
//     console.log(num3);
//     return ;
//    }
// }
// returnMinNumberFromThree(33, 12, 88);

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function returnMaxNumberFromThree(num1, num2, num3) {
//   if (num1 >= num2 && num1 >= num3) {
//     console.log(num1);

//    }
//  else if (num2 >= num1 && num2 >= num3) {
//     console.log(num2);
//    }
//  else {
//     console.log(num3);
//     return ;
//    }
// }
// returnMaxNumberFromThree(138, 300, 125);

// 5) створити функцію яка повертає найбільше число з масиву

// const myFunckMaxNumberFromArray = (array) => {
//    let max = array[0];
//    for (const item of array) {
//       if (max < item)
//          max = item;
//    }
//    return max;
// }
// const myFunck1 = myFunckMaxNumberFromArray([111, 2, 3, 4, 5]);
// console.log(myFunck1);

// 6) створити функцію яка повертає найменьше число з масиву

// const myFunckMinNumberFromArray = (array) => {
//    let min = array[0];
//    for (const item of array) {
//       if (min > item)
//       min = item;
//    }
//    return min;
// }
// const myFunck2 = myFunckMinNumberFromArray([15, 3, 12, 8, 5, 22]);
// console.log(myFunck2);

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

// const myFunckTotalFromArray = (array) => {
//    let sum = 0;
//    for (let i = 0; i < array.length; i++) {

//       sum += array[i];

//    }

//    return sum;
// }
// const myFunckResultFromArray = myFunckTotalFromArray([ 3, 3, 4, 5]);
// console.log(myFunckResultFromArray);

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// const myFunckTotalFromArray = (array) => {
//    let res = 0;
//    for (let i = 0; i < array.length; i++) {

//       res += array[i] / array.length;

//    }

//    return res;
// }
// const myFunckArithmeticMeanFromArray = myFunckTotalFromArray([ 5, 3, 4, 5, 3]);
// console.log(myFunckArithmeticMeanFromArray);

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// const users = [
//    {
//       "id": 1,
//       "name": "Leanne Graham",
//       "username": "Bret",
//       "email": "Sincere@april.biz",
//       "address": {
//          "street": "Kulas Light",
//          "suite": "Apt. 556",
//          "city": "Gwenborough",
//          "zipcode": "92998-3874",
//          "geo": {
//             "lat": "-37.3159",
//             "lng": "81.1496"
//          }
//       },
//       "phone": "1-770-736-8031 x56442",
//       "website": "hildegard.org",
//       "company": {
//          "name": "Romaguera-Crona",
//          "catchPhrase": "Multi-layered client-server neural-net",
//          "bs": "harness real-time e-markets"
//       }
//    },
//    {
//       "id": 2,
//       "name": "Ervin Howell",
//       "username": "Antonette",
//       "email": "Shanna@melissa.tv",
//       "address": {
//          "street": "Victor Plains",
//          "suite": "Suite 879",
//          "city": "Wisokyburgh",
//          "zipcode": "90566-7771",
//          "geo": {
//             "lat": "-43.9509",
//             "lng": "-34.4618"
//          }
//       },
//       "phone": "010-692-6593 x09125",
//       "website": "anastasia.net",
//       "company": {
//          "name": "Deckow-Crist",
//          "catchPhrase": "Proactive didactic contingency",
//          "bs": "synergize scalable supply-chains"
//       }
//    },
//    {
//       "id": 3,
//       "name": "Clementine Bauch",
//       "username": "Samantha",
//       "email": "Nathan@yesenia.net",
//       "address": {
//          "street": "Douglas Extension",
//          "suite": "Suite 847",
//          "city": "McKenziehaven",
//          "zipcode": "59590-4157",
//          "geo": {
//             "lat": "-68.6102",
//             "lng": "-47.0653"
//          }
//       },
//       "phone": "1-463-123-4447",
//       "website": "ramiro.info",
//       "company": {
//          "name": "Romaguera-Jacobson",
//          "catchPhrase": "Face to face bifurcated interface",
//          "bs": "e-enable strategic applications"
//       }
//    },
//    {
//       "id": 4,
//       "name": "Patricia Lebsack",
//       "username": "Karianne",
//       "email": "Julianne.OConner@kory.org",
//       "address": {
//          "street": "Hoeger Mall",
//          "suite": "Apt. 692",
//          "city": "South Elvis",
//          "zipcode": "53919-4257",
//          "geo": {
//             "lat": "29.4572",
//             "lng": "-164.2990"
//          }
//       },
//       "phone": "493-170-9623 x156",
//       "website": "kale.biz",
//       "company": {
//          "name": "Robel-Corkery",
//          "catchPhrase": "Multi-tiered zero tolerance productivity",
//          "bs": "transition cutting-edge web services"
//       }
//    },
//    {
//       "id": 5,
//       "name": "Chelsey Dietrich",
//       "username": "Kamren",
//       "email": "Lucio_Hettinger@annie.ca",
//       "address": {
//          "street": "Skiles Walks",
//          "suite": "Suite 351",
//          "city": "Roscoeview",
//          "zipcode": "33263",
//          "geo": {
//             "lat": "-31.8129",
//             "lng": "62.5342"
//          }
//       },
//       "phone": "(254)954-1289",
//       "website": "demarco.info",
//       "company": {
//          "name": "Keebler LLC",
//          "catchPhrase": "User-centric fault-tolerant solution",
//          "bs": "revolutionize end-to-end systems"
//       }
//    },
//    {
//       "id": 6,
//       "name": "Mrs. Dennis Schulist",
//       "username": "Leopoldo_Corkery",
//       "email": "Karley_Dach@jasper.info",
//       "address": {
//          "street": "Norberto Crossing",
//          "suite": "Apt. 950",
//          "city": "South Christy",
//          "zipcode": "23505-1337",
//          "geo": {
//             "lat": "-71.4197",
//             "lng": "71.7478"
//          }
//       },
//       "phone": "1-477-935-8478 x6430",
//       "website": "ola.org",
//       "company": {
//          "name": "Considine-Lockman",
//          "catchPhrase": "Synchronised bottom-line interface",
//          "bs": "e-enable innovative applications"
//       }
//    },
//    {
//       "id": 7,
//       "name": "Kurtis Weissnat",
//       "username": "Elwyn.Skiles",
//       "email": "Telly.Hoeger@billy.biz",
//       "address": {
//          "street": "Rex Trail",
//          "suite": "Suite 280",
//          "city": "Howemouth",
//          "zipcode": "58804-1099",
//          "geo": {
//             "lat": "24.8918",
//             "lng": "21.8984"
//          }
//       },
//       "phone": "210.067.6132",
//       "website": "elvis.io",
//       "company": {
//          "name": "Johns Group",
//          "catchPhrase": "Configurable multimedia task-force",
//          "bs": "generate enterprise e-tailers"
//       }
//    },
//    {
//       "id": 8,
//       "name": "Nicholas Runolfsdottir V",
//       "username": "Maxime_Nienow",
//       "email": "Sherwood@rosamond.me",
//       "address": {
//          "street": "Ellsworth Summit",
//          "suite": "Suite 729",
//          "city": "Aliyaview",
//          "zipcode": "45169",
//          "geo": {
//             "lat": "-14.3990",
//             "lng": "-120.7677"
//          }
//       },
//       "phone": "586.493.6943 x140",
//       "website": "jacynthe.com",
//       "company": {
//          "name": "Abernathy Group",
//          "catchPhrase": "Implemented secondary concept",
//          "bs": "e-enable extensible e-tailers"
//       }
//    },
//    {
//       "id": 9,
//       "name": "Glenna Reichert",
//       "username": "Delphine",
//       "email": "Chaim_McDermott@dana.io",
//       "address": {
//          "street": "Dayna Park",
//          "suite": "Suite 449",
//          "city": "Bartholomebury",
//          "zipcode": "76495-3109",
//          "geo": {
//             "lat": "24.6463",
//             "lng": "-168.8889"
//          }
//       },
//       "phone": "(775)976-6794 x41206",
//       "website": "conrad.com",
//       "company": {
//          "name": "Yost and Sons",
//          "catchPhrase": "Switchable contextually-based project",
//          "bs": "aggregate real-time technologies"
//       }
//    },
//    {
//       "id": 10,
//       "name": "Clementina DuBuque",
//       "username": "Moriah.Stanton",
//       "email": "Rey.Padberg@karina.biz",
//       "address": {
//          "street": "Kattie Turnpike",
//          "suite": "Suite 198",
//          "city": "Lebsackbury",
//          "zipcode": "31428-2261",
//          "geo": {
//             "lat": "-38.2386",
//             "lng": "57.2232"
//          }
//       },
//       "phone": "024-648-3804",
//       "website": "ambrose.net",
//       "company": {
//          "name": "Hoeger LLC",
//          "catchPhrase": "Centralized empowering task-force",
//          "bs": "target end-to-end models"
//       }
//    }
// ];

// function myFuncKeyOfObject(arrayObj) {
//    let keys = [];
//    for (const key of arrayObj) {
//      let res =  Object.keys(key);
//       console.log(res);
//       keys.push(res);

//    }
//    return keys;
// }
// const myFunckResKeyOfObject = myFuncKeyOfObject(users);
// console.log(myFunckResKeyOfObject);


// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// const users = [
//    {
//       "id": 1,
//       "name": "Leanne Graham",
//       "username": "Bret",
//       "email": "Sincere@april.biz",
//       "address": {
//          "street": "Kulas Light",
//          "suite": "Apt. 556",
//          "city": "Gwenborough",
//          "zipcode": "92998-3874",
//          "geo": {
//             "lat": "-37.3159",
//             "lng": "81.1496"
//          }
//       },
//       "phone": "1-770-736-8031 x56442",
//       "website": "hildegard.org",
//       "company": {
//          "name": "Romaguera-Crona",
//          "catchPhrase": "Multi-layered client-server neural-net",
//          "bs": "harness real-time e-markets"
//       }
//    },
//    {
//       "id": 2,
//       "name": "Ervin Howell",
//       "username": "Antonette",
//       "email": "Shanna@melissa.tv",
//       "address": {
//          "street": "Victor Plains",
//          "suite": "Suite 879",
//          "city": "Wisokyburgh",
//          "zipcode": "90566-7771",
//          "geo": {
//             "lat": "-43.9509",
//             "lng": "-34.4618"
//          }
//       },
//       "phone": "010-692-6593 x09125",
//       "website": "anastasia.net",
//       "company": {
//          "name": "Deckow-Crist",
//          "catchPhrase": "Proactive didactic contingency",
//          "bs": "synergize scalable supply-chains"
//       }
//    },
//    {
//       "id": 3,
//       "name": "Clementine Bauch",
//       "username": "Samantha",
//       "email": "Nathan@yesenia.net",
//       "address": {
//          "street": "Douglas Extension",
//          "suite": "Suite 847",
//          "city": "McKenziehaven",
//          "zipcode": "59590-4157",
//          "geo": {
//             "lat": "-68.6102",
//             "lng": "-47.0653"
//          }
//       },
//       "phone": "1-463-123-4447",
//       "website": "ramiro.info",
//       "company": {
//          "name": "Romaguera-Jacobson",
//          "catchPhrase": "Face to face bifurcated interface",
//          "bs": "e-enable strategic applications"
//       }
//    },
//    {
//       "id": 4,
//       "name": "Patricia Lebsack",
//       "username": "Karianne",
//       "email": "Julianne.OConner@kory.org",
//       "address": {
//          "street": "Hoeger Mall",
//          "suite": "Apt. 692",
//          "city": "South Elvis",
//          "zipcode": "53919-4257",
//          "geo": {
//             "lat": "29.4572",
//             "lng": "-164.2990"
//          }
//       },
//       "phone": "493-170-9623 x156",
//       "website": "kale.biz",
//       "company": {
//          "name": "Robel-Corkery",
//          "catchPhrase": "Multi-tiered zero tolerance productivity",
//          "bs": "transition cutting-edge web services"
//       }
//    },
//    {
//       "id": 5,
//       "name": "Chelsey Dietrich",
//       "username": "Kamren",
//       "email": "Lucio_Hettinger@annie.ca",
//       "address": {
//          "street": "Skiles Walks",
//          "suite": "Suite 351",
//          "city": "Roscoeview",
//          "zipcode": "33263",
//          "geo": {
//             "lat": "-31.8129",
//             "lng": "62.5342"
//          }
//       },
//       "phone": "(254)954-1289",
//       "website": "demarco.info",
//       "company": {
//          "name": "Keebler LLC",
//          "catchPhrase": "User-centric fault-tolerant solution",
//          "bs": "revolutionize end-to-end systems"
//       }
//    },
//    {
//       "id": 6,
//       "name": "Mrs. Dennis Schulist",
//       "username": "Leopoldo_Corkery",
//       "email": "Karley_Dach@jasper.info",
//       "address": {
//          "street": "Norberto Crossing",
//          "suite": "Apt. 950",
//          "city": "South Christy",
//          "zipcode": "23505-1337",
//          "geo": {
//             "lat": "-71.4197",
//             "lng": "71.7478"
//          }
//       },
//       "phone": "1-477-935-8478 x6430",
//       "website": "ola.org",
//       "company": {
//          "name": "Considine-Lockman",
//          "catchPhrase": "Synchronised bottom-line interface",
//          "bs": "e-enable innovative applications"
//       }
//    },
//    {
//       "id": 7,
//       "name": "Kurtis Weissnat",
//       "username": "Elwyn.Skiles",
//       "email": "Telly.Hoeger@billy.biz",
//       "address": {
//          "street": "Rex Trail",
//          "suite": "Suite 280",
//          "city": "Howemouth",
//          "zipcode": "58804-1099",
//          "geo": {
//             "lat": "24.8918",
//             "lng": "21.8984"
//          }
//       },
//       "phone": "210.067.6132",
//       "website": "elvis.io",
//       "company": {
//          "name": "Johns Group",
//          "catchPhrase": "Configurable multimedia task-force",
//          "bs": "generate enterprise e-tailers"
//       }
//    },
//    {
//       "id": 8,
//       "name": "Nicholas Runolfsdottir V",
//       "username": "Maxime_Nienow",
//       "email": "Sherwood@rosamond.me",
//       "address": {
//          "street": "Ellsworth Summit",
//          "suite": "Suite 729",
//          "city": "Aliyaview",
//          "zipcode": "45169",
//          "geo": {
//             "lat": "-14.3990",
//             "lng": "-120.7677"
//          }
//       },
//       "phone": "586.493.6943 x140",
//       "website": "jacynthe.com",
//       "company": {
//          "name": "Abernathy Group",
//          "catchPhrase": "Implemented secondary concept",
//          "bs": "e-enable extensible e-tailers"
//       }
//    },
//    {
//       "id": 9,
//       "name": "Glenna Reichert",
//       "username": "Delphine",
//       "email": "Chaim_McDermott@dana.io",
//       "address": {
//          "street": "Dayna Park",
//          "suite": "Suite 449",
//          "city": "Bartholomebury",
//          "zipcode": "76495-3109",
//          "geo": {
//             "lat": "24.6463",
//             "lng": "-168.8889"
//          }
//       },
//       "phone": "(775)976-6794 x41206",
//       "website": "conrad.com",
//       "company": {
//          "name": "Yost and Sons",
//          "catchPhrase": "Switchable contextually-based project",
//          "bs": "aggregate real-time technologies"
//       }
//    },
//    {
//       "id": 10,
//       "name": "Clementina DuBuque",
//       "username": "Moriah.Stanton",
//       "email": "Rey.Padberg@karina.biz",
//       "address": {
//          "street": "Kattie Turnpike",
//          "suite": "Suite 198",
//          "city": "Lebsackbury",
//          "zipcode": "31428-2261",
//          "geo": {
//             "lat": "-38.2386",
//             "lng": "57.2232"
//          }
//       },
//       "phone": "024-648-3804",
//       "website": "ambrose.net",
//       "company": {
//          "name": "Hoeger LLC",
//          "catchPhrase": "Centralized empowering task-force",
//          "bs": "target end-to-end models"
//       }
//    }
// ];
// function myFuncKValueOfObject(arrayObj) {
//    let values = [];
//    for (const value of arrayObj) {
//       let res = Object.values(value);
//       console.log(res);
//       values.push(res);
//    }
//    return values;
// }
// const myFunckResValueOfObject = myFuncKValueOfObject(users);
// console.log(myFunckResValueOfObject);

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// const sumArray = (array1, array2) => {
//    let newArray = [];
//    for (let i = 0; i < array1.length; i++) {

//       newArray.push(array1[i] + array2[i]);
//    }
//    return newArray;
// }
// const sumArrayTotal = sumArray([1, 2, 3, 4], [2, 3, 4, 5]);
// console.log(sumArrayTotal);

// ============================================================================================

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function myFunckMinNumberFromArray() {
//    let min = arguments[0];
//    let max = arguments[0];
//    for (const item of arguments) {
//       if (item > max) max = item;
//       if (item < min) min = item;
//    }
//    console.log('max', max);
//    return min;
// }
// const min = myFunckMinNumberFromArray(111, 22, 35, 14, 5, 123);
// console.log('----------');
// console.log('min', min);

// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let array1 = [1, 2, 3, 4];

// function changeElement(arr, index) {
//    let array = [...arr];

//     if (index < array.length - 1) {
//       let temp = array[index];
//       array[index] = array[index + 1];
//       array[index + 1] = temp;
//    }
//    return array;
// }
// const changeElement1 = changeElement(array1, 2);
// console.log(array1);
// console.log(changeElement1);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// function myFunck(array) {
//    let zero = [];
//    let number = [];
//    for (const item of array) {
//       if (item === 0) {
//          zero.push(0)
//       }
//       else {
//          number.push(item);
//       }
//    }
//    return number.concat(zero);
// }
// console.log(myFunck([1, 0, 6, 0, 3]));
// console.log(myFunck([0,1,2,3,4]));
// console.log(myFunck([0, 0, 1, 0]));

// ============================================================================================



// // ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

// function addDiv(message, typeTag) {
//    const tag = document.createElement(typeTag);
//    tag.innerHTML = message || "Hello World";
//    document.body.appendChild(tag);
// }
// addDiv('Hello owu', 'div');

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи


// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елементу в який потрібно додати список цих автомобілів.

// const cars=[
// 			{
// 				brand: 'audi',		
// 				model: 'a4',		
// 				volume_engine: '1.8',	
// 				hp: '120',		
// 				awd: 'ні',   		
// 				automat: 'так',		
// 			},
// 			{
// 				brand: 'peugeot',		
// 				model: 'a4 allroad',	
// 				volume_engine: '2',	
// 				hp: '211',		
// 				awd: 'так',   		
// 				automat: 'так',		
// 			},
// 			{
// 				brand: 'renault',		
// 				model: 'a6',		
// 				volume_engine: '2',	
// 				hp: '180',		
// 				awd: 'ні',   		
// 				automat: 'так',		
// 			},
// 			{
// 				brand: 'bmw',		
// 				model: '3 Series',	
// 				volume_engine: '1.6',	
// 				hp: '135',		
// 				awd: 'ні',   		
// 				automat: 'ні',		
// 			},
// 			{
// 				brand: 'tesla',		
// 				model: '5 Series',	
// 				volume_engine: '3',	
// 				hp: '258',		
// 				awd: 'ні',   		
// 				automat: 'так',		
// 			},
// 			{
// 				brand: 'volkswagen',	
// 				model: 'passat',	
// 				volume_engine: '1.8',	
// 				hp: '152',		
// 				awd: 'ні',   		
// 				automat: 'так',		
// 			},
// ]

// function addListCars(arrayCars, idTag) {
//    const block = document.getElementById(idTag);
//    const ul = document.createElement('ul');
//    for (let i = 0; i < arrayCars.length; i++) {
//       const car = arrayCars[i];
//       const li = document.createElement('li');
//       li.innerHTML = `${i + 1} - ${car.brand}`;
//       ul.appendChild(li);
//    }
//    block.appendChild(ul);
// }
// addListCars(cars, 'list');

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в одному блоці
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

// function addListCars(arrayCars, idTag) {
//    const block = document.getElementById(idTag);
  
//    for (let i = 0; i < arrayCars.length; i++) {
//       const car = arrayCars[i];
//       const div = document.createElement('div');
//       const brand = document.createElement('h2');
//       const model = document.createElement('h3');
//       const p = document.createElement('p');
      

//       p.innerHTML = `volume_engine : ${car.volume_engine}, hp: ${car.hp}, awd: ${car.awd}, automat: ${car.automat}`;
//       brand.innerHTML = `Name : ${car.brand}`;
//       model.innerHTML = `Model : ${car.model}`;

//       div.appendChild(brand);
//       div.appendChild(model);
//       div.appendChild(p);
//       block.appendChild(div);
//    }
   
// }
// addListCars(cars, 'list');
// ******************* НАЗАД В МИНУЛЕ *********************** //