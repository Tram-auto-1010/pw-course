Tổng hợp các kiến thức được học trong bài
- Git three states 
  + Git hoạt động như thế nào
  + Cách di chuyển ở các cùng 
- Flow Git
  + Không dùng global config
    init -> config -> add -> commit -> push
  + Dùng global config
    init - > add -> commit -> push
- Javascript
  + Biến: có thể thay đổi được
  + Khai báo:
    - <từ khoá> <tên biến> = <giá trị>
    Từ khoá: var/left
     + var cho phép khai báo lại, không an toàn 
     + let không cho phép khai báo lại, nếu khai báo tiếp sẽ gây ra sự nhầm lẫn, ưu tiên dùng let
     Example: 
     var centerName = "Better Bytes Academy";
     let isLovePlaywright = true;
    - <từ khoá> <tên hằng> = <giá trị>
     + const: hằng số dùng để khai báo các giá trị cố định và chỉ dùng 1 lần
     Example:
     const slogan = "Học kỹ - Hiểu bản chất - Mentor tận tình"
    - Khi nào dùng biến và hằng:
     +  Mặc định dùng const: sau này nhỡ có 1 thay đổi nào đấy liên quan đến thì mình sẽ biết được lỗi ở đâu
     + dùng let khi chắc chắn cần gán lại giá trị 
     + var không dùng
  + Kiểu dữ liệu
    - Kiểu dữ liệu nguyên thuỷ
      + Number
      + String 
      + Boolen
      + Undefined
      + Null
      + Symbol
      + BigInt
    - Kiểu dữ liệu tham chiếu
      + Object

    - Data type - number (số nguyên, số thực, Infinity, NaN)
    - Data type - String (dùng " ,' ,`` ``)
  + Toán tử so sánh
    - So sánh bằng
    - So sánh không bằng
    - So sánh lớn hơn, nhỏ hơn
  + Toán tử logic
    - && (AND)
    - || (OR)
  + Toán từ một ngôi
    - Prefix: toán tử nằm ở phía trước - tăng trước, trả về sau
    - Postfix: toán tử nằm ở phía sau - trả về trước, tăng sau
  + Toán tử toán học: +, -, *, /
  + Câu điều kiện: dùng để kiểm tra một đoạn logic trước khi chạy
  + Vòng lặp 
    - Cú pháp vòng lặp for(i)
     for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>)
     {
        //code
     }
     + điều kiện khởi tạo: chạy 1 lần duy nhất
     + điều kiện lặp: nếu đúng thì chạy tiếp, sai thì dừng
     + cập nhật: chạy vào mỗi cuối vòng lặp, để thay đổi giá trị của biến đếm
    
