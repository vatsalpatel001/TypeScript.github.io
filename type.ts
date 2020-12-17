console.log("hello");

var x:number;
x=5;
// x="hj"
let y;
y="67dfgdfg";
console.log((<string>y).charAt(1))
console.log((y as string).charAt(1))
y=5;
console.log((<number>y).toFixed(1))

var xc = function(y){
    console.log(y)
}

var xc1 = (y) => {
    console.log(y)
}

var xc2 = (y:string) =>  console.log(y);

xc2("arrroeee");


interface objq{
    firstnmae:string,
    lastname:string
}

var PrintVal1 = (objq:objq) => {
    console.log(objq)
}

PrintVal1({firstnmae:"Vatsal",lastname:"Patel"})