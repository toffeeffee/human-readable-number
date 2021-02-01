module.exports = function toReadable (number) {
      let units = ["zero","one","two","three","four","five","six","seven","eight","nine",
    "ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
let dozens = ["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
let str;
let division;

function numberLess100(num){
    if (num<20){
        str = units[num];
    }   
    else{
        if (num%10==0){ 
            str = dozens[num/10-2];        
        }
        else{
            division= (num - num%10)/10;
            str = dozens[division-2] + ' ' + units[num%10];
        }
    }
    return(str);
};

if (number<100){numberLess100(number)}
else {
    if (number%100==0){
        str = units[number/100] + ' hundred';        
    }
    else{
        division= (number - number%100);
        str = units[division/100] + ' hundred ' + numberLess100(number%100);
    }
}
return(str);
}
