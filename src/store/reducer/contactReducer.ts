import * as types from '../actions/types'

export interface ContactType {
    key: number,
    name: string,
    email: string,
    phone: string,
}

export type ContactListType = ContactType[]

export type InitialStateType = {
    contactList: ContactListType
}

type ActionType = {
    type: string,
    payload: ContactListType 
}

const list: string | null = localStorage.getItem('contactList')

const initialState: InitialStateType = {
    contactList: (list && list.length > 0) ? JSON.parse(list) : [],
}

function reducer(state:InitialStateType = initialState, action: ActionType){
    switch(action.type){
        case types.SET_CONTACT_LIST: 
            return {
                ...state,
                contactList: action.payload
            }
        default: 
        return state
    }
}

export default reducer