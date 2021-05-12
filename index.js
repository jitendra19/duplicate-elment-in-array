function printRepeating(arr, size) {
  var i;
  document.write('The repeating elements are : ');

  for (i = 0; i < size; i++) {
    debugger;
    if (arr[Math.abs(arr[i])] > 0)
      arr[Math.abs(arr[i])] = -arr[Math.abs(arr[i])];
    else document.write(Math.abs(arr[i]) + ' ');
    console.log(arr);
  }
}

/* Driver program to test the above function */

var arr = [4, 2, 4, 5, 2, 3, 1, 3, 6, 5];
var arr_size = arr.length;
printRepeating(arr, arr_size);
