//  let arr = [];
//  let count = 0;
//  for(let i=0; i < 3;i++){
//      let min = -100;
//      let max = 100;
//       arr[i] = ( Math.floor(Math.random() * (max - min)) + min)
//       let n = arr[i]>0;
//       if(n>0){
//           count += n;
//       }
//  }
//  console.log(arr)
//  console.log(`У масиві ${count} додатніх числа`)

//-------------------------------------------------------------------


//  let arr = [];
//  for(let i=0; i < 3;i++){
//     arr[i] = (Math.floor(Math.random() * 100))
//     if(arr[0]>arr[2]){
//         [arr[0], arr[2]]  = [arr[2], arr[0]];
//     }
//     console.log(arr)
//  }

 //------------------------------------------------------------

 
let arr = [];
let min = Math.min.apply(null, arr);
let max = Math.max.apply(null, arr);
let minIndex,maxIndex;

for(let i = 0; i <10;i++){
     arr[i] = (Math.floor(Math.random() * 100));
 }
console.log(arr)

for(let i = 0; i<arr.length; i++){
    if(min > arr[i]){
        min = arr[i];
        minIndex = i;  
    } 
    if(max < arr[i]){
        max = arr[i];
        maxIndex = i;  
    }  
}

swap = (arr, min, max) => {
  arr[min] = arr.splice(max, 1, arr[min])[0];
}

let sum = 0;
    for(let i = 0;i<arr.length; i++){
        if(i%2 == 1){
            sum += arr[i];
        }
    }
    
delEl = arr =>{
    arr.pop()
}

console.log(min)
console.log(max)
swap(arr,minIndex,maxIndex)
console.log(sum)
console.log(arr)
delEl(arr)
console.log(arr)