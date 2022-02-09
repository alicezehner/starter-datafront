var list = [5,8,9,2,7,6,3,1,4];


// could define the function seperately but can also define a function within the parameter
// .filter returns elements in list calledback as true
var filtered = list.filter(function callback(item){
    // return true for included items
    return item >5;
});

console.log(filtered);