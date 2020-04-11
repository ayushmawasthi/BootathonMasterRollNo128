var t1 : HTMLInputElement= <HTMLInputElement>document.getElementById("t1");
var t2 : HTMLInputElement= <HTMLInputElement>document.getElementById("t2");
var t3 : HTMLInputElement= <HTMLInputElement>document.getElementById("t3");  
function f1()
{
    try
    {
    var c: number= parseFloat(t1.value) + parseFloat(t2.value);
    }
    catch ( e ) {
        alert("Error: " + e.description );
     }
    t3.value=c.toString();
}
function f2()
{
    var c: number= parseFloat(t1.value) - parseFloat(t2.value);
    t3.value=c.toString();
} 
function f3()
{
    var c: number= parseFloat(t1.value) * parseFloat(t2.value);
    t3.value=c.toString();
} 
function f4()
{
    try
    {var c: number= parseFloat(t1.value) / parseFloat(t2.value);}
    catch ( e ) {
        alert("Error: " + e.description );
     }
    t3.value=c.toString();
} 
function f5()
{
    var c: number= Math.pow(parseInt(t1.value),parseInt(t2.value));
    t3.value=c.toString();
}
function f6()
{
    var c: number= Math.sin(parseInt(t1.value)*Math.PI/180);
    t3.value=c.toString();
}
function f7()
{
    var c: number= Math.cos(parseInt(t1.value)*Math.PI/180);
    t3.value=c.toString();
}
function f8()
{
    var c: number= Math.tan(parseInt(t1.value)*Math.PI/180);
    t3.value=c.toString();
}
