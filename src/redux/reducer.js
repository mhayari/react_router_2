import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";


const CountSlice = createSlice({
    name : "ToDoApp",
    initialState : {
        list : [],
        filterList:[]
    },
    reducers : {
    
        add(state, action){
            const id=state.list.length>0?state.list[state.list.length-1].id+1:1
            state.list=[...state.list,{...action.payload,id:id}]
            state.filterList=[...state.filterList,{...action.payload,id:id}]
            console.log(id)
        },
        filterFilm(state,action){
           state.list=action.payload.title !==''||action.payload.rating!==''? state.list.filter(film=>((film.title).toLowerCase()).includes((action.payload.title).toLowerCase())&&(film.rating>=Number(action.payload.rating))):[...state.filterList]
           
        },
        deleteItem(state,action){
            state.list=state.list.filter(list=>list.id!==action.payload)
            state.filterList=state.filterList.filter(list=>list.id!==action.payload)
            console.log(action.payload)
        },
        updated(state,action){
            state.list=[...state.list.map(item=>
                item.id===action.payload.id ? {...action.payload} : item)]
                  // list.title=action.payload.title;
                    // list.description=action.payload.description;
                    // list.posterUrl=action.payload.posterUrl;
                    // list.rating=action.payload.rating
            console.log(action.payload)
        

    },

}})

export const {add,filterFilm,deleteItem,updated} = CountSlice.actions

export default CountSlice.reducer

