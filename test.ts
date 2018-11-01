`var foo: string = "123";
console.log(typeof(foo));
console.log(foo);

//ClassAndMethod
class greeting { 
    greet():void { 
       console.log("Hello World!!!") 
    } 
 } 
 var obj = new greeting(); 
 obj.greet();

//ForLoop
var num:number = 5; 
var i:number; 
var factorial = 1; 

for(i = num;i>=1;i--) {
   factorial *= i;
}
console.log("The factorial  is "+factorial)
// forInLoop
var j:any; 
var n:any = "a b c" 

for(j in n) {
   console.log(n[j])  
}


//whileLoop
var num:number = 5; 
var factorial:number = 1; 

while(num >=1) { 
   factorial = factorial * num; 
   num--; 
} 
console.log("The factorial  is "+factorial);  


//DOWhile
var n:number = 10;
do { 
   console.log(n); 
   n--; 
} while(n>=0); 

//InfiniteLoops
for (; ;) {
    console.log("This is an endless loop")
}

while(true) { 
    console.log("This is an endless loop") 
 }

//Function
function newFunction() {   
    //function definition 
    console.log("function called") 
} 
newFunction()


//Positional Parameters - 
function new_param(n1:number,s1:string) { 
    console.log(n1) 
    console.log(s1) 
 } 
 new_param(123,"this is a string")


//Optional parameters (: ?)
function disp_details(id:number,name:string,mail_id?:string) { 
    console.log("ID:", id); 
    console.log("Name",name); 
    if(mail_id!=undefined)  
    console.log("Email Id",mail_id); 
 }
disp_details(123,"testUser");
disp_details(111,"New","testUser@mail.com");

//Rest parameters (...)
function addNumbers(...nums:number[]) {  
    var i;   
    var sum:number = 0; 

    for(i = 0;i<nums.length;i++) { 
       sum = sum + nums[i]; 
    } 
    console.log("sum of the numbers",sum) 
 } 
 addNumbers(1,2,3) 
 addNumbers(10,10,10,10,10)
 addNumbers(1823,31-9031,103971)

//Default parameters 
function calculate_discount(price:number,rate:number = 0.50) { 
    var discount = price * rate; 
    console.log("Discount Amount: ",discount); 
 } 
 calculate_discount(1000) 
 calculate_discount(1000,0.30)


//anonymous function 
var msg = function() { 
    return "Anonymous Function Called";  
} 
console.log(msg())

//Recursion Function
function factorial(number) {
    if (number <= 0) {        
       return 1; 
    } else {     
       return (number * factorial(number - 1));     
    } 
 }; 
 console.log(`Factorial is ${factorial(6)}`);    

//FunctionOverloading 
function disp(s1:string):void; 
function disp(n1:number,s1:string):void; 

function disp(x:any,y?:any):void { 
   console.log(x); 
   console.log(y); 
} 
disp("abc") 
disp(1,"xyz");


// Numbers 
console.log("TypeScript Number Properties: "); 
console.log("Maximum value that a number variable can hold: " + Number.MAX_VALUE); 
console.log("The least value that a number variable can hold: " + Number.MIN_VALUE); 
console.log("Value of Negative Infinity: " + Number.NEGATIVE_INFINITY); 
console.log("Value of Negative Infinity:" + Number.POSITIVE_INFINITY);

// prototypeData
function employee(id, name) {
    this.id = id;
    this.name = name;
}

var emp = new employee(123, "newuser");
employee.prototype.email = 'newuser@mail.com';
console.log('Employee Id :' + emp.id);
console.log('Employee Id :' + emp.name);
console.log('Employee Id :' + emp.email);

//Array
var arrayNew:string[]; 
arrayNew = ["1","2","3","4"] 
console.log(arrayNew[0]); 
console.log(arrayNew[1]);
console.log(arrayNew[2]); 
console.log(arrayNew[3]);
console.log(arrayNew[4]); 

var arr_names:number[] = new Array(10)  
for(var i = 0;i<arr_names.length;i++) { 
   arr_names[i] = i * 10
   console.log(arr_names[i]) 
}`
