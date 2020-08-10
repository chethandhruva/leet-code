/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var sum = 0, len = s.length, i;
    for(i=0; i<len; i++) {
        sum *= 26;
        sum += s.charCodeAt(i) - 64;
    } 
    return sum  
};
