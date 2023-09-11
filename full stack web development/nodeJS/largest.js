let num1 = 4; num2 = 5; num3 = 2;
let largest;
if (num1 >= num2 && num1 >= num3) //checking the conditon wether the num1 is greater than num2 and num3
{
    largest=num1;
}
else if (num2 >= num1 && num2 > num3) //checking the conditon wether the num2 is greater than num1 and num3
{
    largest=num2;
}
else // if the above  condition is false then num3 is greatest
{
    largest=num3;
}

console.log ("the largest number is = ", largest)