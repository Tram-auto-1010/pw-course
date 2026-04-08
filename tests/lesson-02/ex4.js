const height = 153;
if (height > 100) {
    //số lẻ của chiều cao - lấy 2 số sau (cân nặng tối đa)
    const maxWeight = height % 100;

    //công thức cân nặng lý tưởng
    const idealWeight = (maxWeight * 9) / 10;

    //công thức cân nặng tối thiểu
    const minWeight = (maxWeight * 8) / 10;
    console.log(`Cân nặng lý tưởng: ${idealWeight}kg, Cân nặng tối đa: ${maxWeight}kg, Cân nặng tối thiểu: ${minWeight}kg`);
}
else {
    console.log("Phạm vi chỉ áp dụng cho chiều cao >100");
}
