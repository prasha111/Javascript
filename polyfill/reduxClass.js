const reducer = (state, action) =>{
    switch (action.type){
        case "increment":(state)=> state+1
        case "decrement":(state)=> state-1
    }
 }
class Redux{
    constructor(initialState){
        this.state = initialState
        this.listeners = []
    }
    getState(){
        return state;
    }
     dispatch(action){
        state = reducer(state, action);
        listeners.forEach((listener)=>{
            listener()
        })
    }
     subscribe(listener){
        listeners.push(listener)
        return () => {
            const index = listeners.indexOf(listener);
            if(index > -1){
                listeners.splice(index, 1)
            }
        }
    }
    this.dispatch({type:"@@INIT"})
    //return {getState, dispatch, subscribe}
}