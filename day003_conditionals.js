// first we start the function
weirdStatus = () => {
    let N = Math.floor(Math.random() * 100) 
    console.log(N);
// assign a random number to the variable, log to check it

    if (N % 2 !== 0) {
        console.log("Weird");
    } else {
        if (N >= 2 && N <= 5) {
            console.log("Not Weird");
        } else if (N >= 6 && N <= 20) {
            console.log("Weird");
        } else {
            console.log("Not Weird");
        }
    }
}
//if else conditional statements to decide the output


weirdStatus()
// call the function




// some practice code
// const L = Math.floor
// const I = Math.floor(Math.random())
// const J = Math.floor(Math.random() * 100) +1 1
// console.log(L);
// console.log(I);
// console.log(J);


