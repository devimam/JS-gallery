// promise
function f1(){
    return new Promise(
	    function(resolve, reject){
			// asynchronous operation(function body) here
			var x = "before timeout";
			console.log(x);

			setTimeout(
			  function (){
				x = "after 2 seconds";
				console.log(x);

				resolve();
			  }
			  ,
			  2000
        );
    });
}

function f2(){
  console.log("a line of function f2");
}

var prom=f1();
prom.then(f2);
