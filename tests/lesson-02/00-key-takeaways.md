# Tổng hợp các kiến thức được học trong bài
## 1. Git three states 
  ### 1.1 Git hoạt động như thế nào
  ### 1.2 Cách di chuyển ở các cùng 
## 2. Flow Git
  ### 2.1 Không dùng global config
    init -> config -> add -> commit -> push
  ### 2.2 Dùng global config
    init - > add -> commit -> push
## 3. Javascript
  ### 3.1 Biến: có thể thay đổi được
   #### Khai báo:
##### Từ khoá: var/let
```
<từ khoá> <tên biến> = <giá trị>

     + var cho phép khai báo lại, không an toàn 
     + let không cho phép khai báo lại, nếu khai báo tiếp sẽ gây ra sự nhầm lẫn, ưu tiên dùng let
```
```
     Example: 
     var centerName = "Better Bytes Academy";
     let isLovePlaywright = true;
```
#### 3.2 const: hằng số dùng để khai báo các giá trị cố định và chỉ dùng 1 lần
```
    <từ khoá> <tên hằng> = <giá trị>
```
```
     Example:
     const slogan = "Học kỹ - Hiểu bản chất - Mentor tận tình"
```
#### 3.3 Khi nào dùng biến và hằng:
     +  Mặc định dùng const: sau này nhỡ có 1 thay đổi nào đấy liên quan đến thì mình sẽ biết được lỗi ở đâu
     + dùng let khi chắc chắn cần gán lại giá trị 
     + var không dùng
  ### 3.2 Kiểu dữ liệu
#### 3.2.1 Kiểu dữ liệu nguyên thuỷ
      + Number
      + String 
      + Boolen
      + Undefined
      + Null
      + Symbol
      + BigInt
#### 3.2.2 Kiểu dữ liệu tham chiếu
      + Object

  ### 3.3 Toán tử so sánh
    - So sánh bằng
    - So sánh không bằng
    - So sánh lớn hơn, nhỏ hơn
  ### 3.4 Toán tử logic
    - && (AND)
    - || (OR)
  ### 3.5 Toán từ một ngôi
    - Prefix: toán tử nằm ở phía trước - tăng trước, trả về sau
    - Postfix: toán tử nằm ở phía sau - trả về trước, tăng sau
  ### 3.6 Toán tử toán học: +, -, *, /
  ### 3.7 Câu điều kiện: dùng để kiểm tra một đoạn logic trước khi chạy
  ### 3.8 Vòng lặp 
    - Cú pháp vòng lặp for(i)
     for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>)
     {
        //code
     }
     + điều kiện khởi tạo: chạy 1 lần duy nhất
     + điều kiện lặp: nếu đúng thì chạy tiếp, sai thì dừng
     + cập nhật: chạy vào mỗi cuối vòng lặp, để thay đổi giá trị của biến đếm
    
