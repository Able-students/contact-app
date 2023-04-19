import { ContactType, ContactListType } from '../reducer/contactReducer';
import store from '../store';
import * as types from '../actions/types'

export const addContact = (contact:ContactType) => {
    const { contactList } = store.getState().contactReducer
    const newList: ContactListType = [...contactList, contact]
    setContactList(newList)
}

export const setContactList = (newContactList: ContactListType) => {
    localStorage.setItem('contactList', JSON.stringify(newContactList))
    store.dispatch({
        type: types.SET_CONTACT_LIST,
        payload: newContactList
    })
}

export const editContact = (contact:ContactType) => {
    const { contactList } = store.getState().contactReducer
    const newList = contactList.map(elem => {
        if(elem.key === contact.key){
            elem = contact
        }
        return elem
    })
    setContactList(newList)
}