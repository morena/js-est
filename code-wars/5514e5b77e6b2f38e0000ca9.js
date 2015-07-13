/* http://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/train/javascript
Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

For example an array [2, 3, 9] equals 239, add one would return an array [2, 4, 0].

[4, 3, 2, 5] would return [4, 3, 2, 6]

Only positive, single digit integers are allowed in the array so the function should return null if any of the array values are negative or more than 10

[1, -9] would return null.

Test.assertSimilar(upArray([2,3,9]), [2,4,0]);
Test.assertSimilar(upArray([4,3,2,5]), [4,3,2,6]);
Test.assertSimilar(upArray([1,-9]), null);
Test.assertSimilar(upArray(["a", "b", "c"]), null);
Test.assertSimilar(upArray(
  [ 9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7 ]),
  [9,2,2,3,3,7,2,0,3,6,8,5,4,7,7,5,8,0,8]));
*/
function isAnInt(n){
  return n === Number(n);
}
function upArray(arr){
  console.log(arr);
  
  if(arr.length === 0){
    return null;
  }
  //increase the last item
  var lastItem = arr.pop(); 
  if(lastItem >= 0 ){
    lastItem+=1;
    arr.push(lastItem);
   }else{
     return null;
   }
  
  for (var i = arr.length - 1; i >= 0; i--) {
    //console.log(arr);
    //console.log("current value is "+arr[i]);

    var isInt = isAnInt(arr[i]),
        breakCheck1 = false;
        
    if(arr[i] < 0 || arr[i] >10 || isInt === false){
      breakCheck1 = true;
    }
    if (breakCheck1) {
      return null;
      break;
    }
    
    if(arr[i] == 10){
      arr[i] = 0;
      if(arr[i-1] == undefined){
        arr.unshift(1);
      }else{
        arr[i-1]+=1;
      }
      //console.log("now array is "+arr);
    }
  };

  return arr;
}