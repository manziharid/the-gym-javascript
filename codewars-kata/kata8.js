function solution(numbers){
    let total = 0;
    if (numbers < 0){
            return 0;
        }
    for(let i=0; i<numbers; i++){
        if(i % 3==0 || i % 5==0){
            total +=i;
        }
       
    }
     return total;
    
}
console.log(solution(10));