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
function composeArrayValue (arrayValue, i){
  var numbeToString = i.toString();
  arrayValue = arrayValue+numbeToString;

  return arrayValue;
}
function upArray(arr){
  //console.log(arr);
  
  if(arr.length === 0){
    return null;
  }
	var arrayLength = arr.length-1,
      isInt = false,
      breakCheck1 = false,
      arrayValue = '',
      numbeToString = '',
      newArray = [],
      finalArray = [];
  
	for(var i = arrayLength; i >=0; i--){
    isInt = isAnInt(arr[i]);
    if(arr[i] < 0 || arr[i] >10 || isInt === false){
      breakCheck1 = true;
    }
    if (breakCheck1) {
      return null;
      break;
    }


    if(arr[i] == 9){
      //console.log(i);
        //console.log("arr["+i+"] is a 9");
    	arr[i] = 0;
	    arrayValue = composeArrayValue (arrayValue, arr[i]);
        //console.log("arrayValue is "+arrayValue);
        if(arr[i-1] == undefined){
          arr[i-1] = 1;
        }else{
          arr[i-1] = arr[i-1]+1;
        }
        //console.log("eccola "+arr);
        //console.log("yo "+i);
        i--;
        break;
        //console.log("arr[i-1] is now "+arr[i-1]);
    }else if(arr[i] == 10){
      console.log(i);
      console.log("it is a 10");
		  arr[i] = 1;
      console.log(arr);
	    arrayValue = composeArrayValue (arrayValue, arr[i]);
      console.log("arrayValue is "+arrayValue);
      if(arr[i-1] == undefined){
        arr[i-1] = 1;
      }else{
        arr[i-1] = arr[i-1]+1;
      }
      console.log("yo "+i);
      i--;
      break;

    }else{
      //console.log(i);
        //console.log("arr["+i+"] is a  "+arr[i]);
        arr[i] = arr[i]+1;
        //console.log("arr[i] (arr["+i+"]) is now "+arrayValue);
	    arrayValue = composeArrayValue (arrayValue, arr[i]);
        //console.log("arrayValue is "+arrayValue);
    }
    
    if (breakCheck1) {
      return null;
      break;
    }
	}
  
  newArray = (""+arrayValue).split("");
  newArray.reverse();
  for(var b = 0; b < newArray.length; b++){
    finalArray.push(parseInt(newArray[b]));
   }
  return finalArray;
}

upArray([2,3,9]), [2,4,0];
upArray([1,-9]), null



/*function isAnInt(n){
  return n === Number(n);
}
function upArray(arr){
  console.log(arr);
  if(arr.length === 0){
    return null;
  }
  var arrayValue = '',
      newArrayAsString = [],
      newArray = [],
      numbeToString = '',
      newArrayValue = 0,
      breakCheck1=false,
      isInt = true,
      arrayValueAsInt= 0;
  for(var i = 0; i < arr.length ; i++){
    isInt = isAnInt(arr[i]);
    if(arr[i] < 0 || arr[i] >=10 || isInt === false){
      breakCheck1 = true;
    }
    if (breakCheck1) {
      break;
    }
    numbeToString = arr[i].toString();
    arrayValue = arrayValue+numbeToString;
  }
  if (breakCheck1) {
    return null;
  }
  arrayValueAsInt = parseInt(arrayValue);
  newArrayValue = arrayValueAsInt+1;
  newArrayAsString = (""+newArrayValue).split("");
  for(var b = 0; b < newArrayAsString.length; b++){
    newArray.push(parseInt(newArrayAsString[b]));
   }
  return newArray;
}*/