function tinh(){
    var n = document.getElementById("numBer").value;
    if(n == null || n == 0){
        alert("Nhập số đi mày!");
    }
    else{
        n = Number(n);
        if(n > 13){
            alert("Nhập số gì lớn dữ ông già");
        }
        else{
            var sum = 0;
            var arr = [];
            var used = [];
            for(let i = 0; i < n; i++){
                var vl = Math.floor(Math.random() * 20);;
                while(used[vl]){
                    vl = Math.floor(Math.random() * 20);
                }
                used[vl] = 1;
                sum += vl;
                arr.push(vl);
            }
            document.getElementById("mang").innerHTML = arr;
            document.getElementById("maxNum").innerHTML = Math.max(...arr);
            document.getElementById("minNum").innerHTML = Math.min(...arr);
            document.getElementById("sum").innerHTML = sum;
        }
    }
}