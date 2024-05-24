// alert();

let result = document.getElementById("result");
// Defining result as a global variable so it can be use anywhere
function input(num) {
    // alert(num);
    result.value += num;
}
//Creating a function for calculation purpose
function calc() {
    let output = eval(result.value);
    result.value = output;
}
//Creating a function to clear screen
function clears() {
    result.value = '';
}