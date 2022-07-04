import stalker from "../../assets/stalker.png"
{/*---- Interface reducer ----*/}
interface IAction {
    type: string
    payload?: any
}

const initialState = {
    data: [
        {
            id: 1,
            title: 'S.T.A.L.K.E.R. 2: Heart of Chornobyl',
            img: stalker,
            body: 'S.T.A.L.K.E.R. 2: Heart of Chornobyl — компьютерная игра в жанре шутера от первого лица с открытым миром, разрабатываемая украинской компанией GSC Game World для Microsoft Windows и Xbox Series X/S. Должна стать очередной игрой серии S.T.A.L.K.E.R.. Как и в предыдущих частях серии, действие S.T.A.L.K.E.R.',
            price: 1720
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