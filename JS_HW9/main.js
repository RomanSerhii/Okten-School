// Зробити свій розпорядок дня.

// Мають бути функції, які є асинхронними(мають сетТаймАут або сетІнтервал),
//    які описують якусь вашу дію в день.

// Наприклад функція прокинутись триває 1с, поїсти 0.5с, доїхати до роботи 2с, пообідати 2с.

// Зробити таких функції в районі 10шт.Функція має приймати параметр,
//    який буде відповідати за успішне чи неуспішне виконання.
// Далі виконати їх в тій послідовності в якій ви виконуєте їх
// у свій звичайний день.

//    Тобто, як приклад:
// Прокинулись - Поснідали - Зібрались - Поїхали на роботу -
//    Працюєте - Пообідали - Працюєте - Випили кави - Працюєте -
// Поїхали додому - Повчились - Лягли спати.

let chance = 0.1;

function dayBySerhii(message) {
   return new Promise((resolve, reject) => {
      setTimeout( () => {
         Math.random() > chance
            ? resolve(message)
            : reject('Overslept') // Проспав
      }, 2000)
   })
}

function breakfast(breakF) {
   console.log('07:10 - Time for eat my breakfast');
   return new Promise((resolve, reject) => {
      setTimeout( () => {
         Math.random() > chance
            ? resolve(breakF)
            : reject('There is no food') 
      }, 2000)
   })
}

function toWay(goToWork) {
   console.log('07:40 - Go to work');
   return new Promise((resolve, reject) => {
      setTimeout( () => {
         Math.random() > chance
            ? resolve(goToWork)
            : reject("It's raining") 
      }, 2000)
   })
}

function work(hardWorking) {
   console.log('08:30 - You must hard work');
   return new Promise((resolve, reject) => {
      setTimeout( () => {
         Math.random() > chance
            ? resolve(hardWorking)
            : reject("There is no light") 
      }, 2000)
   })
}

function coffeeBreak(typeOfCoffee) {
   console.log('10:00 - Time for coffee');
   return new Promise((resolve, reject) => {
      setTimeout( () => {
         Math.random() > chance
            ? resolve(typeOfCoffee)
            : reject("There is no coffee") 
      }, 2000)
   })
}

function lunch(lunch) {
   console.log('13:00 - Time for eat my lunch');
   return new Promise((resolve, reject) => {
      setTimeout( () => {
         Math.random() > chance
            ? resolve(lunch)
            : reject('There is no food') 
      }, 2000)
   })
}

function goHome(goToHome) {
   console.log('17:00 - Go to home');
   return new Promise((resolve, reject) => {
      setTimeout( () => {
         Math.random() > chance
            ? resolve(goToHome)
            : reject("Traffic jams") 
      }, 2000)
   })
}

function dinner(dinner) {
   console.log('18:00 - Time for eat my dinner');
   return new Promise((resolve, reject) => {
      setTimeout( () => {
         Math.random() > chance
            ? resolve(dinner)
            : reject('There is no food') 
      }, 2000)
   })
}

function goToStudy(study) {
   console.log('20:00 - Time for study');
   return new Promise((resolve, reject) => {
      setTimeout( () => {
         Math.random() > chance
            ? resolve(study)
            : reject('There is no light') 
      }, 2000)
   })
}

function goToSleep(sleep) {
   console.log('00:00 - Time for sleep');
   return new Promise((resolve, reject) => {
      setTimeout( () => {
         Math.random() > chance
            ? resolve(sleep)
            : reject("I can't sleep") 
      }, 2000)
   })
}

dayBySerhii('07:00: Alarm clock') 
   .then( (result) => {
      console.log(result);
      return breakfast('07:20: Coffee with waffles')
   })
   .then( (result) => {
      console.log(result);
      return toWay('07:45 - Get in the car')
   })
   .then( (result) => {
      console.log(result);
      return work('08:30 - Hard work')
   })
     .then( (result) => {
      console.log(result);
      return coffeeBreak('10:05 - Cappuccino')
     })
     .then( (result) => {
      console.log(result);
      return work('10:30 - Hard work')
     })
      .then( (result) => {
      console.log(result);
      return lunch('13:00 - Eat toast with bacon and mushroom soup')
      })
    .then( (result) => {
      console.log(result);
      return work('13:30 - Hard work')
    })
      .then( (result) => {
      console.log(result);
      return goHome('17:10 - Get in the car')
      })
      .then( (result) => {
      console.log(result);
      return dinner('18:00 - Eat bulgur with chicken and salad')
      })
       .then( (result) => {
      console.log(result);
      return goToStudy('20:00 - Recap of the js lecture')
       })
       .then( (result) => {
      console.log(result);
      return goToSleep('00:00 - Good night')
       })
        .then( (result) => {
      console.log(result);
        })
   .catch(error => {
          console.log('error', error);
       })
      
     