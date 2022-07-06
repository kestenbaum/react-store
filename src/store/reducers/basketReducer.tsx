import {IItem} from "../../types/types";

{/*---- interface reducer----*/}
interface IAction {
    type: string
    payload?: any
}
interface IBasket {
    basket: IItem[]
}
const initialState:IBasket = {
    basket: []
}
export const basketReducer = (state = initialState, action:IAction) => {
    switch (action.type){
        case "GET_PRICE":
            return {...state}
        case "ADD_ITEM_BASKET":
            return {...state, basket: [...state.basket, action.payload]}
        case "REMOVE_ITEM_BASKET":
            return {...state, basket: state.basket.filter(item => item.id !== action.payload)}
        default:
            return state
    }
}

export const addItemToBasketAction = (payload:IItem) => ({type: "ADD_ITEM_BASKET", payload})
export const removeItemToBasketAction = (payload:number) => ({type: "REMOVE_ITEM_BASKET", payload})