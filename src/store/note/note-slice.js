import {createSlice, current} from "@reduxjs/toolkit";
import note from "../../pages/Note/Note";

export const noteSlice = createSlice({
    name: "noteSlice",
    initialState: {
        noteList: []
    },
    reducers: {
        setNoteList: (currentSlice, action) => {
            currentSlice.noteList = action.payload;
        }
    }
})

export const noteReducer = noteSlice.reducer;
export const {setNoteList} = noteSlice.actions;