import { createStore } from "redux";
import { datareducer } from "./Dataredux/Datareducer";


export const store=createStore(datareducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

