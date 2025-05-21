

 const reducer = (state, action) =>{
    switch (action.type){
        case "increment":(state)=> state+1
        case "decrement":(state)=> state-1
    }
 }

function createStore (reducer, initialState) {
    let state = initialState;
    let listeners = [];

    function getState(){
        return state;
    }
    function dispatch(action){
        state = reducer(state, action);
        listeners.forEach((listener)=>{
            listener()
        })
    }
    function subscribe(listener){
        listeners.push(listener)
        return () => {
            const index = listeners.indexOf(listener);
            if(index > -1){
                listeners.splice(index, 1)
            }
        }
    }
    dispatch({type: "@@INIT"});
    return {getState, dispatch, subscribe}
}