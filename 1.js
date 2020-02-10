let a ="";
let i = "";
    function gonder(){
        i=--i;
        let b = document.getElementById("input1").value;
        if( a == 0 ){document.getElementById("span").innerText = `Səviyyə seç və ədəd daxil edin!!!`}
        else if( b == 0){document.getElementById("span").innerText = `Ədəd daxil edin!!!`;
        i=++i;}
        else if( a == b){document.getElementById("span").innerText = 'TAPDINIZ!!!'}
        else if( i==0 ){document.getElementById("span").innerText = `UDUZDUNUZ!!!`}
        else if( b < a ){document.getElementById("span").innerText = `Daxil edilen  kicikdir ${i}cehd qaldi`}
        else{ document.getElementById("span").innerText = `Daxil edilen  boyukdur ${i}cehd qaldi`  }
        if(i==0){document.getElementById("b1").disabled= true}
        else{ document.getElementById("b1").disabled=false}
}


function sec1(){
    document.getElementById("span2").innerText =`1-10 arası ədəd daxil et 3 şansın var`;
    i = document.getElementById("b2").value;
    a =  Math.floor(Math.random() *10);
    
}

function sec2(){
    document.getElementById("span2").innerText =`1-25 arası ədəd daxil et 5 şansın var`;
    i = document.getElementById("b3").value;
    a =  Math.floor(Math.random() *25);
    
}

      