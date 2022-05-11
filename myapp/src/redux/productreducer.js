const initial=[];


const additems=(state=initial,action)=>{
    switch(action.type){
        case "ADDITEM":

        return[
            ...state,
            action.payload
        ]

    
        

        case "DELITEM":

        return state=state.filter((x)=>{
            return x.id !==action.payload.id
        })
        

      

        default:return state;
       
    }
    
}

export default additems;