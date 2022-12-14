const initState = {
    data : [],
    saved: []
}

export default function reducer (state = initState,action){
    switch(action.type){
        case 'ALL_DATA' : 
            return {
                ...state, data: action.payload
            }
        case 'SAVE': 
        if(state.saved.some(el => el.imdbID === action.payload.imdbID)){
            return state 
        }  
             return {
                ...state, saved:  [...state.saved, action.payload]
            }
        
           
        case 'DELETE' :
            return{
                ...state, saved: state.saved.filter(el => el.imdbID !== action.payload)
            }
        default : 
            return state
    }
}