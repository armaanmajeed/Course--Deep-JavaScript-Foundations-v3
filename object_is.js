// Creating Object.is function of JS
if (!Object.is || true) {
    Object.is = function ObjectIs (a, b) {
        var aNegZero = isItNegZero(a);
        var bNegZero = isItNegZero(b);

        if (Number.isNaN(a) && Number.isNaN(b)) {
            return true;
        } else if (aNegZero || bNegZero) {
            return aNegZero && bNegZero;
        } else {
            return a === b;
        }

        function isItNegZero(x) {
            return x === 0 && (1/x) === -Infinity;
        }
    }
}

// Tests
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);