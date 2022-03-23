// CLOSURE //

const addCounter = () => {
    let x = 0;
    return () => {
        return x++
    }
}

const counter = addCounter()

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

// THIS //

function fn() {
    console.log(`Hello, ${this.nickname}`);
}

fn()

// DESTRUCTURING //

const arr = [1, 2, 3, 4];

const [uno, dos] = arr;

console.log(`>`, uno, dos);