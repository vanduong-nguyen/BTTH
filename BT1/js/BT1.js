function chuyenDoi(){
    var Cel =parseFloat( document.getElementById("doC").value);
    if(isNaN(Cel)){
        Cel=0;
    }
    var Far = Cel * (9/5) +32;
    document.getElementById("doF").innerHTML = Cel + " độ C = " + Far.toFixed(1) + " độ F";
}