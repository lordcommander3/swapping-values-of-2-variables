var a= prompt(
    'Enter the value of a'
);
var b= prompt(
    'Enter the value of b'
);
console.log(
    `The value of a is: ${a}, The value of b is: ${b}`
);
var temp;
temp=a;
a=b;
b=temp;
console.log(
    `After swapping \n The value of a is: ${a},\n The value of b is: ${b}`
);
