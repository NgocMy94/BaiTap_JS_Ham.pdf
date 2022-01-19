//Bài Tập 1
/**
 * KHỐI 1 : input
 * diemChuan , kvUuTien , dtUuTien , diemMon1 ,diemMon2 , diemMon3
 * * KHỐI 2 :
 * B1:Lấy giá trị từ fomr
 * B2: if(diemMon1 + diemMon2 + diemMon3 + kvUuTien + dtUuTien){
        diem = diemMon1 + diemMon2 + diemMon3 + kvUuTien + dtUuTien
        console.log(diem);
    }
    else if(diemMon1 + diemMon2 + diemMon3 + kvUuTien){
        diem = diemMon1 + diemMon2 + diemMon3 + kvUuTien
        console.log(diem);
    }
    else if (diemMon1 + diemMon2 + diemMon3 + dtUuTien){
        diem = diemMon1 + diemMon2 + diemMon3 + dtUuTien
        console.log(diem);
    }
    else if(diemMon1 + diemMon2 + diemMon3){
        diem = diemMon1 + diemMon2 + diemMon3
        console.log(diem)

    }
   if(diem >= diemChuan){
       ketQua = "Chúc Mừng Bạn Đã Đậu"
   }
   else if(diem < diemChuan){
       ketQua = "Bạn Đã Rớt Kỳ Thi"
   }
   else(
       console.log("chưa nhập điểm chuẩn")
   )
 * KHỐI 3 :
   diem ; ketQua
 */
function tinhDiemChuan(){
    var diemChuan = document.getElementById("inPut1").value
    var kvUuTien  = Number(document.getElementById("inPut2").value)
    var dtUuTien  = Number(document.getElementById("inPut3").value)
    var diemMon1  = Number(document.getElementById("inPut4").value)
    var diemMon2  = Number(document.getElementById("inPut5").value)
    var diemMon3  = Number(document.getElementById("inPut6").value)
    var ketQua = ""
    var diem = 0
    if(diemMon1 + diemMon2 + diemMon3 + kvUuTien + dtUuTien){
        diem = diemMon1 + diemMon2 + diemMon3 + kvUuTien + dtUuTien
        console.log(diem);
    }
    else if(diemMon1 + diemMon2 + diemMon3 + kvUuTien){
        diem = diemMon1 + diemMon2 + diemMon3 + kvUuTien
        console.log(diem);
    }
    else if (diemMon1 + diemMon2 + diemMon3 + dtUuTien){
        diem = diemMon1 + diemMon2 + diemMon3 + dtUuTien
        console.log(diem);
    }
    else if(diemMon1 + diemMon2 + diemMon3){
        diem = diemMon1 + diemMon2 + diemMon3
        console.log(diem)

    }
   if(diem >= diemChuan){
       ketQua = "Chúc Mừng Bạn Đã Đậu"
   }
   else if(diem < diemChuan){
       ketQua = "Bạn Đã Rớt Kỳ Thi"
   }
   else(
       console.log("chưa nhập điểm chuẩn")
   )

    document.getElementById("txtTinhDiem").innerHTML = "Tổng Số Điểm Của Bạn :  " +diem +"<br>" +ketQua
}


//Bài Tập 2
/**
 * Khối 1:lastName , soKw
 * Khối 2:
 * B1:Tạo biến xuất tiền trả theo quy tắc
 * const tien_Kw_1_50 = 500
 * const tien_Kw_50_100 = 650
 * const tien_Kw_100_200 = 850
 * const tien_kw_200_300 = 1100
 * const tien_kw_Tren_300 = 1300
 * B2:Lấy Giá Trị Từ Form
 * B3:if(1 < soKw && soKw <= 50){
 *     
 *     tienDien = soKw * tien_Kw_1_50
 * }
 * else if(50 <= soKw && soKw <=100){
 *     tienDien = soKw * tien_Kw_50_100
 *     console.log(tienDien)
 * }
 * else if(100 <= soKw && soKw <=200){
 *     tienDien = soKw * tien_Kw_100_200
 * }
 * else if(200 <= soKw && soKw <=300){
 *  tienDien = soKw * tien_kw_200_300
 * }
 * else if(300 <= soKw ){
 *  tienDien = soKw * tien_kw_Tren_300
 * }
 * B4:Kết Quả
 * Khối 3:
 * In Kết Quả lastName ;  tienDien
 */
const tien_Kw_1_50 = 500
const tien_Kw_50_100 = 650
const tien_Kw_100_200 = 850
const tien_kw_200_300 = 1100
const tien_kw_Tren_300 = 1300
function tinhTienDien(){
   var lastName = document.getElementById("inPut7").value
   console.log(lastName)
  
   var soKw = document.getElementById("inPut8").value
   var tienDien = 0
   
    



   if(1 < soKw && soKw <= 50){
       
       tienDien = soKw * tien_Kw_1_50
   }
   else if(50 <= soKw && soKw <=100){
       tienDien = soKw * tien_Kw_50_100
       console.log(tienDien)
   }
   else if(100 <= soKw && soKw <=200){
       tienDien = soKw * tien_Kw_100_200
   }
   else if(200 <= soKw && soKw <=300){
    tienDien = soKw * tien_kw_200_300
   }
   else if(300 <= soKw ){
    tienDien = soKw * tien_kw_Tren_300
   }
   document.getElementById("txtTinhTienDien").innerHTML ="Ho Và Tên : " + lastName  + "<br> Tiền Điện: " + (new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(tienDien));+ " <span>đ</span>"
}


//Bài Tập 3
/**
 * Khối 1: fullName ; tongThuNhap ; soNguoiPhuThuoc
 * Khối 2:
 * B1:Tạo Biến Cho Phần Trăm Thế Xuất
 * const chiuThe_Tren_60= 5 
 * const chiuThe_Tren_60_120= 10
 * const chiuThe_Tren_120_210= 15
 * const chiuThe_Tren_210_384= 20
 * const chiuThe_Tren_384_624= 25
 * const chiuThe_Tren_624_960= 30
 * const chiuThe_Tren_960 = 35
 * B2:Lấy giá trị từ form
 * B3:Tính thuNhapChiuThue
 * B4:Tính Tiền Thuế
 * if(6e+7 <= thuNhapChiuThue){
 *      tienThue = thuNhapChiuThue * (chiuThe_Tren_60 / 100)   
 *  }
 *  else if(6e+7 <= thuNhapChiuThue && thuNhapChiuThue <= 12e+7){
 *      tienThue = thuNhapChiuThue * (chiuThe_Tren_60_120 / 100)
 *  }
 *  else if(12e7 <= thuNhapChiuThue && thuNhapChiuThue <= 21e7){
 *      tienThue = thuNhapChiuThue * (chiuThe_Tren_120_210 / 100)
 *  }
 *  else if(21e+7 <= thuNhapChiuThue && thuNhapChiuThue <= 384e+6){
 *      tienThue = thuNhapChiuThue * (chiuThe_Tren_210_384 / 100)
 *  }
 *  else if(384e+6 <= thuNhapChiuThue && thuNhapChiuThue <= 624e+6){
 *      tienThue = thuNhapChiuThue * (chiuThe_Tren_384_624 / 100)   
 *  }
 *  else if(624e+6 <= thuNhapChiuThue && thuNhapChiuThue <= 96e+7){
 *      tienThue = thuNhapChiuThue * (chiuThe_Tren_624_960 / 100)   
 *  }
 *  else if(96e+7 <= thuNhapChiuThue){
 *      tienThue = thuNhapChiuThue * (chiuThe_Tren_960 / 100)   
 *  }
 * B5:Kết Quả
 * Khối 3:
 * In ra : fullName ; tienThue
 */
const chiuThe_60= 0.05 
const chiuThe_Tren_60_120= 0.1
const chiuThe_Tren_120_210= 0.15
const chiuThe_Tren_210_384= 0.2
const chiuThe_Tren_384_624= 0.25
const chiuThe_Tren_624_960= 0.3
const chiuThe_Tren_960 = 0.35

function tinhTienThue(){
    var fullName = document.getElementById("inPut9").value
    var thuNhapNam = document.getElementById("inPut10").value
    var soNguoiPT = document.getElementById("inPut11").value
    var thuNhapChiuThue = thuNhapNam - 4e+6 - (soNguoiPT * 16e+5)
    console.log(thuNhapChiuThue)
    var tienThue = 0
    if (thuNhapChiuThue <= 6e+7) {
        tienThue = thuNhapChiuThue * (chiuThe_60)
    }
    else if(6e7 < thuNhapChiuThue && thuNhapChiuThue <= 120e+6) {
        tienThue = thuNhapChiuThue * (chiuThe_Tren_60_120 )
    }
    else if(120e+6 < thuNhapChiuThue && thuNhapChiuThue <= 210e+6){
        tienThue = thuNhapChiuThue * (chiuThe_Tren_120_210 )
    }
    else if(210e+6 < thuNhapChiuThue && thuNhapChiuThue <= 384e+6){
        tienThue = thuNhapChiuThue * (chiuThe_Tren_210_384 )
    }
    else if (384e+6 < thuNhapChiuThue && thuNhapChiuThue <= 624e+6) {
        tienThue = thuNhapChiuThue * (chiuThe_Tren_384_624 )
    }
    else if (624e+6 < thuNhapChiuThue && thuNhapChiuThue <= 960e+6) {
        tienThue = thuNhapChiuThue * (chiuThe_Tren_624_960 )
    }
    else if(960e+6 < thuNhapChiuThue){
        tienThue = thuNhapChiuThue * (chiuThe_Tren_960 )
    }
 
   document.getElementById("txtTinhThue").innerHTML ="Họ Và Tên : <br>" +fullName +"<br>" +"Tiền Thuế Thu Nhập Cá Nhân " +tienThue.toLocaleString() + "đ"
}
//Bài Tập 4
/**
 * Khối 1: nhaDan ; doanhNghiep ; ma_KhachHang ;soKenh ; so_KetNoi
 * Khối 2:
 * B1: Tạo biến mức giá tính tiền cáp
 * const xl_hd_NhaDan = 4.5
 * const dv_cb_NhaDan = 20.5
 * const tk_cc_NhaDan = 7.5
 * const xl_hd_DoanhNghiep = 15
 * const dv_cb_DoanhNghiep = 75
 * const tk_cc_DoanhNghiep = 50
 * const ketnoi_them = 5
 * B2:Lấy giá trị từ form
 * B3: Kiểm tra loại khách hàng 
 * B4: Điều Kiện
 *  if (nhaDan.checked){
 *       khachHang = "nhaDan"
 *       
 *   }
 *   else if(doanhNghiep.checked){
 *       khachHang = "doanhNghiep"
 *   }
 *   else{
 *       alert("Khách Hàng Chưa Chọn")
 *   }
 * B5:Kết quả
 * Khối 3: In Kết quả 
 * ma_KhachHang ; thanhTien
 */
const xl_hd_NhaDan = 4.5
const dv_cb_NhaDan = 20.5
const tk_cc_NhaDan = 7.5
const xl_hd_DoanhNghiep = 15
const dv_cb_DoanhNghiep = 75
const tk_cc_DoanhNghiep = 50
const ketnoi_them = 5
function tinhTienCap() {
    var nhaDan = document.getElementById("nhaDan")
    var doanhNghiep = document.getElementById("doanhNghiep")

    var khachHang = ("")
    if (nhaDan.checked){
        khachHang = "nhaDan"
        
    }
    else if(doanhNghiep.checked){
        khachHang = "doanhNghiep"
    }
    else{
        alert("Khách Hàng Chưa Chọn")
    }
    console.log(khachHang)

    var ma_KhachHang = document.getElementById("inPut13").value
    var soKenh = Number(document.getElementById("inPut14").value)
    var so_KetNoi = Number(document.getElementById("inPut15").value)
    var thanhTien = 0
    switch (khachHang) {
        case "nhaDan":
          if ( nhaDan ) {
            thanhTien = (soKenh * tk_cc_NhaDan) + (xl_hd_NhaDan + dv_cb_NhaDan)
          }
          console.log(thanhTien)
            break;
        case "doanhNghiep":
            if ( so_KetNoi <= 10) {
              thanhTien = (soKenh * tk_cc_DoanhNghiep) + (xl_hd_DoanhNghiep + dv_cb_DoanhNghiep) 
            }
            else if(so_KetNoi >= 10){
                thanhTien = (soKenh * tk_cc_DoanhNghiep) + (xl_hd_DoanhNghiep + dv_cb_DoanhNghiep) + (so_KetNoi * ketnoi_them)
            }
            console.log(thanhTien)
          
            
              break;
        default:
            break;
    }
    document.getElementById("txtTinhTienCap").innerHTML = "Mã Số Khách Hàng : <br> " +ma_KhachHang +"<br>" +"Tiền Cáp " +thanhTien.toLocaleString() +"$"
    
}
