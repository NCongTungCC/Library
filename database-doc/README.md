Gồm 5 bảng (collection): books, users, borrowings, categorys, logs (tất cả các bảng đều được thêm CreateAt và updateAt tự động khi tạo và cập nhật).

Bảng books để lưu trữ dữ liệu sách

id           ObjectId

tensach      String

tacgia       String 

namxuatban   Int

mota         String

poster       String

soluong      Int

nguoitao     String

nguoicapnhat   String

Bảng users để lưu trữ tài khoản

id           ObjectId

username     String

password     String

gender       String

birthday     Date

Bảng borrowings để lưu trữ dữ liệu mượn trả sách

id           ObjectId

userId       ObjectId

bookId       ObjectId

brrowDate    Date

returnDate   Date  

status       String

Bảng categorys để lưu trữ các thể loại sách

id           ObjectId

tentheloai   String

mota         String

Bảng logs để lưu trữ lại các lịch sử hành động của người dùng

id          ObjectId

userId      ObjectId

movieId     ObjectId

hanhdong    String

time        Date