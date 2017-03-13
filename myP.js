function getPrime(inpu){
	var list=[]
	var i;
    for(i=2; i<=inpu; i++){
    		if(check(i)==true){
    		list.push(i)
    	
    }    
}
    	return list;
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