import * as types from '../actions/types'

export interface ContactType {
    key: number,
    name: string,
    email: string,
    phone: string,
}

type ContactListType = ContactType[]

export type StateType = {
    contactList: ContactListType
}

type ActionType = {
    type: string,
    payload: ContactListType
}

const initialState: StateType = {
    contactList: []
}

function reducer(state:StateType = initialState, action: ActionType){
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