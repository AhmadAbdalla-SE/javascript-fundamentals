var createCounter = function(init) {
    let currentValue = init
    return {
        increment() {
        currentValue++
        return currentValue;
        },
        decrement() {
        currentValue--
        return currentValue;
        },
        reset() {
            return currentValue = init
        }
    }
};