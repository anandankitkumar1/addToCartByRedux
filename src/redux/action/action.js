export const add = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}


export const del = (id) => {
    return {
        type: "DEL_CART",
        payload: id
    }
}

export const delOne = (item) => {
    return {
        type: "DEL_ONE",
        payload: item
    }
}