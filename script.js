function Solve(val) {
    var v = document.getElementById('go');
    v.value += val;
 }
 function Result() {
    var num1 = document.getElementById('go').value;
    var num2 = eval(num1);
    document.getElementById('go').value = num2;
 }
 function Clear() {
    var inp = document.getElementById('go');
    inp.value = '';
 }
 function Back() {
    var ev = document.getElementById('go');
    ev.value = ev.value.slice(0,-1);
 }