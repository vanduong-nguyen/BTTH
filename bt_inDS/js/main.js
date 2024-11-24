const danhSach = [
    {name: "Nguyễn Văn Dương", sex:"Nam", address:"Nam Định"},
    {name: "Phan Tuấn Phong", sex:"Nam", address:"Nghệ An"},
    {name: "Khương Văn Khải", sex:"Nam", address:"Hà Nội"},
    {name: "Lưu Đức Anh Dũng", sex:"Nam", address:"Hải Dương"},
    {name: "Đinh Hoàng Đức", sex:"Nam", address:"Hà Nội"},
    {name: "Nguyễn Văn Linh", sex:"Nam", address:"Hà Nội"},
    {name: "Hà Hải Anh", sex:"Nam", address:"Hà Nội"}
];

const tableBody = document.querySelector("#dsTV tbody");

danhSach.forEach(item => {
   const row = document.createElement("tr");

   Object.values(item).forEach(text => {
       const cell = document.createElement("td");
       cell.textContent = text;
       row.appendChild(cell);
   });
   tableBody.appendChild(row);
});
