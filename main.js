let test =[
'a',
'b',
'c',
'd',
];

console.log(test[1,2] + test[3]);

/* 
//multiply
var multiply = function(x, y){

    return x * y;

}
var x = 3;
var y = 4;
let wynik = multiply(x,y)
console.log(x, "multiplied with", y ," is ", wynik);


//even

var even = function(x){

    if (x%2 == 0){
        return  x + " is an even number";
    }
    else{
        return x + " is not an even number";
    }

}
var x = 3
console.log(even(x));


//adding with lenght

var add = function(...add){

    var result = 0;
    for (x = 0; x <add.length; x++){

        result = result + add[x];

    }
    return result;

}

console.log(add(1, 2, 3, 4, 5));



//display all even numbers

var even = function(...evennumbers){

    for (x = 0; x < evennumbers.length; x++){

        if (evennumbers[x]%2 == 0){
           
            if(even == undefined){
                var even = evennumbers[x];
            }
            else{
            var even = even + ", " + evennumbers[x];
            }
            
        }

    }
    return even;

}

console.log(even(1, 2, 4, 5, 5345, 234 ,12, 8));






/*function sum(a = 0 , b = 0, c = 0) {
    return a + b + c;
}

var result = sum (1,2);
console.log(result);

sum() */ 

