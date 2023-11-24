var n = 1;
var s = 0;
while(s < 10000){
    s = s + n;
    n++;
}

document.getElementById("tong").innerHTML = `Tổng: ${s}`;
document.getElementById("so").innerHTML = `Số nguyên dương nhỏ nhất là: ${n} `;