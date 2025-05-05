Gồm 5 bảng (collection): books, users, borrowings, categorys, logs (tất cả các bảng đều được thêm CreateAt và updateAt tự động khi tạo và cập nhật).

Bảng books để lưu trữ dữ liệu sách

id           ObjectId

namebook      String

author       String 

year         Int

description  String

poster       String

totalBook    Int

categoryId   ObjectId

borrowBook   Int

availableBook Int 

user     String

userupdate   String

Bảng users để lưu trữ tài khoản

id           ObjectId

username     String

password     String

gender       String

birthday     Date

role         String

Bảng borrowings để lưu trữ dữ liệu mượn trả sách

id           ObjectId

userId       ObjectId

bookId       ObjectId

brrowDate    Date

returnDate   Date  

status       String

Bảng categorys để lưu trữ các thể loại sách

id           ObjectId

category   String

description    String

Bảng logs để lưu trữ lại các lịch sử hành động của người dùng

id          ObjectId

userId      ObjectId

movieId     ObjectId

action    String

time        Date