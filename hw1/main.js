let bananas = 15.678;
let kivi = 123.965;
let  apples = 90.2345;




let massive = [bananas, kivi, apples]; //створюємо масив

console.log(Math.max(...massive)); //виводимо максимальне і мінімальне число із масиву
console.log(Math.min(...massive));
        
let sum = bananas+kivi+apples; //вивести суму із 3х товарів
console.log(sum);

bananas = Math.floor(bananas); //округелння
kivi = Math.floor(kivi);//округелння
apples = Math.floor(apples);//округелння

sum = bananas+kivi+apples; //сума округлення
 
console.log(sum);