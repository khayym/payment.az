import { controlTabView, updateTabViewState, firstOpenIndex, cleanTabViewState, addTabViewState, resetTabView } from "../reducers/tabControllerReducer"
import { store } from "../store/redux"

const services = {
    'update': (data) => store.dispatch(updateTabViewState(data)),
    'control': (data) => store.dispatch(controlTabView(data)),
    'firstOpenIndex': (data) => store.dispatch(firstOpenIndex(data)),
    'cleanState': (data) => store.dispatch(cleanTabViewState(data)),
    'setState': (data) => store.dispatch(addTabViewState(data)),
    'reset': (data) => store.dispatch(resetTabView(data))
}

export const tabSupervisor = (commandId, data) => {
    services[commandId](data);
    return
}