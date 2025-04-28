PHÂN TÍCH CHỨC NĂNG HỆ THỐNG

Hệ thống gồm 2 đối tượng sử dụng là người dùng và admin

Chức năng người dùng

Đăng ký: Cho phép người dùng tạo tài khoản mới với username, password, ngày sinh, giới tính.

Đăng nhập: Người dùng cung cấp username và password để xác thực và nhận về JWT Token.

Xác thực bằng JWT: Hệ thống sử dụng token để xác minh người dùng hợp lệ khi gọi các API có yêu cầu đăng nhập (middleware authenticateToken).

Đổi mật khẩu: Người dùng cung cấp mật khẩu cũ, mật khẩu mới để đổi mật khẩu. Hệ thống kiểm tra xác thực trước khi cho phép đổi.

Chức năng mượn - trả sách

Người dùng chọn sách để mượn, hệ thống: Tạo bản ghi mượn với thời gian borrowDate. Giảm số lượng sách còn lại.

Khi trả sách: Cập nhật returnDate trong bảng borrowings. Tăng số lượng sách trong thư viện.

Chức năng của admin

Quản lý sách

Thêm sách mới: Admin có thể thêm sách vào thư viện (bao gồm các trường: tên sách, tác giả, mô tả, số lượng, poster, thể loại,...) và cho biết người tạo.

Chỉnh sửa thông tin sách: Cho phép cập nhật nội dung như tên sách, mô tả, ảnh bìa, số lượng còn lại và cho biết người đã chỉnh sửa thông tin.

Xóa sách: Xóa sách khỏi thư viện.

Thêm, Sửa, Xóa thể loại sách. 

Xem dữ liệu thống kê


Tổng quan luồng hoạt động:

User: Đăng ký → Đăng nhập → Mượn sách → Trả sách → Đổi mật khẩu.

Admin: Đăng nhập → Thêm/Sửa/Xóa sách, Thể loại.