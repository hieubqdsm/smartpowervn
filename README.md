# SolarTech - Website Lắp Đặt Hệ Thống Điện Năng Lượng Mặt Trời

Website tĩnh chuyên nghiệp cho công ty lắp đặt hệ thống điện năng lượng mặt trời, được thiết kế để chạy trên GitLab Pages.

## 🌟 Tính Năng

- **Responsive Design**: Tương thích với mọi thiết bị (desktop, tablet, mobile)
- **Modern UI/UX**: Giao diện hiện đại với Tailwind CSS
- **SEO Optimized**: Tối ưu hóa cho công cụ tìm kiếm
- **Fast Loading**: Tải trang nhanh với lazy loading
- **Interactive Elements**: Các thành phần tương tác với JavaScript
- **Contact Forms**: Form liên hệ với validation
- **Project Gallery**: Gallery dự án với filter
- **Mobile Menu**: Menu điều hướng cho mobile

## 📁 Cấu Trúc Dự Án

```
public/
├── index.html          # Trang chủ
├── about.html          # Trang giới thiệu
├── services.html       # Trang dịch vụ
├── projects.html       # Trang dự án
├── contact.html        # Trang liên hệ
├── 404.html           # Trang lỗi 404
├── css/
│   └── style.css      # CSS tùy chỉnh
├── js/
│   └── main.js        # JavaScript chính
└── images/            # Thư mục hình ảnh
    └── placeholder.txt
```

## 🚀 Cách Sử Dụng

### 1. Clone Repository
```bash
git clone <repository-url>
cd homepage
```

### 2. Chạy Locally
Mở file `public/index.html` trong trình duyệt hoặc sử dụng local server:

```bash
# Sử dụng Python
python -m http.server 8000

# Sử dụng Node.js
npx serve public

# Sử dụng PHP
php -S localhost:8000 -t public
```

### 3. Deploy lên GitLab Pages
1. Push code lên GitLab repository
2. GitLab CI/CD sẽ tự động build và deploy
3. Website sẽ có sẵn tại: `https://<username>.gitlab.io/<project-name>`

## 🛠️ Công Nghệ Sử Dụng

- **HTML5**: Cấu trúc trang web
- **CSS3**: Styling với Tailwind CSS
- **JavaScript (ES6+)**: Tương tác và animation
- **Font Awesome**: Icons
- **GitLab CI/CD**: Automated deployment

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Customization

### Thay Đổi Màu Sắc
Chỉnh sửa file `public/css/style.css`:
```css
:root {
  --primary-color: #16a34a;
  --secondary-color: #15803d;
}
```

### Thay Đổi Nội Dung
- Cập nhật thông tin công ty trong các file HTML
- Thay thế hình ảnh trong thư mục `images/`
- Chỉnh sửa thông tin liên hệ

### Thêm Trang Mới
1. Tạo file HTML mới trong thư mục `public/`
2. Cập nhật navigation trong header
3. Thêm link trong footer nếu cần

## 📧 Form Liên Hệ

Form liên hệ hiện tại sử dụng JavaScript để xử lý client-side. Để kết nối với backend:

1. Thay đổi action trong form
2. Cập nhật JavaScript để gửi data đến server
3. Xử lý response từ server

## 🔧 Tối Ưu Hóa

### Performance
- Lazy loading cho hình ảnh
- Minified CSS và JavaScript
- Optimized images
- Caching strategies

### SEO
- Meta tags đầy đủ
- Semantic HTML
- Structured data
- Sitemap (có thể thêm)

### Accessibility
- ARIA labels
- Keyboard navigation
- High contrast support
- Screen reader friendly

## 📄 License

Dự án này được tạo cho mục đích thương mại. Vui lòng liên hệ để được phép sử dụng.

## 🤝 Đóng Góp

1. Fork repository
2. Tạo feature branch
3. Commit changes
4. Push to branch
5. Tạo Pull Request

## 📞 Liên Hệ

- **Email**: info@solartech.vn
- **Phone**: 090 123 4567
- **Address**: 123 Đường ABC, Quận 1, TP.HCM

---

**SolarTech** - Chuyên lắp đặt hệ thống pin mặt trời chất lượng cao, uy tín và chuyên nghiệp.