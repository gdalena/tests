
function twoArrays(arr,arr2) {
	arr.length == arr2.length
	var count = 0;
	for(i=0; i < arr.length; i++) {
		if(arr[i] == arr2[i]) {
		count++
	}
}
return count
}


/*function twoArrays(arr, arr2) {
	var count = 0
	for (var i = 0; i <arr.lenght; i++) {
		if (arr[i] == arr2[i]) {count++}
	}
	return count
}
*/
module.exports ={
    twoArrays
}