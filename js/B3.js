document.getElementById("btn3").onclick= function(){
    var n = +document.getElementById("ip3").value;
    var tich = 1;
    for(i = 1; i <= n; i++){
        tich *= i;
    }
    document.getElementById("p3").innerHTML = `Kết quả: ${tich}`;
}