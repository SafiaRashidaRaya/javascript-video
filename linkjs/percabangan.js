if(true){
    console.log("dijalankan jika benar");
}else{
    console.log("dijalankan jika salah");
}

let nilai = 60;
let kkm = 60;
let baik = "LULUS";
let gagal = "TIDAK LULUS";
let batasatas = 100;
let batasbawah = 0;
let warning = "Nilai Salah"

if(nilai <= batasatas && nilai >= batasbawah){
     if(nilai >= kkm){
        console.log(baik);
     }else{
        console.log(gagal);
     }
}else{
    console.log(warning)
}

if (nilai >= kkm){
    console.log(baik); 
}else{
    console.log(gagal);
}