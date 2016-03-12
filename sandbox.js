function unreliableFunction(a,b){
  var x = Math.random()
  if (x<= 0.5){
    console.log(a*b)
    return a*b
  }
  else 
    console.log(y)
}

try {
	unreliableFunction(2,3)
} finally {
	console.log("the program has reached the end")
}