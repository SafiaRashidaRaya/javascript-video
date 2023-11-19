let fungsi = function (isi) {
  console.log("Ini adalah " + isi);
};

fungsi("konten.");

let contoh = (isi) => {
  console.log("Ini adalah " + isi);
};

contoh("kucing.");

let penambahan = function (a, b) {
  return a + b;
};

console.log(penambahan(1 + 2));

let plus = (a, b) => a + b;

console.log(plus(3, 2));

let kalidua = (a) => a * 2;

console.log(kalidua(4));

let tampilkan = () => console.log("Sudah ditampilkan.");

tampilkan();

let pbb = () => {
    console.log("baris satu");
    console.log("baris due");
    console.log("baris tiga");
}

let nilai = 79;

let ulangan = (nilai < 80) ? () => console.log("Tidak lulus."):() => console.log("Lulus.");
ulangan();


