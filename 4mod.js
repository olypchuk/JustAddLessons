
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.potions) ;

// Просим клиента подтвердить бронь на отель
// и сохраняем в переменную результат работы confirm

// const countries = [
//   "Ukraine",
//   "Poland",
//   "Croatia",
//   "Montenegro",
//   "France",
//   "USA",
// ];

// const countriesPrice = [100, 200, 300, 400, 500, 600];
// const login = prompt("enter login");
// const password = prompt("take password");

// function check() {
//   if (login === "admin" && password === "adad") {
//     alert("welldone");

//   }
// }
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName,onSuccess,onError) {
//     // let pizza =this.pizzas.includes(pizzaName);
//     for (const pizza of this.pizzas) {
//       console.log(pizza===pizzaName);
//          if (pizza===pizzaName) {
//       onSuccess(pizzaName);
//       return
//       }
//           onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//     }
//    },
  
// };

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName,onSuccess,onError) {
//     for (const pizza of this.pizzas) {
//       // console.log(pizza);
//       // console.log(pizzaName);
//       if(pizza===pizzaName){
        
      
//         return  onSuccess(pizzaName);
//         }
      
//     }
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//   },
// };
// Change code above this line


// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
// orderedItems.forEach(function (number,index) {
//     totalPrice += number;
//     }
//   )
// console.log(totalPrice);
//   // Change code above this line
//   return totalPrice;
// }
// console.log(calculateTotalPrice[1,4,6,8]);

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach(function (number,i){
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   })

//   // Change code above this line
//   return filteredNumbers;
// }
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(function (array,i) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   })

//   return commonElements;
//   // Change code above this line
// }
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(function (array,i) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   })

//   return commonElements;
//   // Change code above this line
// }


// function changeEven(numbers, value) {
//   // Change code below this line
// let newArray=[]
//   numbers.forEach((number, i) => {

//    if (number % 2 === 0) {
//      number = number + value;
     
//     }
//       newArray.push(number);
// });
//   return newArray
//   // Change code above this line
// }
// console.log(changeEven([1, 22, 23, 4, 5], 10));
// const getUserNames = users => {
//    return  users.map(names=>names.name)

//   };
// const getUserEmails = users => {
//     return users.map(mail=>mail.email)

//   };
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number=>number%2===0);
// const oddNumbers = numbers.filter(number=>number%2!==0);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(genre => genre.genres);
// console.log(allGenres);
// const uniqueGenres = allGenres.filter(
//     (genre, index, newArrayGenres) => newArrayGenres.indexOf(genre) === index);
//     console.log();
//     console.log(uniqueGenres);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);

// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const getUsersWithEyeColor = (users, color) => {
//    const trueColor= users.filter(user => user.eyeColor === color);
//     console.log(trueColor);
//     return trueColor

// };
// console.log(getUsersWithEyeColor(users));

// const getUsersWithAge = (users, minAge, maxAge) => {
//  return users.filter(({age})=>age>=minAge&&age<=maxAge);

// };
// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let i = 0; i< order.length; i += 1) {
//       console.log(order[i]);
   
       
//       total += order[i];
// }
//   // Change code above this line
//   return total;
// }
// // function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//     for (const orde of order) {
//         total += orde;
// }
//   // Change code above this line
//   return total;
// }


// function findLongestWord(string) {
//     let array = string.split(' ');
//     let longWord = array[0];
//     for (const el of array) {
//         if (el.length > longWord.length) {
//             longWord = el;
//        }
//     }
//     return longWord

// }

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for(i = min; i <= max ; i += 1){
//     numbers.push(i)

// }
//   // Change code above this line
//   return numbers;
// }
// function filterArray(numbers, value) {
//   // Change code below this line
//   let result = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//     console.log(numbers.length);
//       result.push(numbers[i]);
    
//     }
      
//  }return result
// }

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

//  students.filter(student => student.score >= HIGH_SCORE);
// console.log(students.filter(student => student.score >= HIGH_SCORE)); // Массив объектов с именами Манго и Киви

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Массив с одним объектом Аякс

// // В коллбек-функции удобно деструктуризировать свойства объекта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Массив объектов с именами Поли и Хьюстон


// const users=[
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]
// const getUsersWithFriend = (users, friendName) => {
//  return  users.filter(user=>user.friends.includes(friendName))
// };
// console.log(getUsersWithFriend(users,"Briana Decker"));
// const getFriends = users => {
//   const allUsers = users.flatMap(user => user.friends);
//   const filterUsers= allUsers.filter((user,index,array)=>index===array.indexOf(user))
//   return filterUsers
// };
// console.log(getFriends(users));
// const getActiveUsers = users =>  users.filter(user=>user.isActive===true)
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book=>book.title===BOOK_TITLE)
// const bookByAuthor = books.find(book => book.author === AUTHOR);
// const getUserWithEmail = (users, email) => users.find(user => user.email === email);
// const eachElementInFirstIsEven = firstArray.every(el=>el%2===0);
// const eachElementInFirstIsOdd = firstArray.every(el => el % 2 !== 0);
// const isEveryUserActive = (users) => {
//    return users.every(user=>user.isActive===true)||
// users.every(user=>user.isActive===false)
// };

// const isAnyUserActive = users => users.some(user => user.isActive) ? true : false
// const totalPlayTime = playtimes.reduce((value,howMuch)=>value+howMuch);


// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: "Манго",
// };
// const poly = {
//   username: "Поли",
// };

// greetGuest.call(mango, "Добро пожаловать"); // Добро пожаловать, Манго.
// greetGuest.call(poly, "С приездом"); // С приездом, Поли.
// не розумию послидовнисть/чому в greeting записуэться добро пож???????????????????????????????????????????????????????????????????????????????????????????????
// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return total +( player.playtime/player.gamesPlayed);
// },0);
// const users=[
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]
// const calculateTotalBalance =() => {
//   users.reduce((total,user)=>{
//     return total + user.balance;
//    },0)
// };
// console.log(calculateTotalBalance());



// const names = [...books]
// .filter(rating=>rating.rating>MIN_BOOK_RATING)
// .map(book=>book.author)
// .sort((a,b)=>a.localeCompare(b));
// console.log(names);

const users =[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]
// const getNamesSortedByFriendCount = users => {
//    return [...users]
//    .sort((a,b)=>a.friends.length-b.friends.length).flatMap(user=>user.name)
// };
// console.log(getNamesSortedByFriendCount(users));
// const getNamesSortedByFriendCount = users => {
//    return [...users]
//    .sort((a,b)=>a.friends.length-b.friends.length).map(user=>user.name)
// };
// console.log(getNamesSortedByFriendCount(users));

// const getSortedFriends = users => [...users]
//   .flatMap(friend => friend.friends)
//   .filter((friend,index,arr)=>arr.indexOf(friend)===index)
//     .sort((a, b) => a.localeCompare(b));
// console.log(getSortedFriends(users));

// const allTags = ['html', 'css', 'js', 'css','html', 'css', 'js', 'css', 'js'];
// const tagStats = allTags.reduce((acc, tag) => {
//   console.log(acc);
//   // console.log(tag);
//    console.log(acc[tag]);
//   if (acc[tag]) {
//     acc[tag] += 1
//     return acc
//   }
//   acc[tag] = 1;
 
//   return acc;
// }, {});
// console.log(tagStats);


const countries = [
  "Ukraine",
  "Poland",
  "Croatia",
  "Montenegro",
  "France",
  "USA",
];

const countriesPrice = [100, 200, 300, 400, 500, 600];

const loginRegistr = prompt('reg лог');
const passwordRegistr = prompt('reg пароль');
let login;
let password;
const loginization = () => {
  do {
 login = prompt('ввести лог');
password = prompt('ввести пароль');
  }while(login !== loginRegistr &&password!==passwordRegistr) 

   return  console.log('успіх!!')
}
console.log(loginization());

const sum = prompt('Скільки грошей потратиш?');

let indexCountry;
let total;
let allCountries = [];
let balance;
let trueIndex;
for (let i = 100; i <= sum; i += 100) {

  total = countriesPrice.indexOf(i);
    allCountries.push(countries[total])

}
// console.log(sum);
const chooseCountry = prompt(`Виберіть країну:${allCountries}`);

let indexPrice = allCountries.indexOf(chooseCountry);
console.log(countriesPrice[indexPrice]);
let x = countriesPrice[indexPrice];
balance = sum-x;
console.log(`Тур оплачено!!balance:${balance}`);

 

