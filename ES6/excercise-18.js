const  myFunction = (callback, delay = 1000) => {
    setTimeout(callback, delay);
 }
  
const  callback = () => {
    console.log('Call back is called');
}
  
console.log(myFunction(callback, 2000))