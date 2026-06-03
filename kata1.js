//create function that has array as an argument and return difference of sum of number on odd index and sum of number on even index 

function different(arr){
    let result1 = arr.filter((num, index) => index % 2 !== 0);
    let a = result1.reduce((num, i) => num + i,0);
    
   let result2 = arr.filter((num, index) => index % 2 == 0);
   let b = result2.reduce((num, i) => num + i,0);
   //let diff;
   if (a > b){
       return a - b;
   }else if(b > a){
       return  b - a;
   }
   else {
       return 0;
   }
   
}
console.log(different([1,3,4,5,7]))
