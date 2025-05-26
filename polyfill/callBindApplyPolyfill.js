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