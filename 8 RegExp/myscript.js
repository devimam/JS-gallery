// declataion
/* format: /patter/flag */
/* flag: i = case-insensitive, g = global etc. */
var re1 = /^[A-Za-z][A-Za-z_#-]*$/;
var re2 = /^[A-Z]{2,5}$/i;
var re3 = new RegExp('[A-Za-z]{1,5}'); // using RegExp class
var re4 = new RegExp('[A-Za-z]{1,5}','i');

// test() function
var re2 = /^[A-Z]{2,5}$/i;
var str = "abcd";
if(re2.test(str)){
    console.log("match found");
}
else{
    console.log("no match found");
}
