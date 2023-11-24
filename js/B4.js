document.getElementById("btn-7").onclick = function(){

    var soLanDaTaoTheDiv = 0;

    var content ="";
    while(soLanDaTaoTheDiv < 10){

        content += `<div class ='px-2 bg-primary div'>The Div ${soLanDaTaoTheDiv + 1}</div>`;

        soLanDaTaoTheDiv++;

    }

    document.getElementById("kq-7").innerHTML = content;
}