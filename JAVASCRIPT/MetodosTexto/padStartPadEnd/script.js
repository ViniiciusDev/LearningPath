const creditCard = "1234567812344928"
console.log(creditCard.length); // 16

// Pegamos os ultimos 4 digitos.
const lastDigits = creditCard.slice(-4)
console.log(lastDigits); // 4928

const masketNumber = lastDigits.padStart(creditCard.length, "X")
console.log(masketNumber);


