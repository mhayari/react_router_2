import {configureStore} from "@reduxjs/toolkit"
import MovieReducer from "./reducer"


const store = configureStore({
    reducer : {
           MovieRedux : MovieReducer
           
    }
})


export default store