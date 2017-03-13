function getPrime(inpu){
	var arr=[]
	var i;
    for(i=2; i<=inpu; i++){
    		if(check(i)==true){
    		arr.push(i)
    	
    }
}
    	return arr;
}
function check( n) {
    for( i=2;i<n;i++) {
        if(n%i==0)
            return false;
    }
    return true;
}
module.exports = {
	getPrime: getPrime
}