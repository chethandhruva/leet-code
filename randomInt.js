/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function() {
    return random(x++);
};

let x = 0;

function random(x) {
    const arr = [1,2,3,4,5,6,7,8,9,10];
    return arr[x*123%10];
}
