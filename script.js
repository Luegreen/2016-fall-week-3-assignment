/**
 * Created by siqi on 9/21/16.
 */

/* Step 1
 * Create objects to represent individual shoe products with the following attributes:
 * name, price, maker
 * if price is a range, use the upper end of that range
 * and add them to the "productList" array using array.push()
 */
//Your code here
//Hint: productList.push(newObject) will add the object you just created to the array

var productList = []; //this is an array

var jacckshibo = {
    name : "CG",
    price: 32.99,
    maker : "Jackshibo"
};

var champion = {
    name : "Gusto",
    price: 39.97,
    maker : "Champion"
};

var puma = {
    name: "Suede Classic",
    price: 168.32,
    maker: "Puma"
};
productList.push(jacckshibo, champion, puma);


//console.table(productList);

/* Step 2
 * Iterate (or go through) productList one by one using the for loop
 * and for each product, if the price is below $50, console.log a message like below
 * "The product [name] costs [price], and is a match"
 */
/*console.log(jacckshibo.price)
console.log(productList[0].price)
console.log(productList[1].price)
console.log(productList[2].price)*/

for(var i=0; i<productList.length; i++){
    
/*    console.log(productList[i]);
    console.log(productList[i].price);*/
     
    if (productList[i].price <= 50){
        console.log("These "+ productList[i].name +"sneakers costs $" + productList[i].price +". Under $50!\r\nBUY Them NO MATTER WHAT! Doesn't matter whether or not you like them. \r\nMORE STUFF, CHEAP!")
    
    }else if (productList[i].price>50){
    console.log("These " +productList[i].name + " sneakers are too expensive! \r\nNO WAY, doesn't matter how much you love them.")
    }

    console.log();
}

/* Step 3
 * What is the average price of all the products?
 */

//3.1 first, calculate total price using the for loop again


var sum = 0
    for(var i=0; i<productList.length; i++){
        sum += productList[i].price;
    };
//console.log(sum)
    
//3.2 then, divide total price by the number of products, using proudctList.length

var avg = (sum/productList.length)
console.log("The average price is: $"+(avg.toFixed(2)))

/* Step 4
 * Write a function that accept a single argument, price
 * so that the function returns the number of products below that price
 */

function comparePrice(p){

    var numOfMatchingProducts = 0;
    for(var i=0; i<productList.length; i++){
    if (productList[i].price < p){
    numOfMatchingProducts++;
    } 
   
 }
    //Your code here

    return numOfMatchingProducts;
}

//
console.log("The number of products below $10 is " + comparePrice(10));
console.log("The number of products below $50 is " + comparePrice(50));
