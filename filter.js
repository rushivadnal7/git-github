let ages = [ 18 , 17 , 77, 2,3,4,5,6];

let badeLog = ages.filter(checkage);
console.log(badeLog)

function checkage(x){
    return x >=18;
}