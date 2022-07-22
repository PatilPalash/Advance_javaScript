// Synchronous code runs in sequence. This means that each operation must wait for the previous one to complete before executing.
console.log('One');
console.log('Two');
console.log('Three');
// LOGS: 'One', 'Two', 'Three'

const fun2 = () => {
    console.log('fun2 is starting');
}
const fun1 = () => {
    console.log('fun1 is starting');
    fun2();
    console.log('fun1 is ending');
}
fun1();



// Asynchronous code runs in parallel. This means that an operation can occur while another one is still being processed.
console.log('One');
setTimeout(() => console.log('Two'), 100);
console.log('Three');
// LOGS: 'One', 'Three', 'Two'


const fun3 = () => {
    
    setTimeout(() => {
        console.log('fun2 is starting');
    }, 3000);
}
const fun4 = () => {
    console.log('fun1 is starting');
    fun3();
    console.log('fun1 is ending');
}
fun4();