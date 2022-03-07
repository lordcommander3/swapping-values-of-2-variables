var a=parseInt(prompt("Enter value of a"));
var b=parseInt(prompt("Enter value of b"));
console.log(
    `Before swapping \n The value of a is:${a}\nThe value of b is:${b}`
)
a=a+b;
b=a-b;
a=a-b;
console.log(
    `After swapping \n The value of a is:${a}  \n The value of b is:${b}`
)