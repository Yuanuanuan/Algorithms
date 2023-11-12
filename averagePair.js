// 找出第一組數組中能取平均會等於後面的num的一對


// function averagePair(arr, num) {
//   let result = []
//   for (let i = 0; i < arr.length; i++) {
//     for(let j = i + 1; j < arr.length - 1; j++) {
//       if ((arr[i] + arr[j]) / 2 === num) {
//         result.push([arr[i], arr[j]])
//       }
//     }
//   }
//   return result
// }

// console.log(averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5))


// answer
function averagePair(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let result = [];

  while (right > left) {
    let avg = (arr[left] + arr[right]) / 2
    if (avg > num) {
      right--;
    } else if (avg < num) {
      left++;
    } else if (avg === num) {
      result.push([arr[left], arr[right]])
      right--;
      left++;
    }
  }
  
  return result;
}

console.log(averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5))