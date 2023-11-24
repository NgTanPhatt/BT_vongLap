document.getElementById("btn2").onclick= function(){
    var x = +document.getElementById("ip21").value;
    var n = +document.getElementById("ip22").value;
    var luyThua = 1;
    var s = 0;
    for(i = 1; i <= n; i++){
        luyThua = luyThua * x;
        s += luyThua;
    }
    document.getElementById("p2").innerHTML = `Kết quả: ${s}`;
}