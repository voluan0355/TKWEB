class TaiKhoanNganHang {
    constructor() {
    this.soDu = 0;
    }
    guiTien(soTien) {
    this.soDu+=soTien;
    }
    rutTien(soTien) {
    this.soDu-=soTien;
    }
    kiemTraSoDu() {
    return this.soDu;
    }
   }
   // Ví dụ sử dụng
   const taiKhoan = new TaiKhoanNganHang();
   taiKhoan.guiTien(1000);
   taiKhoan.rutTien(200);
   console.log(taiKhoan.kiemTraSoDu()); // Kết quả: 800