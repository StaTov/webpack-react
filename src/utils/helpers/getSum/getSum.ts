export const getSum = <T extends number>(num1: T, num2: T) => {
    if (
        num1 === Infinity
        || num2 === Infinity
        || num1 === -Infinity
        || num2 === -Infinity
    ) {
        throw new TypeError('arguments does not match Infinity or -Infinity')
    }
    return num1 + num2;
}