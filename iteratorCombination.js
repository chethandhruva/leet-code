/**
 * @param {string} characters
 * @param {number} combinationLength
 */


function recur(combs, len, combinationLength, ans, out='', i=0) {
    if(combinationLength > len) return
    
    if(combinationLength == 0){
        ans.push(out);
        return;
    }
    
    for(let j=i; j<len; j++ ){
         recur(combs, len, combinationLength-1, ans, `${out}${combs[j]}`, j+1);
    }
     
};

var CombinationIterator = function(characters, combinationLength) {
    let combs = characters.split(''), len = characters.length, ans = [];
    recur(combs, len, combinationLength, ans);
    this.ans = ans;
    console.log(ans);
    
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
    return this.ans.shift();
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
    return this.ans.length ? true: false;
    
};

/** 
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
