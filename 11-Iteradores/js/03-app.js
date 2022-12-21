//Fizz buzz - 100 numeros

// 3 6 9 12.. multiplos de 3 fizz
// 5 10 15 20.. multiplos de 5 buzz
// 15 30 45 multiples de ambos FizzBuzz

for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log(`${i} FizzBuzz`);
  } else if (i % 3 === 0) {
    console.log(`${i} Fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i} Buzz`);
  }
}
