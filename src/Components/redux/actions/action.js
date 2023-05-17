export const ADD = (item) =>{
    return{
        type: "ADD_CART",
        payload:item
    }
}
// remove Item
export const REMOVE = (id) =>{
    return{
        type: "REMOVE_CART",
        payload:id
    }
}

// remove item

export const DECRESE_QUNTY_ONE =(item) =>{
    return{
        type: "DECRESE_ONE",
        payload:item
    }
}