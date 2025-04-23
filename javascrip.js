
// Xuất file Word
function exportToWord() {
    const content = document.getElementById("cv-content").innerHTML;
    const blob = new Blob(['\ufeff', content], {
        type: 'application/msword'
    });
    downloadFile(blob, "CV_NguyenPhanDangHuynh.doc");
}

// // Xuất file PDF
// function exportToPDF() {
//     const content = document.getElementById("cv-content");
//     html2pdf()
//         .from(content)
//         .save("CV_NguyenPhanDangHuynh.pdf");
// }

// Hàm chung để tải file
function downloadFile(blob, fileName) {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
//  //khai báo const, tạo mới với 1 thẻ đặt là a và tiếp tục gắn thẻ vô blob vì thẻ a hỗ trợ tải
//  const link = document.createElement("a")
//  link.href = URL.createObjectURL(blob);
//  //tải với tên và đuôi .doc
//  link.download = "test.doc"
//  //gắn cái const được khởi tạo link vào <body> 
//  document.body.appendChild(link);
//  //hành động click thì link sẽ chạy
//  link.click();
//  //sau khu hành động click xong thì xóa bộ nhớ
//  document.body.removeChild(link);
//  }
