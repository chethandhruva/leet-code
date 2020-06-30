/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    str = str.trim();
    const x = ['0','1','2','3','4','5','6','7','8','9'];
    const y = ['0','1','2','3','4','5','6','7','8','9', '-', '+'];
    let ans = '';
    const len = str.length;
    let i=1;
    if(y.includes(str[0])) {
       ans = str[0];
       while(i < len && (x.includes(str[i]))) {
            ans += str[i];
            i++;
        }
   }
    const range = Math.pow(2, 31);
    if(Math.abs(ans) >= range){
        if(ans[0] === '-') {
            return -range;
        }
        return range - 1;
    }
    return parseInt(ans, 10) || 0;
}
