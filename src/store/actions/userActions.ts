import { UserType, InitialStateType } from '../reducer/userReducer';
import store from '../store';
import * as types from '../actions/types';

interface NavigateFunction {
    (to: string): void;
    (delta: number): void;
}

type SetStateAction<S> = S;
type Dispatch<A> = (action: A) => void;

export const login = (user: UserType, setLoginError: Dispatch<SetStateAction<string | boolean>>, navigate: NavigateFunction) => {
    const { userList } = store.getState().userReducer as InitialStateType;
    let userFound = userList.find((elem: UserType) => elem.email === user.email)
    if(userFound){
        if(userFound.password === user.password){
            navigate('/contacts')
            store.dispatch({
                type: types.SET_CURRENT_USER,
                payload: userFound
            })
        }else{
            setLoginError('Incorrent password')
        }
    }else{
        setLoginError("User doesn't exist")
    }
}

export const register = (user: UserType) => {
    const { userList } = store.getState().userReducer as InitialStateType
    if(userList){
        let newList = [...userList, user]
        localStorage.setItem('users', JSON.stringify(newList))
        store.dispatch({
            type: types.SET_USER_LIST,
            payload: newList
        })
    }
}

export const variant = () => {
    const {userVariant} = store.getState().userReducer as InitialStateType
         store.dispatch({
            type: types.SET_USER_VARIANT,
            payload: !userVariant
        })
}

export const logout = () => {
    store.dispatch({
        type: types.SET_CURRENT_USER,
        payload: {email: '', password: '',id:''}
    })
}