var t1 = document.getElementById("t1");
var t2 = document.getElementById("t2");
var t3 = document.getElementById("t3");
function f1() {
    try {
        var c = parseFloat(t1.value) + parseFloat(t2.value);
    }
    catch (e) {
        alert("Error: " + e.description);
    }
    t3.value = c.toString();
}
function f2() {
    var c = parseFloat(t1.value) - parseFloat(t2.value);
    t3.value = c.toString();
}
function f3() {
    var c = parseFloat(t1.value) * parseFloat(t2.value);
    t3.value = c.toString();
}
function f4() {
    var c = parseFloat(t1.value) / parseFloat(t2.value);
    t3.value = c.toString();
}
function f5() {
    var c = Math.pow(parseInt(t1.value), parseInt(t2.value));
    t3.value = c.toString();
}
function f6() {
    var c = Math.sin(parseInt(t1.value) * Math.PI / 180);
    t3.value = c.toString();
}
function f7() {
    var c = Math.cos(parseInt(t1.value) * Math.PI / 180);
    t3.value = c.toString();
}
function f8() {
    var c = Math.tan(parseInt(t1.value) * Math.PI / 180);
    t3.value = c.toString();
}
//# sourceMappingURL=app.js.map