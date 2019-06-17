//tao 1 mang
let books =['tinhoc','nghethuat','do hoa','xa hoi'];
books.push('the gioi dong vat');
console.log(books.valueOf());
// while (books.length>0){
//     books.pop();
//     console.log(books.valueOf());
// }
// for(i=0;i<books.length;i++){
//     console.log(books[i])
// }

while (books.length>0){
    books.shift();
    console.log(books.valueOf());
}
// let joinArray = books.join('-');
// let check = books.valueOf();
// console.log(check);
// console.log(joinArray);
//tao 1 so
// let a = 1650.008;

// function addCommas(nStr) {
//     nStr += '';
//     var x = nStr.split('.');
//     var x1 = x[0];
//     var x2 = x.length > 1 ? ',' + x[1] : '';
//     var rgx = /(\d+)(\d{3})/;
//     while (rgx.test(x1)) {
//         x1 = x1.replace(rgx, '$1' + '.' + '$2');
//     }
//     return x1 + x2;
// }
// console.log(addCommas(a));