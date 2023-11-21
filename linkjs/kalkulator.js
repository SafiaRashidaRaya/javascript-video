let btn = document.querySelectorAll(".btn-angka > button");
let tampil = document.querySelector("#show");
let mat = document.querySelectorAll(".btn-mat > button");
let pilihan = null;
let x;
let y;

// console.log(mat);

// tampil.value = btn[8].innerHTML;

// console.log(btn[9].innerHTML);

for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function(){
        // console.log(btn[i].innerHTML);
        if (tampil.value == "0") {
            tampil.value = btn[i].innerHTML;
        } else {
            tampil.value += btn[i].innerHTML;    
        }
    }    
}

mat[0].onclick = function(){
    tampil.value = "0";
    pilihan = null;
}

mat[1].onclick = function(){
    pilihan = "tambah";
    x = tampil.value;
    tampil.value = "0";
}

mat[2].onclick = function(){
    pilihan = "kurang";
    x = tampil.value;
    tampil.value = "0";
}

mat[3].onclick = function    pilihan = "kali";
    x = tampil.value;
    tampil.value = "0";
}

mat[4].onclick = function(){
    pilihan = "bagi";
    x = tampil.value;
    tampil.value = "0";
}

mat[5].onclick = function(){
    pilihan = "sama";
    y = tampil.value;
    
    console.log(y);
}

function kalkulator(pilihan){
    if (pilihan != 0) {
        switch (pilihan) {
            case "tambah":
                hasil = parseFloat(x) + parseFloat(y);
                break;

            case "kurang":
                hasil = parseFloat(x) - parseFloat(y);                
                break;

            case "kali":
                hasil = parseFloat(x) * parseFloat(y);                
                break;

            case "bagi":
                hasil = parseFloat(x) / parseFloat(y);                
                break;

            return hasil;
        }
    }
}