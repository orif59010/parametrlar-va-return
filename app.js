// function toliqIsm(ism , familiya) {
//     console.log(`To'liq ism: ${ism} ${familiya}`);
// }

// toliqIsm("Nodir", "Rahimov");

// function kvadratYigindisi(a, b) {
//     return a*a + b*b;
// }

// let natija = kvadratYigindisi(2, 3);
// console.log("Natija", natija);

// function raqamlarniBirlashtirish(a, b) {
//     return a.toString() + b.toString();
// }

// console.log(raqamlarniBirlashtirish(5, 8));

// function cToF(celsius) {
//     return (celsius * 9/5) + 32;
// }

// console.log("20°C =", cToF(20), "°F");

// function juftToq(son) {
//     return (son % 2 === 0) ? "Juft" : "Toq";
// }

// console.log(juftToq(7));
// console.log(juftToq(12));

// function matnUzunligi(matn) {
//     return matn.length;
// }

// console.log("Uzunlik:", matnUzunligi("Salom dunyo!"));  

// function daraja(son, daraja) {
//     return Math.pow(son, daraja);
// }

// console.log("Natija:", daraja(3, 4));

// function yoshKategoriya(yosh) {
//     if(yosh < 13) return "Bola";
//     else if(yosh < 20) return "O'smir";
//     else if(yosh < 60) return "Kattalar";
//     else return "Keksalar";
// }

// console.log(yoshKategoriya(8));
// console.log(yoshKategoriya(17));
// console.log(yoshKategoriya(35));
// console.log(yoshKategoriya(70));

// function sozlarSoni(matn) {
//     return matn.split("").length;
// }

// console.log(sozlarSoni("Men dasturlashni o'rganmoqdaman"));

function fibonacci(n) {
    if (n <= 1) return n
    return fibonacci(n - 1) + fibonacci(n - 2)
}

for (let i = 0; i < 10; i += 1) {
    console.log(fibonacci(i))
}