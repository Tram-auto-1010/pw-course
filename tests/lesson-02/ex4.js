const height = 153;
if (height > 100)
{
    const maxWeight = height%100;
    const idealWeight = (maxWeight*9)/10;
    const minWeight = (maxWeight*8)/10;
    console.log(`Cân nặng lý tưởng: ${idealWeight}kg, Cân nặng tối đa: ${maxWeight}kg, Cân nặng tối thiểu: ${minWeight}kg`);
}
else
{
    console.log("Phạm vi chỉ áp dụng cho chiều cao >100");
}
