//All reducers get wto arguments. The current 'state' and 'action'
//State argument is not app state, only the state this reducer is responsible for
//The same state that is created by this reducer 
//is flowing back into this reducer when an action occurs
export default function(state = null, action){
    switch(action.type){
    case 'BOOK_SELECTED':
        return action.payload;
    }
     return state
}