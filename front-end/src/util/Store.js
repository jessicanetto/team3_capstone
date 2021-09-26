//initiliazing store object itself
import { createStore } from "redux";
//telling how the state will look inside it
import rootReducer from "./Reducers";
//devtools stuff
import { devToolsEnhancer } from "redux-devtools-extension";
//exporting into our app.js then passed down through entire app
export default createStore(rootReducer, devToolsEnhancer());
