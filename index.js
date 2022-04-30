function receivesAFunction(eatBreakfast) {
    eatBreakfast();
}

const bet = function fn(a, b) {
    return a + b
}
function returnsANamedFunction() {
    return bet
}

function returnsAnAnonymousFunction() {
    return function() {

    }
}