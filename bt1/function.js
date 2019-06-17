// let add= ((a,b)=>{
//         if(typeof a!=='number' || typeof b !== 'number'){
//             throw{
//                 name:'Loi',
//                 message:'gia tri truyen vao phai la so'
//             }
//         }
//         return a+b
// })
// console.log(add(10,'[k[['))


// function tinhtoan(value){
//         switch(value){
//             case '+':
//                 return function(a,b){
//                     return a+b
//                 } 
//             case '-': 
//                 return function(a,b){
//                     return a-b
//                 }
//             case '*':
//                 return function(a,b){
//                     return a*b
//                 }
//             case '/':
//                 return function(a,b){
//                     return a/b
//                 }                
//         }
// }

// console.log(tinhtoan('-')(10,12))
// console.log(tinhtoan('/')(10,15))
// console.log(tinhtoan('*')(14,20))


let checkNumber = function(val){
        let a = parseFloat(val)
        return{
            result_1 : function(){
              return  a > 0 ? a : -a
            },
            result_2: function(){
                return a*a
            }
        }
}(-5)
console.log(checkNumber.result_1() + ',' +checkNumber.result_2());