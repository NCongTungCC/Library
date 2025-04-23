Phân tích chức năng hệ thống 

Chức năng người dùng
Đăng ký, đăng nhập, đổi mật khẩu
Xác thực người dùng bằng JWT

Quản lý sách
Thêm sách mới, Xóa sách, Chỉnh sửa thông tin sách

Mượn trả sách


Phân tích cơ sở dữ liệu

Gồm 3 bảng

Bảng books để lưu trữ dữ liệu sách

id           ObjectId

tensach      String

tacgia       String 

namxuatban   Int

mota         String

poster       String

soluong      Int

Bảng users để lưu trữ tài khoản

id           ObjectId

username     String

password     String

Bảng borrowings để lưu trữ dữ liệu mượn trả sách

id           ObjectId

userId       ObjectId

bookId       ObjectId

brrowDate    Date

returnDate   Date   