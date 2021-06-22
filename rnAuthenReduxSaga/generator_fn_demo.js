


function* count(i){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const c = count(0);
console.log(c.next().value);
console.log(c.next().value);
console.log(c.next().value);
console.log(c.next().value);
console.log(c.next().value);
