let year = +prompt("Xin mời nhập năm cần tìm");
if(year%4==0 && year%100!=0){
    document.write(`${year} là năm nhuận`)
}else if(year%100==0 && year%400!=0){
    document.write(`${year} ko nhuận`)
}else if(year%100==0 && year%400==0){
    document.write(`${year} nhuận`)
}else{
    document.write(`${year} ko nhuận`)
}
