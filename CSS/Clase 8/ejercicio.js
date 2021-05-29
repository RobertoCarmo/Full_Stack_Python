function printSum(x) {
    var sum = 0;
   if (x>0)
    for (sum=0; sum<x; sum++){
        console.log(sum); 
   }
   
    return sum;
}
y = printSum(255); 
console.log(y);