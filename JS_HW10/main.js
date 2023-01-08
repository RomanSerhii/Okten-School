function userCard(number) {
   let balance = 100;
   let transActionLimit = 100;
   const historyLogs = [];
   let key = number <= 3
      ? number
      : 'Key not valid'

   function getCardOptions() {
      return {
         key,
         balance,
         transActionLimit,
         historyLogs 
      }
   }

   function addHistory(operationType, credits, operationTime) {
   historyLogs.push({operationType, credits, operationTime})
}

   function putCredits(credit) {
      let now = new Date();
      let date = now.toLocaleDateString();
      let time = now.toLocaleTimeString();
      if (credit > 0) {
         balance += credit;
         addHistory('putCredits', credit, date + ' ' + time);
      }
   }

   function takeCredits(credit, typeOperation) {
       let now = new Date();
      let date = now.toLocaleDateString();
      let time = now.toLocaleTimeString();
      if (credit <= transActionLimit && credit <= balance) {
         balance = +(balance - credit).toFixed(2);
         typeOperation
            ? addHistory(typeOperation, credit, date + ' ' + time)
            : addHistory('takeCredits', credit, date + ' ' + time)
         return true
      } else {
         console.log("Error in takeCredits");
      }
         return false
   }

   function setTransActionLimit(number) {
      let now = new Date();
      let date = now.toLocaleDateString();
      let time = now.toLocaleTimeString();
      if (number > 0) {
         transActionLimit = number;
         addHistory('setTransActionLimit', number, date + ' ' + time);
      }
   }

   function transferCredits(sum, card) {
//       let now = new Date();
//       let date = now.toLocaleDateString();
//       let time = now.toLocaleTimeString();
      let credit = +(sum * 1.005).toFixed(2);
      let check = takeCredits(credit, 'transferCredits');
      check
         ? card.putCredits(sum)
         : ""
   }
   function getKey() {
      return key;
}
   return {
      getCardOptions,
      putCredits,
      takeCredits,
      setTransActionLimit,
      transferCredits,
      getKey
   }
}

// const userCard1 = new userCard(1)
// const userCard2 = new userCard(2)
// // userCard1.putCredits(120);
// // userCard1.setTransActionLimit(200);
// // userCard1.takeCredits(200);
// userCard1.transferCredits(80, userCard2)
// console.log(userCard1.getCardOptions());
// console.log(userCard2.getCardOptions());

class UserAccount{
   constructor(name) {
      this.name = name;
      this.cards = [];
   }
}
UserAccount.prototype.addCard = function () {
   if (this.cards.length < 3) {
      this.cards.push(new userCard(this.cards.length+1))
   } else {
      console.log('cards limit over');
   }
}
UserAccount.prototype.getCardByKey = function (number) {
   return this.cards.find(value => value.getKey() === number)
}
let user1 = new UserAccount('Vova');
let user2 = new UserAccount('Tanya');
user2.addCard();
user2.addCard();
user1.addCard();
user1.addCard();
user1.addCard();
console.log(user1);
const user1Card1 = user1.getCardByKey(1);
const user2Card1 = user2.getCardByKey(1);
if (user1Card1) {
   console.log(user1Card1.getCardOptions());
}
user1Card1.putCredits(1500);
user1Card1.setTransActionLimit(1000);
user1Card1.transferCredits(500, user2Card1);
console.log('------------------');
console.log(user2Card1.getCardOptions());
