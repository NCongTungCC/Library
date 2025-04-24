PHÂN TÍCH CHỨC NĂNG HỆ THỐNG

Chức năng người dùng

Đăng ký: Cho phép người dùng tạo tài khoản mới với username, password.

Đăng nhập: Người dùng cung cấp username và password để xác thực và nhận về JWT Token.

Xác thực bằng JWT: Hệ thống sử dụng token để xác minh người dùng hợp lệ khi gọi các API có yêu cầu đăng nhập (middleware authenticateToken).

Đổi mật khẩu: Người dùng cung cấp mật khẩu cũ, mật khẩu mới để đổi mật khẩu. Hệ thống kiểm tra xác thực trước khi cho phép đổi.

Quản lý sách

Thêm sách mới: Admin có thể thêm sách vào thư viện (bao gồm các trường: tên sách, tác giả, mô tả, số lượng, poster, thể loại,...).

Chỉnh sửa thông tin sách: Cho phép cập nhật nội dung như tên sách, mô tả, ảnh bìa, số lượng còn lại.

Xóa sách: Xóa sách khỏi thư viện.

Chức năng mượn - trả sách

Người dùng chọn sách để mượn, hệ thống: Tạo bản ghi mượn với thời gian borrowDate. Giảm số lượng sách còn lại.

Khi trả sách: Cập nhật returnDate trong bảng borrowings. Tăng số lượng sách trong thư viện.

PHÂN TÍCH CƠ SỞ DỮ LIỆU

Gồm 3 bảng (collection): books, users, borrowings.

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