var arr = [];
function Nhap(){
    var vl = document.getElementById("numBer").value;  
    if(vl == null || vl == 0){
        alert("Nhập số đi mày, bị dở hơi à");
    }
    else{
        vl = parseInt(vl);
        arr.push(vl);
        document.getElementById("numBer").value = "";
    }
}

function xuLi(){
        var res = "Đây là số chẳn: ";
        for(let i = 0; i < arr.length; i++){
            if(arr[i] % 2 == 0){
                res += arr[i] + " ";
            }
        }
        res += '<br>';
        res += "Đây là số lẻ: ";
        for(let i = 0; i < arr.length; i++){
            if(arr[i] % 2 != 0){
                res += arr[i] + " ";
            }
        }
        res += '<br>';
        var sum = 0;
        res += "Tổng phần tử của mảng: ";
        for(let i = 0; i < arr.length; i++){
            sum += arr[i];
        }
        res += sum;
        res += '<br>';
        res += "Số lớn nhất trong mảng: " + Math.max(...arr);

        res += '<br>';
        res += "Đây là số nguyên tố: ";
        for(let i = 0; i < arr.length; i++){
            if(isPrime(arr[i])) res += arr[i] + " ";
        }
        res += '<br>';
        res += "Đây là mã màu tương ứng với số thích hợp " +
            "để tạo được màu trong phần tử"
        document.getElementById("kq").innerHTML = res;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] >= 0 && arr[i] < 1000000){
                var div = document.createElement("div");
                div.style.width = "80px";
                div.style.height = "20px";
                div.style.background = taoChuoi(arr[i]);
                div.style.color = "white";
                div.innerHTML = taoChuoi(arr[i]);
                document.getElementById("kq2").appendChild(div);
            }
        }

}

function isPrime( n){
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0) return 0;
    }
    return 1;
}

function taoChuoi( n){
    var res = "#";
    let len = n.toString().length;
    for(; len <= 5; len++){
        res += '0';
    }
    res += n;
    return res;
}