// let student =
// [
//     {
//         name:'tuan',
//         age:35,
//         addr:'26 cao ba quat'
//     },
//     {
//         name:'truc',
//         age:32,
//         add:'26 cao ba quat'
//     },
//     {
//         name:'chau',
//         age:6,
//         add:'26 cao ba quat'
//     },
//     {
//         name:'ngan',
//         age:3,
//         add:'cao ba quat'
//     }
// ]

// //console.log(student);
// //console.log(student[0]);
// console.log(student[1])
// function student (name,age,addr ){
//     this.name= name,
//     this.age = age,
//     this.addr = addr
// }
//     let husband =  new student('tuan',35,'26 cao ba quat')
//     //console.log(student_1)
//     let wife = new student('truc',32,'26 cao ba quat')
   // console.log(student_2);

    //tao 1 phuong thuc
    // student.prototype.showInfo = function(){
        
    //     let info =  this.name + '-' + this.age + '-' + this.addr
    //     console.log(info)
    // }
    // husband.showInfo()
    // wife.showInfo()
    // student.prototype.showInfo =function(){
    //    let info = this.name +'-'+this.age+'-'+this.addr     
    //    return  info
    // }
    // console.log(husband.showInfo())
    // console.log(wife.showInfo())

    function family(name,age,job){
        this.name = name,
        this.age = age,
        this.job = job
    }
    // let husband = new family('tuan',35,'it')
    // let wife = new family ('truc',32,'kt')
    // let child = new family('chau',6,'mg')
    // family.prototype.getInfo = function(){
    //         let info = this.name +'-'+ this.age +'-'+ this.job
    //         return info
    // }
    // console.log(husband.getInfo())
    // console.log(child.getInfo())
    let x1 = new Date('01-02-2017');
    console.log(x1)