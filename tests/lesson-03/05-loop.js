//tính tổng từ 1 đến 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

console.log('----------------');
//in bảng cửu chương từ 2 đến 9
for (let i = 2; i <= 9; i++) {
    console.log(`Bảng cửu chương ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log('----------------'); 
}

//tạo 1 mảng chứa các số lẻ từ 1 đến 99
let oddNumbers = [];
for (let i = 1; i < 100; i += 2) {
    oddNumbers.push(i);
}
console.log(oddNumbers);

console.log('----------------');
//in ra 10 email dựa trên tên người dùng và số thứ tự 
let username = "user";
for (let i = 1; i <= 10; i++) {
    console.log(`${username}${i}@example.com`);
}   

console.log('----------------');
//tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và in ra tổng doanh thu
let arrRevenue = [
  { month: 1, total: 100 },
  { month: 2, total: 210 },
  { month: 3, total: 210 },
  { month: 4, total: 300 },
  { month: 5, total: 250 },
  { month: 6, total: 400 },
  { month: 7, total: 350 },
  { month: 8, total: 400 },
  { month: 9, total: 450 },
  { month: 10, total: 600 },
  { month: 11, total: 1000 },
  { month: 12, total: 700 }
];
let totalRevenue = 0;
for (let i = 0; i < arrRevenue.length; i++) {
    totalRevenue += arrRevenue[i].total;
}
console.log(totalRevenue);