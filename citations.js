/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    var sorted = citations.sort((a,b) => a-b);
    var len = citations.length, h = 0;
    var start = 0, end = len-1, mid;
    while(start <= end){
        mid = Math.floor(start + (end-start)/2);
        if(citations[mid] >= (len - mid)) {
                h = (len-mid);
                end = mid-1;
            }
        else{
                start = mid + 1;
            }
        }
    return h;    
};
