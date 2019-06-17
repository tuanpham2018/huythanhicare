let add = function(a,b){
    if(isNaN(a) || isNaN(b)){
        return{
           err:'Wrong, check input data'
        }
    }
    return a+b
}
try {
    let a = add(10,'i')
    console.log(a)
} catch(error) {
    throw{
     error
    }
}