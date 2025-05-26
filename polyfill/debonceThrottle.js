const debounce = function (fn, delay){
    let result = {};
    let time =  null;
    return function(args){
        clearTimeout(time);
        time = setTimeout(()=>{
            fn.call(args, this)
        },[])
    }
}
const throttle  = function (fn , delay){
    let result  = {};
    let time = 0;
    let current = new Date().getTime();
    let now  = null;
    return function(args){
        if(current-time>delay){
            fn(args)
            console.log("throttle", now ,time)
            time = current;
        }
    }
}