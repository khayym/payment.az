import { stateValidator } from "./stateValidator";

export const reducer = (state, action) => {
    const isValid = stateValidator(action.payload.val, action.payload.typ);

    switch (action.type) {
        case 'editName':
            if (!isValid) return { ...state, name: { value: action.payload.val, error: true } }
            else return { ...state, name: { value: action.payload.val, error: false } }

        case 'editSurname':
            if (!isValid) return { ...state, surname: { value: action.payload.val, error: true } }
            else return { ...state, surname: { value: action.payload.val, error: false } }

        case 'editNumber':
            if (!isValid) return { ...state, number: { value: action.payload.val, error: true } }
            else return { ...state, number: { value: action.payload.val, error: false } }

        case 'editEmail':
            if (!isValid) return { ...state, email: { value: action.payload.val, error: true, } }
            else return { ...state, email: { value: action.payload.val, error: false, } }

        default:
            throw new Error();
    }
}