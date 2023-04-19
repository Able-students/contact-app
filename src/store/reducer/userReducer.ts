import * as types from '../actions/types'

export interface UserType {
    id?: string,
    username?: string,
    email: string,
    password: string,
}

export type UserListType = UserType[]

export type InitialStateType = {
    userList: UserListType,
    currentUser?: UserType 
}

type ActionType = | {
    type: string,
    payload: UserListType 
} | {
    type: string,
    payload: UserType 
}

const list: string | null = localStorage.getItem('users')

const initialState: InitialStateType = {
    currentUser: {email: '', password: ''},
    userList: (list && list.length > 0) ? JSON.parse(list) : [],
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
        default: 
        return state
    }
}

export default reducer