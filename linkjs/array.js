let tampil = function () {
  return "Tampilkan";
};

let kucing = [
  "hitam",
  "putih",
  "coklat",
  1547,
  tampil(),
  (arrow = () => "Return arrow function"),
  function () {
    return "Hai.";
  },
];

console.log(kucing);

console.log(kucing[2]);

for (let i in kucing) {
  console.log(kucing[i]);
}

console.log(kucing[5]());

console.log(kucing[6]());
