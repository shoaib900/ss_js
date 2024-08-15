// alert('Hello, World!');


// a = 10;
// console.log(a)
// var a;

// function m(){
//     console.log("hello wrold")
// }

// m();

// var a = 10;
// function m(){
//     var b = 20;
//     console.log(a)
// }
// console.log(b)
// m();

// m(2,3)
// function m(a,b){
//     console.log(a * b)

// }

// function m(a,b){
//     console.log(a+b)
// }

// function m(a){ a * 2 }
// console.log(m(2));


// const ab = (s) => s
// console.log(ab(5))

// !function(){
//     console.log("hello world")
// }()

// (function(){
//     console.log("hello world")
// }())


// var arr = [1,5,3,4,2];
// console.log(arr)
// arr.push(8,9)
// console.log(arr)
// arr.pop()
// console.log(arr)

// arr[3] = 100
// console.log(arr)

// arr.unshift("shoaib","Raza")
// console.log(arr)
// arr.shift();
// console.log(arr)
// arr.splice(5,2,"shoaib","Raza")
// console.log(arr)

// var arr2 = arr.slice(1,3);
// console.log(arr2)

// var srt = arr.sort();
// console.log(srt)
// var rev = srt.reverse();
// console.log(rev)


// for (var i = 1;i <= 10; i++){
    // console.log(2 + "*"+ i  + " = " + i*2)
//     console.log(`2 * ${i} = ${i*2}`)

// var ab = `lorem ipsum hello 
// world`

// var i = 0;
// while(i < 10){
//     console.log("hello world" + i)
//     i++
// }


// var x =0;
// do{
//     console.log("hello Pakistan");
//     x++
// }while(x <0)

// var arr = [1,2,3,4,5];

// for( item in arr){
//     console.log(item)
//     console.log(arr[item])
// }

// for ( value of arr){
//     console.log(value)
// }


// var firstname = [ "asad","husnain","bilal"]
// var lastname = ["ali","umer","asif"];
// var fullname =[]

// for (var i = 0; i < firstname.length; i++){
//     for(var j = 0; j < lastname.length; j++){
//         // console.log(firstname[i] + lastname[j])
//         fullname.push(firstname[i] + " " + lastname[j])
//     }
// }
// console.log(fullname);


// var a = Math.random()*1000;
// console.log(a)

// var b = Math.floor(11.99999);
// console.log(b)

// var c = Math.ceil(11.1111);
// console.log(c);

// var d = Math.round(5.500);
// console.log(d)

// var a = Math.round( Math.random()* 10)
// console.log(a)

// var input = parseInt(prompt("Enter a number"))
// console.log(input)

// if ( input === a){
//     console.log("pass")
//     var res = document.getElementById("demo")
//     res.innerHTML = "hello man you passed it";
//     res.style.color = "green";
//     res.style.backgroundColor = "grey"

// }else{
//     console.log("fail")
// }

// var mySym = Symbol("key1");

// var obj = {
//     id: "01",
//     [mySym]: "key1",
//     name:"Shoaib",
//     "full name":"Shoaib Raza",
//     age:25,
// }

// obj.class = "BSCS"

// console.log(obj)

// var obj2={class:"BSCS", name:"Raza", age:26}
// console.log(Object.assign(obj,obj2))

// console.log(obj.name)
// console.log(obj["full name"])
// obj.name = "Asad"
// console.log(obj["name"])

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));


// var obj = {
//     firstname:"Shoaib",
//     lastname:"Raza",
//     age:25,
//     class:"BSCS",
// }
// obj.fullname = function(a){
//     return  this.firstname + " " + this.lastname + a;
// }
// console.log(obj.fullname(34) )
// console.log(Object.values(obj))

// var a = 10;
// var b = a;
// console.log(a, b)
// b = 20;
// console.log(a,b)

// var obj1 = {name:"shoaib", age:25};
// var obj2 = obj1;
// console.log(obj1,obj2)

// obj2.name = "Raza";
// console.log(obj1,obj2)


// var a = Math.round(Math.random() * 10)
// console.log(a)
// var b = parseInt(prompt("Enter your no."))
// console.log(b)
// if (a === b) {
//     var res = document.getElementById("demo")
//     res.style.backgroundColor = "black";
// } else {
//     var res = document.getElementById("demo")
//     res.style.backgroundColor = "green"
//     res.innerHTML = "Hello man you passed it";
// }

        //  Destructuring objects

        // var obj ={
        //     name:"Shoaib",
        //     age:25,
        //     classb:"BSCS"
        // }

        // console.log(obj.name,obj.age,obj.classb);
        // var {name, age,classb} = obj
        // console.log(name,age,classb);




        //  Date objects

        // var d = new Date("2022")
        // console.log(d)
        // console.log(d.getDate());
        // console.log(d.getDay())
        // console.log(d.getFullYear())
        // console.log(d.getMonth())

        //  exception handling

        // var x;
        // try{
        //     console.log(x)
        // }catch(err){
        //     console.log("Error", err)
        // }finally{
        //     console.log("at ease")
        // }

        //  debugger

        // console.log("hello world")
        // debugger;
        // console.log("hello class")


        //  setTimeout/ setInterval

        // setTimeout( ()=>{
        //     console.log("C")
        // }, 0);
        // console.log("A")
        // console.log("B")
        // setInterval( ()=> {
        //     console.log("A")
        // },5000)


        // callback method 

        // function m1(){
        //     console.log("call function m1")
        // }
        // function m2(a){
        //     console.log("call function m2")
        //     a();
        // }
        // m2(m1);

        // promise 

        // var p = new Promise((resolve, reject)=>{
        //     setTimeout(()=>{
        //         console.log("hello world")
        //         // resolve(true)
        //         reject("err")
        //     },0)
        // })

        // p.then( value => {
        //     console.log(value)
        // })

        // p.catch( err=> {
        //     console.log(err)
        // })

        // console.log(p)
        

        // async and await

    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))


//    async function g1(){
//         await  fetch('https://jsonplaceholder.typicode.com/todos/jugnu')
//            .then(response => response.json())
//            .then(json => console.log(json))
//            .catch( err => {
//             console.log(err)
//            })
//     }
//     g1();


        // class 

        // class Animal{
        //     constructor(name,age){
        //         this.name = name;
        //         this.age = age;
        //     }

            // setData(name,age){
            //     this.name = name;
            //     this.age = age;
            // }

        //     getData(){
        //         console.log(this.name, this.age);
        //     }
        // }
        // var obj = new Animal();
        // obj.setData("Shoaib",25);
        // obj.getData();

        // var obj2 = new Animal()
        // obj2.setData("Raza",26);
        // obj2.getData();
        
        // var obj1 = new Animal("Shoaib",25);
        // var obj2 = new Animal("Raza",26);
        // obj1.getData();
        // obj2.getData();