let arr = []

function forLoop(array){
   for (let i = 0; i < 25; i++) {
     arr[i] = `"I am ${i} strange loop${i === 0 ? '' : 's'}."`
   }
   console.log(arr)
  return arr
}
