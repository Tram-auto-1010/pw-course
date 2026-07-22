//viết hàm multiply nhận 2 tham số a và b, in ra kết qủa nhân của chúng. Gọi hàm với 2 cặp giá trị khác nhau
function multiply(a, b) {
    console.log(a * b);
}

multiply(7, 3); 
multiply(5, 6); 

console.log('----------------');
//viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. Gọi hàm và in kết quả với 2 bộ giá trị khác nhau
function findMin(a, b, c) {
    return Math.min(a, b, c);
}

console.log(findMin(10, 20, 8)); 
console.log(findMin(3, 7, 2));

console.log('----------------');
//viết hàm getTopStudent nhận 2 tham số, students là mảng các object (name, score)
//threshold: ngưỡng điểm để được coi là top 
//Hàm trả về mảng mới chứa tên của những học sinh có điểm >=threshold. Gọi hàm với danh sách thực tế và in kết quả
let students = [
  { name: "An", score: 8 },
  { name: "Ánh", score: 6.5 },
  { name: "Trang", score: 9 },
  { name: "Huy", score: 7.8 }
];

function getTopStudent(students, threshold) {
  let result = [];

  for (let i = 0; i < students.length; i++) {
    if (students[i].score >= threshold) {
      result.push(students[i].name);
    }
  }

  return result;
}

let topStudents = getTopStudent(students, 8.7);
console.log(topStudents);

console.log('----------------');
//Viết hàm caculateInterest nhận 3 tham số: principal, rate, years 
// hàm tính và trả về total = principal + principal * rate * years /100
// gọi hàm với ví dụ thực tế và in kết quả
function calculateInterest(principal, rate, years) {
    let total = principal + (principal * rate * years) / 100;
    return total;
}

let totalAmount = calculateInterest(100, 5, 4);
console.log(totalAmount);