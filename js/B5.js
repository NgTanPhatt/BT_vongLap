document.getElementById("btn5").onclick=function(){
    var n = +document.getElementById("ip5").value;
    for(i = 2; i <= n; i++){
        dem = 0;
        for(j = 2;j <= i/2; j++){
            if(i % j == 0){
                dem++;
            }
        }        
        if(dem == 0){
            return("")
        }
    }
    document.getElementById("p5").innerHTML =`  Kết quả: ${dem}`
}