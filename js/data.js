const danhSachSanPham = [
    {
        maSP: "SP001",
        tenSP: "iPhone 15 Pro",
        giaSP: 30000000,
        moTa: "Điện thoại cao cấp Apple",
        mauSac: [
            { maMau: "BLACK", tenMau: "Titan Đen", hinhAnh: "iphone-17.jpg" },
            { maMau: "BLUE", tenMau: "Titan Xanh", hinhAnh: "iphone-17.jpg" }
        ]
    },
    {
        maSP: "SP002",
        tenSP: "Samsung Galaxy S24",
        giaSP: 22000000,
        moTa: "Điện thoại thông minh tích hợp AI từ Samsung",
        mauSac: [
            { maMau: "BLACK", tenMau: "Đen Onyx", hinhAnh: "iphone-17.jpg" },
            { maMau: "BLUE", tenMau: "Xanh Sapphire", hinhAnh: "iphone-17.jpg" }
        ]
    },
    {
        maSP: "SP003",
        tenSP: "Xiaomi 14",
        giaSP: 18000000,
        moTa: "Flagship cấu hình mạnh mẽ, camera Leica chất lượng cao",
        mauSac: [
            { maMau: "BLACK", tenMau: "Đen Huyền Bí", hinhAnh: "iphone-17.jpg" }
        ]
    },
    {
        maSP: "SP004",
        tenSP: "Oppo Reno11",
        giaSP: 10000000,
        moTa: "Chuyên gia chân dung với thiết kế mỏng nhẹ, bắt mắt",
        mauSac: [
            { maMau: "BLACK", tenMau: "Đen Khói", hinhAnh: "iphone-17.jpg" }
        ]
    },
    {
        maSP: "SP005",
        tenSP: "Vivo V30",
        giaSP: 11500000,
        moTa: "Điện thoại chụp ảnh chân dung ánh sáng vòng hào quang",
        mauSac: [
            { maMau: "BLACK", tenMau: "Đen Tinh Tú", hinhAnh: "iphone-17.jpg" }
        ]
    }
];

document.getElementById("btnSearch").addEventListener("click", function() {
    let keyword = document.getElementById("txtKeyword").value.trim().toLowerCase();
    let container = document.getElementById("resultContainer");
    
    let foundProduct = danhSachSanPham.find(sp => sp.tenSP.toLowerCase().includes(keyword));

    if (!foundProduct) {
        container.innerHTML = `
            <div class="col-md-6">
                <div class="alert alert-danger text-center shadow-sm" role="alert">
                    Không tìm thấy sản phẩm phù hợp.
                </div>
            </div>
        `;
        return;
    }

    let defaultColor = foundProduct.mauSac[0];

    let colorOptionsHtml = "";
    foundProduct.mauSac.forEach((mau, index) => {
        let selected = index === 0 ? "selected" : "";
        colorOptionsHtml += `<option value="${mau.hinhAnh}" ${selected}>${mau.tenMau}</option>`;
    });

    container.innerHTML = `
        <div class="col-md-6">
            <div class="card shadow border-0">
                <img id="productImage" src="images/${defaultColor.hinhAnh}" class="card-img-top img-fluid p-3" alt="${foundProduct.tenSP}" style="height: 280px; object-fit: contain;">
                <div class="card-body">
                    <h4 class="card-title fw-bold text-dark">${foundProduct.tenSP}</h4>
                    <p class="card-text text-muted mb-1"><strong>Mã sản phẩm:</strong> ${foundProduct.maSP}</p>
                    <p class="card-text text-danger fw-bold mb-2">Giá: ${foundProduct.giaSP.toLocaleString('vi-VN')} VNĐ</p>
                    <p class="card-text mb-3">${foundProduct.moTa}</p>
                    
                    <div class="mb-3">
                        <label for="selectColor" class="form-label fw-semibold">Chọn màu sắc:</label>
                        <select id="selectColor" class="form-select">
                            ${colorOptionsHtml}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById("selectColor").addEventListener("change", function() {
        let selectedImage = this.value;
        document.getElementById("productImage").src = "images/" + selectedImage;
    });
});