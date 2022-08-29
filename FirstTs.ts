//js -- same in ts
console.log("Hello");
//js
var n1:number =100;
var n2:number =200;
var n3:number = n1 + n2;
console.log(n3);
///
//JavaScript Object Notation : JSON
var obj1 = {};
var obj2 = {
            key:"value",
            name: "Meena"
            };
//access object values. Use '.'
obj2.key = "new value";
console.log(obj2.key);
////
var arr:string[] = ["Eena","Meena","Deeka"];
//access array
arr[0]="Teena"
console.log(arr[0]);
arr.push("Neena")
console.log("Value of 0th element is " + arr[0]);
console.log(arr)
console.log(obj2)
////////
var complexObj = {
                    k1:100,
                    k2:"string",
                    k3:[1,2,3],
                    k4:function(){console.log("Hello")},
                    k5:()=>console.log("Using lambdas")
                  };
console.log(complexObj.k1)
console.log(complexObj.k2)
console.log(complexObj.k3)
console.log(complexObj.k3[1])
console.log(complexObj.k3[0])
complexObj.k4();
complexObj.k5();

class Rectangle{
    public length:number
    public breadth:number
    public calcArea():number
    {
        return this.length*this.breadth
    }
    public Fun(party:string,IsItTrue:boolean):string{
        return "Having fun at " + party +" this party is "+IsItTrue+" for real for real bruhh"
    }
    // constructor(){
    //     this.length = 100;
    //     this.breadth = 200;
    // }
    constructor(...multiple:any[]){
        this.length = multiple[0]
        this.breadth = multiple[1]
    }
}
///
var objR1 = new Rectangle(70,964,678,8)
//objR1.length = 10;
//objR1.breadth = 5;
console.log(objR1.calcArea());
console.log(objR1.Fun("Taxtech celebration",true))
console.log(objR1)