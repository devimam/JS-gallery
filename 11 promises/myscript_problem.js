// problem
function f1(){
  var x = "before timeout";
  console.log(x);
  // this asynchronous function will break the serial
  setTimeout(
    function (){
      x = "after 2 seconds";
      console.log(x);
    }
    ,
    2000
  );

}

function f2(){
  console.log("a line of function f2");
}

f1();
f2();
