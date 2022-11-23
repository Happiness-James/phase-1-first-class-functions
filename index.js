function receivesAFunction(greet){
    return greet();
}
function returnsANamedFunction(){
return (function named() { return "This is a named function" });
}
function returnsAnAnonymousFunction(){
    return (function () { return "This is an anonymous function" }); 
}


