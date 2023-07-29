let tipamount , tipper , total , x;
function calc(food , tip){
   tipper = tip / 100;
   tipamount = food * tipper 
    total = sum(food , tipamount)
    return total
}

console.log(calc(100,20))

function sum(a , b){
    return a + b;
}