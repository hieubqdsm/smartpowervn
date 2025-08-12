Tên Project: Website Lắp đặt Hệ thống Điện Năng Lượng Mặt Trời
1. Mô tả Tổng quan
Website là một nền tảng giới thiệu và kinh doanh dịch vụ lắp đặt hệ thống điện năng lượng mặt trời cho cá nhân và doanh nghiệp. Trang web cần có giao diện hiện đại, dễ sử dụng, cung cấp đầy đủ thông tin về dịch vụ, dự án đã thực hiện, và cho phép khách hàng liên hệ để nhận tư vấn.

2. Công nghệ Sử dụng
Front-end: HTML, CSS (Sử dụng SCSS để dễ quản lý), JavaScript (Sử dụng ES6+).

Framework CSS: Tailwind CSS hoặc Bootstrap (ưu tiên Tailwind CSS để tùy biến).

Back-end: Không yêu cầu (website tĩnh).

Build Tool: Vite hoặc Webpack (để tối ưu hóa code và tài sản).

Hosting: Các file tĩnh sẽ được deploy lên GitLab

3. Cấu trúc Trang (Pages & Components)
Dưới đây là danh sách các trang chính và các thành phần (components) cần được tạo. Mỗi trang và component phải được đặt tên rõ ràng.

Pages
Trang Chủ (/):

Tên file: index.html hoặc HomePage.js (nếu dùng SPA).

Thành phần: Header, Hero Section (Banner), Services Summary, Projects Showcase, Testimonials, Call to Action, Footer.

Trang Giới Thiệu (/about):

Tên file: about.html hoặc AboutPage.js.

Thành phần: Header, Giới thiệu về Công ty, Đội ngũ, Chứng nhận & Đối tác, Footer.

Trang Dịch Vụ (/services):

Tên file: services.html hoặc ServicesPage.js.

Thành phần: Header, Danh sách Dịch vụ, Mô tả chi tiết từng dịch vụ, Footer.

Trang Dự Án (/projects):

Tên file: projects.html hoặc ProjectsPage.js.

Thành phần: Header, Gallery Dự án, Footer.

Trang Liên Hệ (/contact):

Tên file: contact.html hoặc ContactPage.js.

Thành phần: Header, Form Liên hệ, Thông tin liên hệ, Bản đồ, Footer.

Trang Lỗi 404 (/404):

Tên file: 404.html.

Thành phần: Thông báo lỗi, liên kết về trang chủ.

Components
Header:

Nội dung: Logo, thanh điều hướng (liên kết đến các trang chính).

Tính năng: Responsive (thu gọn thành menu hamburger trên mobile).

Footer:

Nội dung: Logo, thông tin liên hệ, các liên kết mạng xã hội, bản quyền.

Call to Action Section:

Nội dung: Tiêu đề lôi cuốn, mô tả ngắn, nút "Liên hệ ngay".