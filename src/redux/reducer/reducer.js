const initialState = {
    carts: []
}
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CART":
            const IteamIndex = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

            if (IteamIndex >= 0) {
                state.carts[IteamIndex].qnty += 1
                return {
                    ...state,
                    carts: [...state.carts]
                }
            } else {
                const temp = { ...action.payload, qnty: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }

        // return {
        //     ...state,
        //     carts:[...state.carts,action.payload]
        // }

        case "DEL_CART":
            const data = state.carts.filter((ele) => ele.id !== action.payload)
            return {
                ...state,
                carts: data
            }

        case "DEL_ONE":
            const IteamIndex_dec = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);
   
            if(state.carts[IteamIndex_dec].qnty >= 1){
                const dltiteams = state.carts[IteamIndex_dec].qnty -= 1
                console.log([...state.carts,dltiteams]);

                return {
                    ...state,
                    carts:[...state.carts]
                }
            }else if(state.carts[IteamIndex_dec].qnty === 1 ){
                const data = state.carts.filter((el)=>el.id !== action.payload);

                return {
                    ...state,
                    carts:data
                }
            }

        default: return state;
    }
}

export default cartReducer;