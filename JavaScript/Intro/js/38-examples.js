// example 1
const sayilar = [2, 3, 4, 5, 10]
const yeniArray = sayilar.map(deger => (deger * 2))

console.log(sayilar);
console.log(yeniArray);

// example 2
const maaslar = [ 1100, 13000, 2500, 4500, 1500, 25000, 2000 ];
const yeniMaaslar = maaslar.map(e=>(
    e > 3000 ? e * 1.15 : e * 1.25)
);

console.log( yeniMaaslar );

