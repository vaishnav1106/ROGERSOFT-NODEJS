
// let num = prompt("Enter the number: ");
let num=5;
let prime=true;

if (num===1)
{
   console.log("NoPrime");
}

else if (num > 1)
{
    for (let i=2; i < num ; i++)
    {
        if (num % i == 0)
        {
            prime=false;
            break;
        }
    }

    if (prime)
    {
        console.log(`${num} is a prime number`)
    } 
    else
    {
        console.log(`${num} is not a prime number`)
    }
}
else
{
    console.log("The number is not a prime number" )
}





