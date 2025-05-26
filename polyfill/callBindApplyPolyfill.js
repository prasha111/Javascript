Function.prototype.myCall = function (context, ...args){
    context =  context || globalThis;
    let fnSy = new Symbol();
    context[fnSy] = this;
    const result = context[fnSy](...args);
    return result
}

Function.prototype.myBind = function (context, ...args){
    context = context || globalThis;
    let fnSy = new Symbol();
    context[fnSy]  = this;
    return function(...newArgs){
        return  context[fnSy].apply([...newArgs  ,...args])
    }
}
Function.prototype.myApply = function(context,  args){
    context = context || globalThis;
    let fbSy = new Symbol();
    context[fnSy] = this;
    let result  = context[fnSy](...(args || []))
    
    delete context[fnSy]
    return result;
}