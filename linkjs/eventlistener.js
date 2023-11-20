function tryout (){
    a = document.querySelector(".isi").innerHTML = "halah";
    console.log("Event listener test");
}

// ha2.addEventListener ("click", tryout);

// ha2.onmouseover = tryout;

ha2.onmouseover = function(){
    console.log("Coba function anonymous");
}