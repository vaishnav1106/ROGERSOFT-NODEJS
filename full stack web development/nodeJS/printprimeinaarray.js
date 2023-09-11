

// Function to check if a number is prime
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Array to store prime numbers

let prime = [];

// Finding prime numbers from 1 to 100 and storing them in the array
for (let i = 1; i <= 100; i++) {
  if (isPrime(i)) {
    prime.push(i);
  }
}

// Printing the prime numbers

console.log(prime);



