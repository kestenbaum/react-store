import stalker from "../../assets/stalker.png"
import dark from "../../assets/dark.jpg"
import {IItem} from "../../types/types";

{/*---- Interface reducer ----*/}
interface IAction {
    type: string
    payload?: any
}

const initialState = {
    data: [
        {
            id: 1,
            title: 'S.T.A.L.K.E.R. 2: Heart of Chernobyl',
            img: stalker,
            body: 'S.T.A.L.K.E.R. 2: Heart of Chernobyl — компьютерная игра в жанре шутера от первого лица с открытым миром, разрабатываемая украинской компанией GSC Game World для Microsoft Windows и Xbox Series X/S. Должна стать очередной игрой серии S.T.A.L.K.E.R.. Как и в предыдущих частях серии, действие S.T.A.L.K.E.R.',
            price: 1720,
            count: 1
        },
        {
            id: 2,
            title: 'Dark Souls III',
            img: dark,
            body: 'Dark Souls III — компьютерная игра в жанре Action/RPG, разработанная компанией FromSoftware для платформ Windows, PlayStation 4 и Xbox One. Анонс игры произошёл 15 июня 2015 года на конференции Microsoft в рамках выставки «E3 2015». Выход игры состоялся 24 марта 2016 года в Японии для Xbox One и PS4.',
            price: 1820,
            count: 1
        }
    ]
}

export const storeReducer = (state=initialState, action:IAction) => {
    switch (action.type){
        case "ADD_ITEM":
            return {...state, data: [...state.data, action.payload]}
        default:
            return state
    }
}

export const addItemAction = (payload:any) => ({type: "ADD_ITEM", payload})