const a = 5000
let b = "10AAAA"
let c = parseInt(b)
console.log(c)
let d = typeof(c)
debugger;
console.log(d)

//boolean
let gt1 = true
let gt2 =false
if(gt1){
    console.log('cai nay dung')
}
else
{
    console.log('cai nay sai')
}

if(!gt1 && gt2){
    console.log('cai nay dung la sai roi')
}
else{
    console.log('khong sai dau')
}

//string
let txt = 'Pham minh tuan'
let txt_2 = 'Pham\'tuan'
console.log(txt)
console.log(txt_2)

//object
let student ={
    name:'tuan',
    age: 18,
    email:'as@gmai.com'
}
console.log(student.name + ' - ' + student.age+'-'+ student.email);
student.add = "26 cao ba quat"
console.log(student.add);


