const repeatString = function(str,n) {
        let temp = "";
    if(n<=-1){
        temp = "ERROR";
    } else{
        for(i=n;i>0;i--) {
            temp+=str;
        }
    }
    return temp;
};

// Do not edit below this line
module.exports = repeatString;
