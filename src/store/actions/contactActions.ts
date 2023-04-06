import { ContactType } from '../reducer/contactReducer';
import store from '../store';
import * as types from '../actions/types'

export const addContact = (contact:ContactType) => {
    const { contactList } = store.getState().contactReducer
    store.dispatch({
        type: types.SET_CONTACT_LIST,
        payload: [...contactList, contact]
    })
}

