function calculateRectangleArea(){
    var Dai = parseFloat(document.getElementById("chieu_dai_hcn").value);
    var Rong = parseFloat(document.getElementById("chieu_rong_hcn").value);
    if(isNaN(Dai) || isNaN(Rong) || Dai <= 0 || Rong <= 0){
        alert("Sai thông tin HÌNH CHỮ NHẬT \nVUI LÒNG NHẬP LẠI");
    }
    let result = Dai * Rong;
    document.getElementById("dien_tich_hcn").value = result;
}
function calculateTriangleArea(){
    var Day = parseFloat(document.getElementById("day_tg").value);
    var Cao = parseFloat(document.getElementById("cao_tg").value);
    if(isNaN(Day) || isNaN(Cao) || Day <= 0 || Cao <= 0){
        alert("Sai thông tin HÌNH TAM GIÁC \nVUI LÒNG NHẬP LẠI");
    }
    let result = (Day * Cao)/2;
    document.getElementById("dien_tich_tg").value = result;
}
function calculateSquareArea(){
    var Canh = parseFloat(document.getElementById("canh_hv").value);

    if(isNaN(Canh)|| Canh <= 0){
        alert("Sai thông tin HÌNH VUÔNG  \nVUI LÒNG NHẬP LẠI");
    }
    let result = (Canh * Canh);
    document.getElementById("dien_tich_hv").value = result;
}