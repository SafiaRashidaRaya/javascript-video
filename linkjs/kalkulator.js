let btn = document.querySelectorAll(".btn-angka > button");
let tampil = document.querySelector("#show");

tampil.value = btn[8].innerHTML;

// console.log(btn[9].innerHTML);

for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function(){
        // console.log(btn[i].innerHTML);
        tampil.value = btn[i].innerHTML;
    }    
}