// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line\
//   if(ordered===0){
//     message =`There are no products in the order!`;
//   }
//   else if(ordered>available){
//     message =`Your order is too large, there are not enough items in stock!`;
//   }
//   else{
//     message=`The order is accepted, our manager will contact you`}

//   // Change code above this line
//   return message;
// }


// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   message =`The order is accepted, our manager will contact you`;
// if(ordered===0){
//   message=`There are no products in the order!`;
//   return message;
// }
// if(ordered>available){
//   message =`Your order is too large, there are not enough items in stock!`;
//   return message;
// }
//   // Change code above this line
//   return message;
// }



// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
// if(totalSpent>=50000){
//   discount = GOLD_DISCOUNT;
// }
// else if (totalSpent>=20000&&totalSpent<50000){
//   discount=SILVER_DISCOUNT;
// }
// else if(totalSpent>=5000&&totalSpent<20000){
//   discount=BRONZE_DISCOUNT;
// }
// else{
// discount=BASE_DISCOUNT;}
//   // Change code above this line
//   return discount;
// }

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line

// if(totalSpent>=50000){
//   discount = GOLD_DISCOUNT;
//   return discount;
// }
// if(totalSpent>=20000){
// discount =SILVER_DISCOUNT;
// return discount;
// }
// if(totalSpent>=5000){
//   discount = BRONZE_DISCOUNT;
//   return discount;
// }
//   // Change code above this line
// discount = BASE_DISCOUNT;
// return discount;
// }
// console.log(getDiscount(21000))

function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

 switch (type) { // Change this line
    case "starter" : // Change this line
      price = 0 ; // Change this line
      break;

    case "professional" : // Change this line
      price = 20; // Change this line
      break;

    case "organization" : // Change this line
      price = 50; // Change this line
      break;
  }

  // Change code above this line
  return price;
}
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line

switch (password) {
  case null :
    message = "Canceled by user!";
    break;
 case ADMIN_PASSWORD :
    message = "Welcome!";
    break;
   default:
    message = "Access denied, wrong password!";
  }

  // Change code above this line
  return message;
}

function getShippingCost(country) {
  let message;
  switch (country){
    case "China":
    price =100;
    message=`Shipping to ${country} will cost ${price} credits`
    break;
    case "Chile":
    price = 250;
    message =`Shipping to ${country} will cost ${price} credits`
    break;
    case "Australia":
    price =170;
    message =`Shipping to ${country} will cost ${price} credits`
    break;
    case "Jamaica":
    price = 120;
    message =`Shipping to ${country} will cost ${price} credits`
    break;
   default:
   message =`Sorry, there is no delivery to your country` ;
  }
  // Change code below this line

  // Change code above this line
  return message;
}

const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length -1];

// Change code above this line
function getSubstring(string, length) {
  const substring = string.slice(0, length) ; // Change this line

  return substring;
}




function checkStorage(available, ordered) {
  // Change code below this line
    if (ordered === 0) {
  return `Your order is empty!`;
    
  } 
   if (ordered > available) {
    return `Your order is too large, not enough goods in stock!`;
   
  } 
 return `The order is accepted, our manager will contact you`;

 
  // Change code above this line
}
console.log(checkStorage(100, 1000));

function withdraw(amount, balance) {
  // Если  условие выполняется, вызывается console.log
  // и выход из функции. Код идущий после тела if не выполнится.
  if (amount === 0) {
    console.log("Для проведения операции введите сумму больше нуля");
    return;
  }

  // Если условие первого if не выполнилось, его тело пропускается
  // и интерпретатор доходит до второго if.
  // Если условие выполняется, вызывается console.log и выход из функции.
  // Код идущий после тела if  не выполнится.
  if (amount > balance) {
    console.log("Недостаточно средств на счету");
    return;
  }

  // Если ни один из предыдущих if не выполнился,
  // интерпретатор доходит до этого кода и выполняет его.
  console.log("Операция снятия средств проведена");
}

withdraw(0, 300); // "Для проведения операции введите сумму больше нуля"
withdraw(500, 300); // "Недостаточно средств на счету"
withdraw(100, 300); // "Операция снятия средств проведена"