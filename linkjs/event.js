function show(a){
    a = document.querySelector("p").innerText = "Ini event js. " + a;
    console.log("Ini event js");
}

ha2.onclick = function(){
    document.querySelector(".isi").innerText = "Ini isi";
}