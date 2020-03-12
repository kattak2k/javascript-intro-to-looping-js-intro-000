function forLoop(array) {
   for ( let i = 0; i < 25; i++) {
     if (i === 1) {
       array.push(`I am 1 strange loop.`)
     } else {
       array.push(`I am ${i} strange loops.`)
     }
  }
  return array;
}

function whileLoop(n) {
  let countdown = n;

    while (countdown > 0) {
      console.log(--countdown)
    }
    return "done";
  }

function doWhileLoop(array) {
  console.log("I run once regardless." 1 time when passed an integer of 0 as a parameter.)

  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    console.log("I run once regardless.")
    array.pop();
  } while (array.length > -1 && maybeTrue());
    return array;
}
