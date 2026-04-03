const number = 3;
if (number > 0)
{
    console.log("Giá trị bạn nhập là số dương");
}
else if (number < 0)
{
    console.log("Giá trị bạn nhập là số âm");
}
else
{
    console.log("Giá trị bạn nhập là số 0");
}


const height = 100;
if (height > 100)
{
    const idealWeight = (height*9)/10;
    const maximumWeight = height%100;;
    const minimumWeight = (height*8)/10;
    console.log("Cân nặng lý tưởng của bạn là:",idealWeight," kg");
    console.log("Cân nặng tối đa là:",maximumWeight," kg");
    console.log("Cân nặng tối thiểu là:",minimumWeight," kg");
}
else
{
    console.log("Phạm vi chỉ áp dụng cho chiều cao >100");
}
