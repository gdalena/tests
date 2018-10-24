/*
function isEven(arr) {
	var count = 0
	for(ele of arr) { 
		if(ele % 2 == 0) {
			count++ }
	
} 
 return count
}
*/

function isEven(arr) {
	var count = 0
	arr.forEach(function(ele,i,arr) { 
		if(ele % 2 == 0) {
			count++ }
} )
 return count
}
/*
function isEven(arr) {
	
arr.forEach(function(a,b) {
	var count = 0
	a % 2 == 0
	count++
	return count
}) 
} 
*/
module.exports ={
    isEven
}
