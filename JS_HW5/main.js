// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту

// Таким чином описати тег :

// -a

// Приклад результату
// {
// 	titleOfTag: 'area',
// 		action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
// 	attrs: [
// 	{titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
// 	{/*some props and values*/},
// 	{/*...*/},
// 	{/*...*/},
// ]
//
// }
// function Tag(titleOfTag, action, attrs) {
   
//    this.titleOfTag = titleOfTag || 'No Title';
//    this.action = action || 'No Action';
//    this.attrs = attrs || [];
// }
// let title = '<a>';
// let action = "HTML-элемент <a> определяет гиперссылку для перехода на определённое место на странице или на другую страницу в Интернете. Также он может быть использован (в устаревшем варианте) для создания якоря — это место назначения для гиперссылок внутри страницы: так ссылки не ограничены только в перемещении между страницами.";
// let attribytes = [
//    { titleOfAttr: 'download', actionOfAttr: "Этот атрибут сообщает о том, что эта ссылка должна быть использована для скачивания файла, и, когда пользователь нажимает на ссылку, ему будет предложено сохранить файл как локальный. Если у этого атрибута есть значение, оно будет использовано как заполненное название файла в Окне сохранения, которое открывается, когда пользователь нажимает на ссылку (пользователь может поменять название перед сохранением файла). Ограничений на позволенные значения нет (хотя оно будет конвертировано в нижние подчёркивания, предотвращая специфичные пути), но стоит обратить внимание, что у большинства файловых систем есть ограничения на то, какие знаки препинания поддерживаются файловой системой, и браузеры регулируют названия согласно ограничениям." },
//    { titleOfAttr: 'href', actionOfAttr: "Единственный обязательный атрибут для определения ссылки в HTML4, но больше необязательный в HTML5. Упущение этого атрибута создаёт ссылку-заполнитель. Атрибут href указывает ссылку: либо URL, либо якорь. Якорь — это название после символа #, который указывает на элемент (ID (en-US)) на текущей странице. URL не ограничены только ссылками на HTTP, они могут использовать любой протокол, поддерживающийся браузером. Например, file, ftp и mailto работают в большинстве браузеров." },
//    {titleOfAttr: 'ping', actionOfAttr: "Этот атрибут уведомляет указанные в нём URL, что пользователь перешёл по ссылке."},
// ];

// let a = new Tag(title, action, attribytes);
// console.log(a);

// 	-  Створити класс  для об'єкту який описує теги
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
// -h1

// Приклад результату
// {
// 	titleOfTag: 'area',
// 		action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
// 	attrs: [
// 	{titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
// 	{/*some props and values*/},
// 	{/*...*/},
// 	{/*...*/},
// ]

// class Tag {
//    constructor(titleOfTag, action, attrs) {
//       this.titleOfTag = titleOfTag || 'No Title';
//       this.action = action || 'No Action';
//       this.attrs = attrs || [];
//    }
  
// }
// let title = '<a>';
// let action = "HTML-элемент <a> определяет гиперссылку для перехода на определённое место на странице или на другую страницу в Интернете. Также он может быть использован (в устаревшем варианте) для создания якоря — это место назначения для гиперссылок внутри страницы: так ссылки не ограничены только в перемещении между страницами.";
// let attribytes = [
//    { titleOfAttr: 'download', actionOfAttr: "Этот атрибут сообщает о том, что эта ссылка должна быть использована для скачивания файла, и, когда пользователь нажимает на ссылку, ему будет предложено сохранить файл как локальный. Если у этого атрибута есть значение, оно будет использовано как заполненное название файла в Окне сохранения, которое открывается, когда пользователь нажимает на ссылку (пользователь может поменять название перед сохранением файла). Ограничений на позволенные значения нет (хотя оно будет конвертировано в нижние подчёркивания, предотвращая специфичные пути), но стоит обратить внимание, что у большинства файловых систем есть ограничения на то, какие знаки препинания поддерживаются файловой системой, и браузеры регулируют названия согласно ограничениям." },
//    { titleOfAttr: 'href', actionOfAttr: "Единственный обязательный атрибут для определения ссылки в HTML4, но больше необязательный в HTML5. Упущение этого атрибута создаёт ссылку-заполнитель. Атрибут href указывает ссылку: либо URL, либо якорь. Якорь — это название после символа #, который указывает на элемент (ID (en-US)) на текущей странице. URL не ограничены только ссылками на HTTP, они могут использовать любой протокол, поддерживающийся браузером. Например, file, ftp и mailto работают в большинстве браузеров." },
//    {titleOfAttr: 'ping', actionOfAttr: "Этот атрибут уведомляет указанные в нём URL, что пользователь перешёл по ссылке."},
// ];

// let a = new Tag(title, action, attribytes);
// console.log(a);

// let title1 = '<h1>';
// let action1 = "HTML-элементы <h1>–<h6> представляют собой 6 уровней заголовков секций. <h1> это наибольший заголовок и<h6> - наименьший";
// let attribytes1 = [
//    { titleOfAttr: 'style', actionOfAttr: "Содержит описание стилей CSS, которые должны быть применены к элементу. Учтите, что рекомендуется определять стили в отдельном файле или файлах. Этот атрибут, как и элемент <style>, предназначен, в основном, для оперативного применения стилей, например в целях тестирования." },
//    { titleOfAttr: 'lang', actionOfAttr: "Участвует в определении языка элемента, языка написания нередактируемых элементов или языка, на котором должны быть написаны редактируемые элементы. Содержит единственное значение в формате, определённом в документе IETF BCP47. xml:lang имеет приоритет над ним." },
//    {titleOfAttr: 'id', actionOfAttr: "Определяет идентификатор (ID), который должен быть уникален для всего документа. Он предназначен для идентификации элемента при создании ссылок на него, исполнении скриптов или применении стилей (посредством CSS)."},
// ];

// let h1 = new Tag(title1, action1, attribytes1);
// console.log(h1);

// 	- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// const car = {
//    model: '206+',
//    manufacturer: 'Peugeot',
//    year: 2011,
//    maxSpeed: 180,
//    engineCapacity: 1.4,
//    drive: function () {
// console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//    },
//    info: function () {
//       if (this.driver) {
//          console.log(`
//       model : ${this.model}
//       manufacturer : ${this.manufacturer}
//       year : ${this.year}
//       maxSpeed : ${this.maxSpeed}
//       engineCapacity : ${this.engineCapacity}
//       driver : ${this.driver.name}
//          `);
//       } else {
//                console.log(`
//       model : ${this.model}
//       manufacturer : ${this.manufacturer}
//       year : ${this.year}
//       maxSpeed : ${this.maxSpeed}
//       engineCapacity : ${this.engineCapacity}
//          `);
//          }
//    },
//    	increaseMaxSpeed: function (newSpeed) {
// 		this.maxSpeed += newSpeed;
// 	},
// 	changeYear: function (newValue) {
// 		this.year = newValue;
// 	},
// 	addDriver: function (driver) {
//       this.driver = driver;
// 	}
	
// };
// let driver = {
//    name: "Serhii Anatoliiyovych",
//    age: 33
// }

// car.drive();
// car.info();
// car.changeYear(2021);
// car.addDriver(driver);
// car.increaseMaxSpeed(100);
// car.info();

// ==============================================
// 	- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// let driver = {
//    name: "Serhii Anatoliiyovych",
//    age: 33
// }

// function Car(model,
//    manufacturer,
//    year,
//    maxSpeed,
//    engineCapacity) {
      
//       this.model = model || '206+';
//       this.manufacturer = manufacturer || 'Peugeot';
//       this.year = year || 2011;
//       this.maxSpeed = maxSpeed || 180;
//       this.engineCapacity = engineCapacity || 1.4;
//       this.drive = function () {
// console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//    },
//          this.info = function () {
//       if (this.driver) {
//          console.log(`
//       model : ${this.model}
//       manufacturer : ${this.manufacturer}
//       year : ${this.year}
//       maxSpeed : ${this.maxSpeed}
//       engineCapacity : ${this.engineCapacity}
//       driver : ${this.driver.name}
//          `);
//       } else {
//                console.log(`
//       model : ${this.model}
//       manufacturer : ${this.manufacturer}
//       year : ${this.year}
//       maxSpeed : ${this.maxSpeed}
//       engineCapacity : ${this.engineCapacity}
//          `);
//          }
//       },
//       this.increaseMaxSpeed = function (newSpeed) {
// 		this.maxSpeed += newSpeed;
// 	},
// 	this.changeYear = function (newValue) {
// 		this.year = newValue;
// 	},
// 	this.addDriver = function (driver) {
//       this.driver = driver;
// 	}
// }

// let car = new Car();
// car.drive();
// car.info();
// car.changeYear(2021);
// car.addDriver(driver);
// car.increaseMaxSpeed(100);
// car.info();


// 	- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// let driver = {
//    name: "Serhii Anatoliiyovych",
//    age: 33
// }

// class Car {
//    constructor(model,
//       manufacturer,
//       year,
//       maxSpeed,
//       engineCapacity) {

//       this.model = model || '206+';
//       this.manufacturer = manufacturer || 'Peugeot';
//       this.year = year || 2011;
//       this.maxSpeed = maxSpeed || 180;
//       this.engineCapacity = engineCapacity || 1.4;
//    }
//    drive () {
//       console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//    };
//          info () {
//             if (this.driver) {
//                console.log(`
//       model : ${this.model}
//       manufacturer : ${this.manufacturer}
//       year : ${this.year}
//       maxSpeed : ${this.maxSpeed}
//       engineCapacity : ${this.engineCapacity}
//       driver : ${this.driver.name}
//          `);
//             } else {
//                console.log(`
//       model : ${this.model}
//       manufacturer : ${this.manufacturer}
//       year : ${this.year}
//       maxSpeed : ${this.maxSpeed}
//       engineCapacity : ${this.engineCapacity}
//          `);
//             }
//       };
//          increaseMaxSpeed(newSpeed) {
//             this.maxSpeed += newSpeed;
//       };
//       changeYear(newValue) {
//             this.year = newValue;
//       };
//          addDriver(driver) {
//             this.driver = driver;
//          };
//    }


// let car = new Car('Renault', 'France', 2022, 220, 1.6);
// car.drive();
// car.info();
// car.changeYear(2021);
// car.addDriver(driver);
// car.increaseMaxSpeed(100);
// car.info();


// ==============================================
// 	-створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допомогою циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

// class Human {
//    constructor(name, age) {
//       this.name = name || 'No Name';
//       this.age = age || 'No Age';
//    }
// }

// class Cinderella extends Human {
//    constructor(name,
//       age,
//       footSize
//    ) {
//       super(name, age);
//       this.footSize = footSize || 'No FootSize';
//    }
// }
//    class Prince extends Human {
//    constructor(name,
//       age,
//       shoeSize
//    ) {
//       super(name, age);
//       this.shoeSize = shoeSize || 'No ShoeSize';
//       }
//       findCinderell(array) {
//          let find = null;
//          for (const item of array) {
//             if (item.footSize === this.shoeSize) {
//                find = item;
//             }
//          }
//          if (find) {
//             console.log("My cinderell " + find.name);
//          } else {
//             console.log("I don't find my cinderell");
//          }
//       }
// }


// let cinderella1 = new Cinderella('Nadiia', 18, 36);
// let cinderella2 = new Cinderella('Oksana', 19, 37);
// let cinderella3 = new Cinderella('Olena', 20, 38);
// let cinderella4 = new Cinderella('Yaryna', 21, 39);
// let cinderella5 = new Cinderella('Nastia', 22, 40);
// let cinderella6 = new Cinderella('Liliya', 23, 41);
// let cinderella7 = new Cinderella('Daryna', 24, 42);
// let cinderella8 = new Cinderella('Anya', 25, 43);
// let cinderella9 = new Cinderella('Nataliia', 26, 44);
// let cinderella10 = new Cinderella('Mariia', 27, 45);

// let arrayCinderells = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10];

// let prince = new Prince('Serhii', 33, 36);
// prince.findCinderell(arrayCinderells);

// ==============================================
// 	-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

// function Cinderella(name, age, footSize) {
//    this.name = name || 'No Name';
//    this.age = age || 'No Age';
//    this.footSize = footSize || 'No FootSize';
// }

// let cinderella1 = new Cinderella('Nadiia', 18, 36);
// let cinderella2 = new Cinderella('Oksana', 19, 37);
// let cinderella3 = new Cinderella('Olena', 20, 38);
// let cinderella4 = new Cinderella('Yaryna', 21, 39);
// let cinderella5 = new Cinderella('Nastia', 22, 40);
// let cinderella6 = new Cinderella('Liliya', 23, 41);
// let cinderella7 = new Cinderella('Daryna', 24, 42);
// let cinderella8 = new Cinderella('Anya', 25, 43);
// let cinderella9 = new Cinderella('Nataliia', 26, 44);
// let cinderella10 = new Cinderella('Mariia', 27, 45);

// let arrayCinderells = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10];

// function Prince(name, age, shoeSize) {
//    this.name = name || 'No Name';
//    this.age = age || 'No Age';
//    this.shoeSize = shoeSize || 'ShoeSize';
//    this.findCinderell = function (array) {
//         let find = null;
//          for (const item of array) {
//             if (item.footSize === this.shoeSize) {
//                find = item;
//             }
//          }
//          if (find) {
//             console.log("My cinderell " + find.name);
//          } else {
//             console.log("I don't find my cinderell");
//          }
//    }
// }

// let prince = new Prince('Serhii', 33, 36);
// prince.findCinderell(arrayCinderells);
