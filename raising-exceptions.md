# Working with exceptions

##Intro
This readme will cover the usage of the following functions: throw, try, catch, finally:

## Why is exception handling useful
Exceptions are a way to deal with errors that can occur when your code is executed.  

To explain the concept I will start with a simple example.  
```javascript
function unreliableFunction(a,b){  
  var x = Math.random()  
  if (x<= 0.5){  
    console.log(a*b)  
    return a*b  
  }  
  else  
    console.log(y)  
}  
```  

This function is an unrealible one. When invoked, half of the times it will return the products of the 2 parameters. The rest of the times it will try to log in the console the value y. Since y was not declared anywhere, this will cause an error. In this case the error is handled by the environment and I will see something like this as output:

![img](~/imgs/s1.png)







