import * as types from '../actions/types'

export interface UserType {
    id?: string,
    username?: string,
    email: string,
    password: string,
}

export type UserListType = UserType[]

export type UserVariant = boolean;

export type InitialStateType = {
    userList: UserListType,
    userVariant : UserVariant,
    currentUser?: UserType 
}

type ActionType = | {
    type: string,
    payload: UserListType 
} | {
    type: string,
    payload: UserType 
} | {
    type: string,
    payload: UserVariant
}

const list: string | null = localStorage.getItem('users')

const initialState: InitialStateType = {
    currentUser: {email: '', password: '',id:''},
    userList: (list && list.length > 0) ? JSON.parse(list) : [],
    userVariant: true,
}

function reducer(state:InitialStateType = initialState, action: ActionType){
    switch(action.type){
        case types.SET_CURRENT_USER: 
            return {
                ...state,
                currentUser: action.payload
            }
        case types.SET_USER_LIST: 
            return {
                ...state,
                userList: action.payload
            }
        case types.SET_USER_VARIANT:
            return {
                ...state,
                userVariant: action.payload
            }
        default: 
            return state
    }
}

export default reducer