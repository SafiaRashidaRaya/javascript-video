let nilai = [
  { nama: "Lynn", ipa: 100, bahasa: 90, matematika: 100 },
  { nama: "Nox", ipa: 99, bahasa: 10, matematika: 100 },
  { nama: "Leste", ipa: 90, bahasa: 100, matematika: 82 },
  { nama: "Krono", ipa: 80, bahasa: 80, matematika: 100 },
];

let nama = ["Lynn", "Nox", "Leste", "Krono"];
// nama.push("Aren", "Lewis");

// nama.unshift("Ynx");

// console.log(nama.slice(0, 3));

let mapel = ["ipa", "bahasa", "matematika"];

// console.log(nama.concat(mapel));

// console.log(nama.concat(["ips", "pkn", "sejarah"]));

// console.log(nama.splice(3,2));

// console.log(nama.shift());

// console.log(nama.pop());

// console.log(nilai[0].nama);
// console.log(nama);

// nama.forEach(function (a){
//     console.log(a);
// })

// nama.forEach((a) => console.log(a));

// nilai.filter(function (a) {
//   if (a.ipa >= 90) {
//     console.log(a.nama);
//   }
// });

// nilai.filter((a) => (a.ipa >= 90 && a.matematika >= 90 ? console.log(a.nama) : null));

// let siswa = nilai.map(function(a){
//   return a.nama;
// });

// let siswa = nilai.map(a => return a.matematika, a.nama);

// console.log(siswa);

// mapel.sort();

// console.log(mapel);

// let hasil = nilai.reduce(function(a, b){
//   return (a= a+b.ipa);
// }, 0)

let hasil = nilai.reduce((a, b) => return(a+=b.matematika), 0)

console.log(hasil);