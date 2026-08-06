// Hàm dùng chung: đọc chuỗi từ ô input, tách bởi dấu phẩy, chuyển thành mảng số
function layMang(inputId) {
    var chuoiNhap = document.getElementById(inputId).value;
    var mangChuoi = chuoiNhap.split(",");
    var mang = [];

    for (var i = 0; i < mangChuoi.length; i++) {
        var so = Number(mangChuoi[i].trim());
        mang.push(so);
    }

    return mang;
}

// Bài 1: Tổng số dương
function baiTap1() {
    var mang = layMang("input1");
    var tong = 0;

    for (var i = 0; i < mang.length; i++) {
        if (mang[i] > 0) {
            tong += mang[i];
        }
    }

    document.getElementById("result1").innerText = "👉 Tổng số dương = " + tong;
}

// Bài 2: Đếm số dương
function baiTap2() {
    var mang = layMang("input2");
    var dem = 0;

    for (var i = 0; i < mang.length; i++) {
        if (mang[i] > 0) {
            dem++;
        }
    }

    document.getElementById("result2").innerText = "👉 Số lượng số dương = " + dem;
}

// Bài 3: Tìm số nhỏ nhất
function baiTap3() {
    var mang = layMang("input3");
    var min = mang[0];

    for (var i = 1; i < mang.length; i++) {
        if (mang[i] < min) {
            min = mang[i];
        }
    }

    document.getElementById("result3").innerText = "👉 Số nhỏ nhất = " + min;
}

// Bài 4: Tìm số dương nhỏ nhất
function baiTap4() {
    var mang = layMang("input4");
    var mangDuong = [];

    for (var i = 0; i < mang.length; i++) {
        if (mang[i] > 0) {
            mangDuong.push(mang[i]);
        }
    }

    if (mangDuong.length === 0) {
        document.getElementById("result4").innerText = "👉 Mảng không có số dương nào";
        return;
    }

    var minDuong = mangDuong[0];
    for (var i = 1; i < mangDuong.length; i++) {
        if (mangDuong[i] < minDuong) {
            minDuong = mangDuong[i];
        }
    }

    document.getElementById("result4").innerText = "👉 Số dương nhỏ nhất = " + minDuong;
}

// Bài 5: Tìm số chẵn cuối cùng
function baiTap5() {
    var mang = layMang("input5");
    var soChanCuoi = null;

    for (var i = 0; i < mang.length; i++) {
        if (mang[i] % 2 === 0) {
            soChanCuoi = mang[i];
        }
    }

    if (soChanCuoi === null) {
        document.getElementById("result5").innerText = "👉 Mảng không có số chẵn nào";
    } else {
        document.getElementById("result5").innerText = "👉 Số chẵn cuối cùng = " + soChanCuoi;
    }
}

// Bài 6: Đổi chỗ 2 phần tử theo vị trí
function baiTap6() {
    var mang = layMang("input6");
    var viTri1 = Number(document.getElementById("viTri1").value);
    var viTri2 = Number(document.getElementById("viTri2").value);

    if (
        viTri1 < 0 ||
        viTri1 >= mang.length ||
        viTri2 < 0 ||
        viTri2 >= mang.length
    ) {
        document.getElementById("result6").innerText = "👉 Vị trí không hợp lệ";
        return;
    }

    var tam = mang[viTri1];
    mang[viTri1] = mang[viTri2];
    mang[viTri2] = tam;

    document.getElementById("result6").innerText = "👉 Mảng sau khi đổi chỗ: " + mang.join(", ");
}

// Bài 7: Sắp xếp tăng dần
function baiTap7() {
    var mang = layMang("input7");

    for (var i = 0; i < mang.length - 1; i++) {
        for (var j = 0; j < mang.length - 1 - i; j++) {
            if (mang[j] > mang[j + 1]) {
                var tam = mang[j];
                mang[j] = mang[j + 1];
                mang[j + 1] = tam;
            }
        }
    }

    document.getElementById("result7").innerText = "👉 Mảng sau khi sắp xếp: " + mang.join(", ");
}

// Kiểm tra một số có phải số nguyên tố hay không
function laSoNguyenTo(n) {
    if (n < 2) {
        return false;
    }

    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

// Bài 8: Tìm số nguyên tố đầu tiên
function baiTap8() {
    var mang = layMang("input8");
    var soNguyenToDauTien = null;

    for (var i = 0; i < mang.length; i++) {
        if (laSoNguyenTo(mang[i])) {
            soNguyenToDauTien = mang[i];
            break;
        }
    }

    if (soNguyenToDauTien === null) {
        document.getElementById("result8").innerText = "👉 Mảng không có số nguyên tố nào";
    } else {
        document.getElementById("result8").innerText = "👉 Số nguyên tố đầu tiên = " + soNguyenToDauTien;
    }
}

// Bài 9: Đếm số nguyên
function baiTap9() {
    var mang = layMang("input9");
    var dem = 0;

    for (var i = 0; i < mang.length; i++) {
        if (Number.isInteger(mang[i])) {
            dem++;
        }
    }

    document.getElementById("result9").innerText = "👉 Số lượng số nguyên = " + dem;
}

// Bài 10: So sánh số lượng số âm và dương
function baiTap10() {
    var mang = layMang("input10");
    var demAm = 0;
    var demDuong = 0;

    for (var i = 0; i < mang.length; i++) {
        if (mang[i] < 0) {
            demAm++;
        } else if (mang[i] > 0) {
            demDuong++;
        }
    }

    var ketQua = "Số âm: " + demAm + " - Số dương: " + demDuong + ". ";

    if (demAm > demDuong) {
        ketQua += "Số âm nhiều hơn số dương";
    } else if (demAm < demDuong) {
        ketQua += "Số dương nhiều hơn số âm";
    } else {
        ketQua += "Số âm và số dương bằng nhau";
    }

    document.getElementById("result10").innerText = ketQua;
}
